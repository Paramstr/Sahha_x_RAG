import { NextResponse } from 'next/server'
import { Pinecone } from '@pinecone-database/pinecone';
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf'
import {
  //createPineconeIndex,
  updatePinecone
} from '../../../utils'
import { indexName } from '../../../config'

export async function POST() {
  try {
    const loader = new DirectoryLoader('./documents', {
      ".txt": (path) => new TextLoader(path),
      ".md": (path) => new TextLoader(path),
      ".pdf": (path) => new PDFLoader(path)
    })

    const docs = await loader.load()
    const vectorDimensions = 1536

    // Initialize Pinecone client with the new method
    const pc = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY || '',
    });

    console.log('⚡️ Pinecone client initialized');

    // List indexes to test the connection
    const indexes = await pc.listIndexes();
    console.log('⚡️ Available Pinecone indexes:', indexes);

    // You may need to adjust these functions to work with the new Pinecone client
    // await createPineconeIndex(pc, indexName, vectorDimensions)
    await updatePinecone(pc, indexName, docs)

    return NextResponse.json({
      data: 'Successfully created index and loaded data into Pinecone.'
    })
  } catch (err) {
    console.error('⚡️ Detailed error:', err);
    return NextResponse.json({ error: err || '⚡️ An unexpected error occurred' }, { status: 500 })
  }
}