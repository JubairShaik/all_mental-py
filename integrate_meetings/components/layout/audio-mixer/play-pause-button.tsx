import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export const PlayPauseButton = ({
    play,
    setPlay,
    className,
}: {
    play: boolean;
    setPlay: (playing: boolean) => void;
    className?: string;
}) => (
    <Button
        className={buttonVariants({
            variant: "outline",
            size: "icon",
            className: className,
        })}
        onClick={() => setPlay(!play)}
    >
        {play ? "⏸" : "▶"}
    </Button>
);