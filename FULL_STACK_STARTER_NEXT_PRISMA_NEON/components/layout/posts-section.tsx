import { Post } from "contentlayer/generated";
import { PostCard } from "../post-card";
import { H1, SectionWrapper } from "../typography";

export const PostsSection = async ({posts}:{posts: Post[]}) => {

    return (
      <SectionWrapper>
        <H1>Articles</H1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </SectionWrapper>
    );

}
