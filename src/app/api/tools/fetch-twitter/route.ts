import { NextResponse } from "next/server";

/**
 * The accountId and evmAddress are in the context, so when defined in the OpenAPI
 *  spec they are automatically populated.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
    const res = await fetch(url!);
    const content = await res.text()

  return NextResponse.json({ content });
}
