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
            className="w-full h-full object-cover object-center group-hover:scale-105 transition"
            src="/images/bryen_0.png" 
            width={1200} 
            height={720} 
            alt="Título do Post"
            priority></Image>
          </Link>

          <div className="flex flex-col gap-4 sm: justify-center">
            <time 
            className="text-slate-600 text-sm/tight block "
            dateTime="2025-09-19">20/04/2025 05:20</time>
            
            <h1 className="text-2xl/tight mb-4 font-extrabold sm:text-4xl">
              <Link href="#">Lorem ipsum dolor sit amet.</Link>
            </h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati porro voluptatem magnam dolores ducimus facere temporibus non, tenetur accusantium corrupti repellat reprehenderit eveniet minus totam, quia veritatis fugit autem necessitatibus?</p>
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