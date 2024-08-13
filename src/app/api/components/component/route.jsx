'use server';

import Component from '@/models/component';
import connectDB from '@/lib/db';
import { NextResponse } from 'next/server';

export const GET = async ( request ) => {
  try {
    await connectDB();

    const url = new URL(request.url);

    const componentId = url.searchParams.get('id');

    const component = await Component.findById(componentId);

    // console.log(component);

    return NextResponse.json(component, { status: 200 });
  } catch (error) {
    console.error('Error in fetching component:', error);
    return new NextResponse(`Error in fetching component: ${error.message}`, { status: 500 });
  }
};

