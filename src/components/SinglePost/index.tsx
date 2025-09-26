import { findPostBySlugCached } from "@/lib/post/queries"

type SinglePostPros = {
    slug: string
}

export async function SinglePost({ slug }: SinglePostPros) {
    const post = await findPostBySlugCached(slug)

    return (
        <div>
           <p>{post.author}</p>
        </div>
    )
}