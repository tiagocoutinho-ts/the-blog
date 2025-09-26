import { findPostBySlugCached } from "@/lib/post/queries"
import { PostHeading } from "../PostHeading"
import Image from "next/image"
import { PostDate } from "../PostDate"

type SinglePostPros = {
    slug: string
}

export async function SinglePost({ slug }: SinglePostPros) {
    const post = await findPostBySlugCached(slug)

    return (
        <article className="mb-16">
            <header className="flex flex-col gap-4 mb-4">
                <Image
                    className="rounded-xl"
                    src={post.coverImageUrl}
                    width={1200}
                    height={720}
                    alt={post.title} />

                <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>

                <p>
                    {post.author} | <PostDate datetime={post.createdAt}/>
                </p>

                <p className="mb-4 text-xl">{post.excerpt}</p>

                <div>
                    {post.content}
                </div>
            </header>
        </article>
    ) 
}