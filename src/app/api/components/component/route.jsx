'use server';

import Component from '@/models/component';
import connectDB from '@/lib/db';
import { NextResponse } from 'next/server';

const getSpecificComponent = async (id) => {
  try{
    const component = await Component.findById(id);

    if (!component) {
      return new NextResponse('Component not found', { status: 404 });
    }

    return NextResponse.json(component, { status: 200 });

  } catch(error){
    console.error('Error in fetching component by ID:', error);

    return new NextResponse(`Error in fetching component by ID: ${error.message}`, { status: 500 });
  }
}

const omitSpecificComponent = async(id, count) => {
  try{
    const randomComps = await Component.find({ _id: { $ne: id } }).sort({ _id: 1 }).limit(count).exec();

    if(!randomComps){
      return new NextResponse('Failed', { status: 404 });
    }

    return NextResponse.json(randomComps, { status: 200 });

  } catch(error){
    console.error('Error in fetching random components:', error);

    return new NextResponse(`Error in fetching random Components: ${error.message}`, { status: 500 });
  }
}

export const GET = async ( request ) => {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const operation = searchParams.get('operation');

    console.log(operation);

    const componentId = searchParams.get('id');

    if(operation === 'getById' && componentId){
      return getSpecificComponent(componentId);
    }

    if(operation === 'omitById' && componentId){
      const noOfComps = searchParams.get('count');

      return omitSpecificComponent(componentId, noOfComps);
    }

  } catch (error) {
    console.error('Error in GET request:', error);
    return new NextResponse(`Error in GET request: ${error.message}`, { status: 500 });
  }
};

