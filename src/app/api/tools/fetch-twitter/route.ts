import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  // Extract tweet ID from Twitter URL
  const tweetIdMatch = url?.match(/status\/(\d+)/);
  if (!tweetIdMatch) {
    return NextResponse.json({ error: "Invalid Twitter URL" }, { status: 400 });
  }

  const tweetId = tweetIdMatch[1];

  try {
    // Use RapidAPI to fetch Twitter content
    const response = await fetch(`https://twitter241.p.rapidapi.com/tweet?pid=${tweetId}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY || '',
        'X-RapidAPI-Host': 'twitter241.p.rapidapi.com'
      }
    });

    if (!response.ok) {
      throw new Error(`RapidAPI request failed: ${response.status}`);
    }

    const data = await response.json();

    // Pull the actual tweet text content (based on your screenshot)
    const content = data?.tweet?.full_text || '';

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error fetching Twitter data:', error);
    return NextResponse.json({ error: "Failed to fetch Twitter data" }, { status: 500 });
  }
}
