import RecipeCard from "@/components/Cards/Recipe";
import RecipeSkeleton from "@/components/skeletons/RecipeSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { getFeaturedRecipes, getRecipeBySlug } from "@/sanity/sanity.query";
import { recipeType } from "@/types";
import { UtensilsIcon } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

async function ShowRecipeDetails({ slug }: { slug: string }) {
  const data: recipeType = await getRecipeBySlug(slug);
  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-6xl font-semibold">Recipe Not Found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-20">
      <h1 className="text-6xl font-semibold">{data.title}</h1>

      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-start gap-2">
          <UtensilsIcon size={18} />
          {data.categories.map((ele) => (
            <span
              key={ele._id}
              className="rounded-3xl border border-slate-200 px-3 py-1 text-xs font-medium"
            >
              {ele.title}
            </span>
          ))}
        </div>

        <div className="flex justify-between gap-5 max-md:flex-wrap">
          <Image
            alt={data.alt}
            src={data.image}
            width={800}
            height={600}
            priority={true}
            className="rounded-xl"
          />
          <div className="mt-5 flex h-full flex-1 flex-col justify-between gap-5">
            <p className="text-left text-xl leading-8 font-medium opacity-60">{data.description}</p>
            <p className="text-2xl font-bold">{data.price} Dhs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecipeLoadingState() {
  return (
    <div className="flex flex-col gap-20">
      <Skeleton className="h-[40px] w-[20%] rounded-3xl" />

      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-start gap-2">
          <Skeleton className="h-[20px] w-[20px] rounded-2xl" />
          <Skeleton className="h-[20px] w-[50px] rounded-3xl" />
          <Skeleton className="h-[20px] w-[50px] rounded-3xl" />
        </div>

        <div className="flex justify-between gap-5 max-md:flex-wrap">
          <Skeleton className="h-[600px] w-[800px] rounded-4xl" />
          <div className="mt-5 flex h-full flex-1 flex-col justify-between gap-5">
            <Skeleton className="h-[100px] w-full rounded-4xl" />
            <Skeleton className="h-[30px] w-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

async function Suggestion() {
  const someRecipes: recipeType[] = await getFeaturedRecipes(3);

  if (!someRecipes) {
    return <div></div>;
  }

  return (
    <div className="flex flex-col gap-20">
      <h2 className="text-center text-4xl font-semibold">You may like these recipe too</h2>

      <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 md:grid-cols-3">
        {someRecipes.map((ele, idx) => {
          return (
            <RecipeCard
              key={idx}
              slug={ele.slug}
              url={ele.image}
              title={ele.title}
              category={ele.categories}
            />
          );
        })}
      </div>
    </div>
  );
}

function SuggestionLoadingState() {
  return (
    <div className="flex flex-col gap-20">
      <Skeleton className="mx-auto h-[50px] w-1/3" />

      <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 md:grid-cols-3">
        <RecipeSkeleton />
        <RecipeSkeleton />
        <RecipeSkeleton />
      </div>
    </div>
  );
}

export default async function Recipe({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="my-20 flex flex-col gap-40">
      <Suspense fallback={<RecipeLoadingState />}>
        <ShowRecipeDetails slug={slug} />
      </Suspense>

      <Suspense fallback={<SuggestionLoadingState />}>
        <Suggestion />
      </Suspense>
    </div>
  );
}
