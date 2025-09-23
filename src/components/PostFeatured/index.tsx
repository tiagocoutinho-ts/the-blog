import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href: "/post/exemple"
          }}

          imageProps={{
            width: 1200,
            height: 720,
            src: "/images/bryen_9.png",
            alt: "Alt da imagem",
            priority: true
          }}
        />

        <div className="flex flex-col gap-4 sm: justify-center">
          <time
            className="text-slate-600 text-sm/tight block "
            dateTime="2025-09-19">20/04/2025 05:20</time>

          <PostHeading as="h1" url="#">
            Lorem ipsum dolor sit amet consectetur.
          </PostHeading>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati porro voluptatem magnam dolores ducimus facere temporibus non, tenetur accusantium corrupti repellat reprehenderit eveniet minus totam, quia veritatis fugit autem necessitatibus?</p>
        </div>
      </section>
    )
}