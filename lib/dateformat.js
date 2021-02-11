import { parseISO, format } from "date-fns";
import { se } from "date-fns/locale";

export default function Date({ dateString }) {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString}>
      {format(date, "LLLL d, yyyy", { locale: se })}
    </time>
  );
}
