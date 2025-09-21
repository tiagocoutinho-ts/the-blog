import Link from "next/link";

type PostHeadingProps = {
    children: React.ReactNode
    url: string
    as: "h1" | "h2"
}

export function PostHeading({ children, url, as: Tag = "h1"}: PostHeadingProps) {
    const headingClassesMap = {
        h1: "text-2xl/tight mb-4 sm:text-4xl",
        h2: "text-2xl/tight bg-red-500 mb-4 sm:text-4xl"
    }

    const commonClasses = "font-extrabold"

    return (
        <Tag className={`${headingClassesMap[Tag]} ${commonClasses}`}>
            <Link href={url}>{children}</Link>
        </Tag>
    )
}