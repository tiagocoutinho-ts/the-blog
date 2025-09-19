import { Container } from "@/components/Container"
import { Header } from "@/components/Header"
import { Suspense } from "react"
import { SpinLoader } from "@/components/SpinLoader"
import PostsList from "@/components/PostsList"
import Image from "next/image"
import Link from "next/link"

export default async function HomePage() {

  return (
      <Container>
        <Header/>

        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
          <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
            <Image 
            className="group-hover:scale-105 transition"
            src="/images/bryen_0.png" 
            width={1200} 
            height={720} 
            alt="Título do Post"></Image>
          </Link>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati porro voluptatem magnam dolores ducimus facere temporibus non, tenetur accusantium corrupti repellat reprehenderit eveniet minus totam, quia veritatis fugit autem necessitatibus?
          </div>
        </section>

        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>
        
        <footer className="text-center">
          <p>Footer</p>
        </footer>
    </Container>
  )
}