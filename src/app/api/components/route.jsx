'use server';

import Component from '@/models/component';
import connectDB from '@/lib/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connectDB();

    const components = await Component.find();

    return NextResponse.json(components, { status: 200 });
  } catch (error) {
    console.error('Error in fetching components:', error);
    return new NextResponse(`Error in fetching components: ${error.message}`, { status: 500 });
  }
};

export const POST = async (request) => {
    try{

        const requestObj = await request.json();

        console.log('Request data:', requestObj);

        await connectDB();

        await Component.create(requestObj);

        return NextResponse.json({message: 'component added'}, { status: 201 });
    } catch (error) {
        console.error('Error in adding component:', error);
        return new NextResponse(`Error in adding component: ${error.message}`, { status: 500 });
    }
};
