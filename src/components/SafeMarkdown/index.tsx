import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div
  className="
    prose prose-slate w-full max-w-none overflow-hidden
    md:prose-lgf
    prose-a:no-underline prose-a:text-blue-500 prose-a:transition
    prose-a:hover:text-blue-500 prose-a:hover:no-underline
    prose-img:mx-auto"
    >

      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
