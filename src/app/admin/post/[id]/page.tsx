export const dynamic = "force-dynamic"

type AdminPostIdPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function AdminPostIdPage({ params }: AdminPostIdPageProps) {
  const { id } = await params
  return (
    <div>
      <h1>Page Post {id}</h1>
    </div>
  )
}