import { CoreMessage, streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<Response> {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: openai("gpt-4o"),
      system:
        "You are a helpful assistant that can answer questions about baseball. If anyone asks about anything other than baseball, you should say that you are not able to answer that question.",
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error:", error);
    return new Response("Error processing your request.", { status: 500 });
  }
}
