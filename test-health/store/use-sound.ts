
import { Sound } from "@/types";
import { create } from "zustand";

type State = {
    sounds: { [key: string]: Sound };
}

type Action = {
    setVolume: (soundName: Sound['name'], volume: number) => void;
    setIsPlaying: (soundName: Sound['name'], isPlaying: boolean) => void;
}

export const useSoundStore = create<State & Action>((set) => ({
    sounds: {},
    setVolume: (soundName: Sound['name'], volume: number) =>
        set((state) => ({ sounds: { ...state.sounds, [soundName]: { ...state.sounds[soundName], volume } } })),
    setIsPlaying: (soundName: Sound['name'], isPlaying: boolean) =>
        set((state) => ({ sounds: { ...state.sounds, [soundName]: { ...state.sounds[soundName], isPlaying } } })),
}));
