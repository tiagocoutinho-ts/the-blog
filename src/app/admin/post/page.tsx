import { findAllPostAdmin } from "@/lib/post/queries/admin"
import { Metadata } from "next"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Post Admin"
}

export default async function AdminPostPage() {
  const posts = await findAllPostAdmin()

  return (
    <div>
      <h1>Page Post</h1>
      {posts.map(e => (
        //test findAllPostAdmin
        <div className="bg-sky-950 m-2">
          <h1 className="text-white">{e.author}</h1>
          <p className="text-white">{e.content}</p>
        </div>
      ))}
    </div>
  )
}