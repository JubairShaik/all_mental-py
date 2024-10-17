import { Video } from "@/types";
import { create } from "zustand";

type State = {
    video: Video | null
}

type Action = {
    setVideo : (video: Video) => void
}

export const useVideoStore = create<State & Action>((set) => ({
    video: null,
    setVideo: (video: Video) => set({ video }),
}));
