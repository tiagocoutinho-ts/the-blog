import { Container } from "@/components/Container"
import { Header } from "@/components/Header"
import { Suspense } from "react"
import { SpinLoader } from "@/components/SpinLoader"
import PostsList from "@/components/PostsList"
import { PostFeatured } from "@/components/PostFeatured"

export default async function HomePage() {

  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className="text-6xl font-bold text-center py-8">
        <p>Footer</p>
      </footer>
    </Container>
  )
}