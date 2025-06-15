import { ACCOUNT_ID, PLUGIN_URL } from "@/app/config";
import { NextResponse } from "next/server";

export async function GET() {
    const pluginData = {
        openapi: "3.0.0",
        info: {
            title: "Twitter Rating Assistant",
            description: "API for Twitter content rating",
            version: "1.0.0",
            "x-mb": {
                "account-id": ACCOUNT_ID,
                assistant: {
                    name: "Rating Assistant",
                    description: "An assistant that answers with twitter rating.",
                    instructions:
                        "You are a Twitter content scoring assistant. Rate the following tweet from 0 to 10, based only on how clearly and deeply it relates to blockchain and cryptocurrency concepts. A higher score means the tweet uses technical or relevant terminology, demonstrates understanding of crypto/blockchain, and offers insight, explanation, or meaningful background. A lower score means it is vague, generic, hypey, or unrelated. Output only a single number between 0–10. No explanation, no text, only the number.",
                    tools: [
                        { type: "fetch-twitter" },
                        { type: "generate-transaction" },
                        { type: "generate-evm-tx" },
                        { type: "sign-message" }
                    ]
                }
            }
        },
        servers: [
            {
                url: PLUGIN_URL,
            },
        ],
        paths: {
            "/api/tools/fetch-twitter": {
                get: {
                    summary: "fetch from twitter",
                    description: "Fetches from twitter and returns content",
                    operationId: "fetch-twitter",
                    parameters: [
                        {
                            name: "url",
                            in: "query",
                            required: true,
                            schema: {
                                type: "string"
                            },
                            description: "Twitter URL to fetch from."
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            content: {
                                                type: "string",
                                                description: "Content fetched from Twitter URL."
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };

    return NextResponse.json(pluginData);
}
