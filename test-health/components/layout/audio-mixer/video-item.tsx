import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useVideoStore } from "@/store/use-video";
import { Video } from "@/types";

export const VideoItem = ({ video }: { video: Video }) => {
    const setVideo = useVideoStore((state) => state.setVideo);

    return (
        <DropdownMenuItem onClick={() => setVideo(video)}>
            <video.icon className="w-4 h-4 mr-2" />
            {video.name}
        </DropdownMenuItem>
    );
};
