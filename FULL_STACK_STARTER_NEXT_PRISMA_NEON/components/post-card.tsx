import { Post } from "contentlayer/generated";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export const PostCard = async (post: Post) => {
  return (
    <div className="mb-8">
      <Link className={cn(buttonVariants({ variant: "link" }))} href={post.url}>
        {post.title}
      </Link>
      <time
        dateTime={post.date}
        className="block text-muted-foreground text-xs"
      >
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
};
