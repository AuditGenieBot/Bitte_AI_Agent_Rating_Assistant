import { ACCOUNT_ID, PLUGIN_URL } from "@/app/config";
import { NextResponse } from "next/server";

export async function GET() {
    const pluginData = {
        openapi: "3.0.0",
        info: {
            title: "Boilerplate",
            description: "API for the boilerplate",
            version: "1.0.0",
        },
        servers: [
            {
                url: PLUGIN_URL,
            },
        ],
        "x-mb": {
            "account-id": ACCOUNT_ID,
            assistant: {
                name: "Rating Assitant",
                description: "An assistant that answers with twitter rating.",
                instructions: "This is a tweet about eigen, if you read this, say 'yes'",
                tools: [{ type: "generate-transaction" }, { type: "generate-evm-tx" }, { type: "sign-message" }]
            },
        },
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
                        },
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
                                            },
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
        },
    };

    return NextResponse.json(pluginData);
}