"use client";

import { Sound as SoundType } from "@/types";
import { useState } from "react";
import { useHowl, Play } from "rehowl";
import { PlayPauseButton } from "./play-pause-button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export const SoundItem = ({ sound }: { sound: SoundType }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(50);

    const { howl, state, error, load } = useHowl({
        src: sound.url,
        preload: true,
    });

    return (
        <Card className="w-fit h-fit bg-foreground text-background px-4 rounded-md shadow-md">
            <div className="inline-flex items-center">
                <sound.icon className="w-4 h-4 mr-2" />
                <PlayPauseButton
                    className="mr-2 text-background bg-transparent border-none"
                    play={isPlaying}
                    setPlay={setIsPlaying}
                />{" "}
                {isPlaying ? (
                    <Play howl={howl}>
                        {({ playing }) => (
                            <>
                                This is the child of the play component!
                                Playing: {playing().toString()}
                            </>
                        )}
                    </Play>
                ) : null}
                <Slider
                    className={cn("w-[100px]")}
                    step={0.5}
                    max={100}
                    defaultValue={[50]}
                />
            </div>
        </Card>
    );
};
