import { z } from "zod";
import { groq } from "../vendors/groq";

// const formSchema = z.object({
//     file: z.instanceof(FileList).optional(),
// });

export const createTranscription = async ({ file }: { file: File }) => {

    if (!file) {
        throw new Error("No audio file provided");
    }

    const transcription = await groq.audio.transcriptions.create({
        file: file, // Required path to audio file
        model: "distil-whisper-large-v3-en", // Required model to use for transcription
        prompt: "A Parent Teacher Association meeting with multiple speakers.", // Optional
        response_format: "verbose_json", // Optional
        language: "en", // Optional
        // temperature: 0.0, // Optional
    });
    console.log(transcription.text);
    return transcription.text;
};
    