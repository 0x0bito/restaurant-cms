import { Recipecategory } from "@/types";
import { Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({
  url,
  title,
  category,
  slug,
}: {
  url: string;
  title: string;
  category: Recipecategory[];
  slug: string;
}) {
  return (
    <Link
      href={`/recipe/${slug}`}
      className="block w-full overflow-hidden rounded-4xl p-5 text-start shadow-[0px_0px_2px_0px_#dbdbdb]"
    >
      <div className="relative mb-5 aspect-[4/3] w-full">
        <Image
          src={url}
          alt={title}
          width={500}
          height={500}
          className="rounded-xl object-cover"
          priority={true}
        />
      </div>
      <p className="mt-3 max-w-3/4 text-lg font-semibold">{title}</p>
      <div className="mt-2 flex items-center gap-2">
        <Utensils size={18} />
        {category.map((ele, idx) => (
          <span
            key={idx}
            className="rounded-3xl border border-slate-200 px-3 py-1 text-xs font-medium"
          >
            {ele.title}
          </span>
        ))}
      </div>
    </Link>
  );
}
