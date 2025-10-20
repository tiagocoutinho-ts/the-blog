import { findAllPostAdmin } from "@/lib/post/queries/admin"
import clsx from "clsx"
import { Trash2Icon } from "lucide-react"
import Link from "next/link"

export default async function PostListAdmin() {
  const posts = await findAllPostAdmin()

  return (
    <div className="mb-16">
      {posts.map(post => {
        return <div className={clsx("py-2 px-2", !post.published && "bg-slate-300", "flex gap-2 items-center justify-between")}
          key={post.id} >
          <Link href={`/admin/post/${post.id}`}>{post.author}</Link>

          {!post.published && <span className="text-xs text-slate-600 font-extrabold"> [Não publicado] </span>}

          <button className="text-red-500 cursor-pointer transition hover:scale-120 hover:text-red-700"
          aria-label={`Apagar post: ${post.title}`}
          title={`Apagar post: ${post.title}`}>
            <Trash2Icon />
          </button>
        </div>
      })}
    </div>
  )
}