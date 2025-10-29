import { findAllPostAdmin } from "@/lib/post/queries/admin"
import clsx from "clsx"
import Link from "next/link"
import { DeletePostButton } from "../admin/DeletePostButton"

export default async function PostListAdmin() {
  const posts = await findAllPostAdmin()

  return (
    <div className="mb-16">
      {posts.map(post => {
        return <div className={clsx("py-2 px-2", !post.published && "bg-slate-300", "flex gap-2 items-center justify-between")}
          key={post.id} >
          <Link href={`/admin/post/${post.id}`}>{post.author}</Link>

          {!post.published && <span className="text-xs text-slate-600 font-extrabold"> [Não publicado] </span>}


          <DeletePostButton id={post.id} title={post.title} />
        </div>
      })}

      
    </div>
  )
}