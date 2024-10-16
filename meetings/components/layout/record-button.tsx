"use client";

import { Mic } from "lucide-react";
import { Button } from "../ui/button";
import { useRecordVoice } from "@/hooks/use-record-voice";

export const RecordButton = () => {
    const { startRecording, stopRecording, text, loading } = useRecordVoice();

    return (
        <div className="container">
            <div className="flex items-center justify-center">
                <div className="inline-flex">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={startRecording}
                        onMouseDown={startRecording}
                        onMouseUp={stopRecording}
                        onTouchStart={startRecording}
                        onTouchEnd={stopRecording}
                    >
                        <Mic />
                    </Button>
                    <div>
                        {loading ? "Loading..." : text}
                    </div>
                </div>
            </div>
        </div>
    );
};
