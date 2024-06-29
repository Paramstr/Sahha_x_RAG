import { NextRequest, NextResponse } from 'next/server'
import { Pinecone } from '@pinecone-database/pinecone'
import {
  queryPineconeVectorStoreAndQueryLLM,
} from '../../../utils'
import { indexName } from '../../../config'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Initialize Pinecone client with the new method
    const pc = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY || '',
    });

    console.log('Pinecone client initialized');

    // Get the index
    const index = pc.index(indexName);

    // You may need to adjust the queryPineconeVectorStoreAndQueryLLM function
    // to work with the new Pinecone client structure
    const text = await queryPineconeVectorStoreAndQueryLLM(pc, indexName, body)

    return NextResponse.json({
      data: text
    })
  } catch (error) {
    console.error('Error in POST request:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}