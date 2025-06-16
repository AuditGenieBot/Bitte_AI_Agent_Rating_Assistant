import { ACCOUNT_ID, PLUGIN_URL } from "@/app/config";
import { NextResponse } from "next/server";

export async function GET() {
    const pluginData = {
        openapi: "3.0.0",
        info: {
            title: "Twitter Rating Assistant",
            description: "API for Twitter content rating",
            version: "1.0.0"
        },
        servers: [
            {
                url: PLUGIN_URL,
            },
        ],
        "x-mb": {
            "account-id": ACCOUNT_ID,
            "email": "yang.hang0918@hotmail.com",
            "assistant": {
                "name": "Rating Assistant",
                "description": "An assistant that answers with twitter rating.",
                "instructions": "You are a Twitter content scoring assistant. When a URL is given, use the fetch-twitter tool to retrieve the content. Rate the following tweet from 0 to 10, based only on how clearly and deeply it relates to blockchain and cryptocurrency concepts. A higher score means the tweet uses technical or relevant terminology, demonstrates understanding of blockchain mechanics, or discusses specific crypto projects. Your response must be only a number between 0 and 10, with no explanation or text.",
                "tools": [{ "type": "fetch-twitter" }, { "type": "generate-transaction" }, { "type": "generate-evm-tx" }, { "type": "sign-message" }]
            },
        },
        paths: {
            "/api/tools/fetch-twitter": {
                get: {
                    summary: "Fetch Twitter content",
                    description: "Fetches tweet content from a Twitter URL",
                    operationId: "fetch-twitter",
                    parameters: [
                        {
                            name: "url",
                            in: "query",
                            required: true,
                            schema: {
                                type: "string"
                            },
                            description: "Twitter URL to fetch content from"
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
                                                description: "Content fetched from Twitter URL"
                                            }
                                        },
                                        required: ["content"]
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Bad request - Invalid Twitter URL",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Internal server error",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string"
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