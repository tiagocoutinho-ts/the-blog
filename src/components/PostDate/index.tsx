import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime";

type PostDateProps = {
  datetime: string
}

export function PostDate({ datetime }: PostDateProps) {
  return (
    <time
      className="text-slate-600 text-sm/tight "
      dateTime={datetime}
      title={formatRelativeDate(datetime)}>
      {formatDateTime(datetime)}
    </time>
  )
}