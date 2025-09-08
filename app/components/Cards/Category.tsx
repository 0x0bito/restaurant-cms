import Image from "next/image";
import Link from "next/link";

export default function Category({
  title,
  url,
  color,
  slug,
}: {
  title: string;
  url: string;
  color: string;
  slug: string;
}) {
  return (
    <Link
      href={`/category/${slug}`}
      className="group mx-auto flex min-h-[200px] w-fit max-w-[250px] cursor-pointer flex-col items-center justify-between rounded-3xl px-10 py-3 text-center"
      style={{
        background: `linear-gradient(to bottom, transparent, ${color})`,
      }}
    >
      {url ? (
        <div className="aspect-square w-full overflow-hidden rounded-xl">
          <Image
            src={url}
            alt={title}
            width={300}
            height={300}
            className="mx-auto block object-cover transition-all group-hover:scale-110"
            priority={false}
          />
        </div>
      ) : (
        <div className="h-[150px] w-[150px]"></div>
      )}
      <p className="text-lg font-semibold capitalize transition-all group-hover:opacity-85">
        {title}
      </p>
    </Link>
  );
}
