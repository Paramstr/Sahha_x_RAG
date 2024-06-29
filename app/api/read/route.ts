import { NextRequest, NextResponse } from 'next/server'
import { Pinecone } from '@pinecone-database/pinecone'
import {
  queryPineconeVectorStoreAndQueryLLM,
} from '../../../utils'
import { indexName } from '../../../config'

export async function POST(req: NextRequest) {
  console.log('DEBUG: Starting POST request handler');
  try {
    const body = await req.json()
    console.log('DEBUG: Request body:', body);

    if (!process.env.PINECONE_API_KEY) {
      throw new Error('PINECONE_API_KEY is not set');
    }

    const pc = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
    });

    console.log('DEBUG: Pinecone client initialized');

    const index = pc.index(indexName);
    console.log('DEBUG: Pinecone index accessed:', indexName);

    const text = await queryPineconeVectorStoreAndQueryLLM(pc, indexName, body)
    console.log('DEBUG: Query completed');

    return NextResponse.json({
      data: text
    })
  } catch (error) {
    console.error('Error in POST request:', error);
    return NextResponse.json({ error: error || 'An unexpected error occurred' }, { status: 500 })
  }
}