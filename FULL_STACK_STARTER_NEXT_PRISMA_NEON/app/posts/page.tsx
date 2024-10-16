import { allPosts as posts } from "contentlayer/generated";
import { PostsSection } from "@/components/layout/posts-section";

export default function PostsPage() {

  return (
    <>
      <PostsSection posts={posts} />
    </>
  );
}
