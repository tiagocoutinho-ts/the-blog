import PostsList from "@/components/PostsList"
import { SpinLoader } from "@/components/SpinLoader"
import { Suspense } from "react"

export default async function HomePage() {

  return (
    <div>
      <header>
        <h1 className="text-center">Aqui é a Head</h1>
      </header>

      <Suspense fallback={<SpinLoader/>}>
        <PostsList/>
      </Suspense>

      <footer className="text-center">
        <p>Footer</p>
      </footer>
    </div>
  )
}