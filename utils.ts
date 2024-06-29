import { OpenAIEmbeddings } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { OpenAI } from '@langchain/openai'
import { loadQAStuffChain } from 'langchain/chains'
import { Document } from 'langchain/document'
import { timeout } from './config'
import { Pinecone } from '@pinecone-database/pinecone'
import { encodingForModel } from "js-tiktoken";


export const queryPineconeVectorStoreAndQueryLLM = async (
  pc: Pinecone,
  indexName: string,
  question: string
) => {
  console.log('Querying Pinecone vector store...');
  const index = pc.index(indexName);

  const queryEmbedding = await new OpenAIEmbeddings().embedQuery(question)
  
  let queryResponse = await index.query({
    vector: queryEmbedding,
    topK: 10,
    includeMetadata: true,
    includeValues: true,
  });

    console.log(`Found ${queryResponse.matches.length} matches...`);
  console.log('Retrieved matches:');
  queryResponse.matches.forEach((match, index) => {
    console.log(`\nMatch ${index + 1}:`);
    console.log(`ID: ${match.id}`);
    console.log(`Score: ${match.score}`);
    console.log('Metadata:');
    console.log(JSON.stringify(match.metadata, null, 2));
    console.log('Page Content:');
    const pageContent = match.metadata?.pageContent;
    if (typeof pageContent === 'string') {
      console.log(pageContent.substring(0, 150) + '...');  // Display first 150 characters
    }
  });

  console.log(`Found ${queryResponse.matches.length} matches...`);
  console.log(`Asking question: ${question}...`);

  if (queryResponse.matches.length) {
    const llm = new OpenAI({
      modelName: 'gpt-4-turbo',
    });
    const chain = loadQAStuffChain(llm);
    const concatenatedPageContent = queryResponse.matches
      .map((match) => match.metadata?.pageContent || "")
      .filter(content => content !== "")
      .join(" ");

      // Log the combined input
    console.log("\nDEBUG--- Combined Input to LLM ---");
    console.log("Context (first 500 characters):");
    console.log(concatenatedPageContent.substring(0, 500) + (concatenatedPageContent.length > 500 ? "..." : ""));
    console.log("\nQuestion:");
    console.log(question);
    console.log("-------------------------------\n");


    
    //log token input
    const encoder = encodingForModel("gpt-4");
    const inputTokens = encoder.encode(concatenatedPageContent + question);
    console.log(`⚡️ Input tokens: ${inputTokens.length}`);

    const result = await chain.call({
      input_documents: [new Document({ pageContent: concatenatedPageContent })],
      question: question,
    });



    
    console.log(`Answer: ${result.text}`);

    // Count output tokens
    const outputTokens = encoder.encode(result.text);
    console.log(`⚡️ Output tokens: ${outputTokens.length}`);
    // Total tokens
    console.log(`⚡️ Total tokens: ${inputTokens.length + outputTokens.length}`);

    
    return result.text
  } else {
    console.log('Since there are no matches, GPT-3 will not be queried.');
  }
};

export const updatePinecone = async (pc: Pinecone, indexName: string, docs: any[]) => {
  console.log('Retrieving Pinecone index...');
  const index = pc.index(indexName);
  console.log(`Pinecone index retrieved: ${indexName}`);

  for (const doc of docs) {
    console.log(`Processing document: ${doc.metadata.source}`);
    const txtPath = doc.metadata.source;
    const text = doc.pageContent;
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
    });
    console.log('Splitting text into chunks...');
    const chunks = await textSplitter.createDocuments([text]);
    console.log(`Text split into ${chunks.length} chunks`);
    console.log(
      `Calling OpenAI's Embedding endpoint documents with ${chunks.length} text chunks ...`
    );
    const embeddingsArrays = await new OpenAIEmbeddings().embedDocuments(
      chunks.map((chunk) => chunk.pageContent.replace(/\n/g, " "))
    );
    console.log('Finished embedding documents');
    console.log(
      `Creating ${chunks.length} vectors array with id, values, and metadata...`
    );

    const batchSize = 100;
    let batch: any = [];
    for (let idx = 0; idx < chunks.length; idx++) {
      const chunk = chunks[idx];
      const vector = {
        id: `${txtPath}_${idx}`,
        values: embeddingsArrays[idx],
        metadata: {
          ...chunk.metadata,
          loc: JSON.stringify(chunk.metadata.loc),
          pageContent: chunk.pageContent,
          txtPath: txtPath,
        },
      };
      batch.push(vector);
      if (batch.length === batchSize || idx === chunks.length - 1) {
        await index.upsert(batch);
        batch = [];
      }
    }
    console.log(`Pinecone index updated with ${chunks.length} vectors`);
  }
};