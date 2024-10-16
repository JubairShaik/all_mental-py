"use client";

import { Sound as SoundType, Video } from "@/types";
import { SoundItem } from "./sound-item";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import { VideoItem } from "./video-item";
import { sounds } from "@/registry/sounds";
import { videos } from "@/registry/videos";

export const AudioMixer = () => {
    return (
        <section className="fixed bottom-0 left-0 right-0 bg-foreground text-background p-4">
            <div className="container mx-auto">
                <div className="flex space-x-4">
                    {sounds.map((sound) => (
                        <SoundItem key={sound.name} sound={sound} />
                    ))}
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Icons.media />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Vibes</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {videos.map((video) => (
                                <VideoItem key={video.name} video={video} />
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </section>
    );
};
