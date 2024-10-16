'use server'

import { ChatCompletionAssistantMessageParam, ChatCompletionMessageParam } from "groq-sdk/resources/chat/completions.mjs";
import { groq } from "../vendors/groq";

export const getChatCompletion = async (messages: ChatCompletionMessageParam[]) => {

    const response = await groq.chat.completions.create({
        messages: messages,
        model: "llama3-8b-8192",
        // temperature: 1,
        // max_tokens: 1024,
        // top_p: 1,
        // stop: null,
        // stream: true,
    });

    return response.choices;
};
