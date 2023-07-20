import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// * It's Static On Demand Revalidation
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  if (secret !== process.env.MY_TOKEN) {
    return NextResponse.json({ message: 'Invalid token ' });
  }
  revalidatePath('/');

  return NextResponse.json({ revalidated: true });
}
