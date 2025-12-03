import { getFeaturedRecipes } from "@/sanity/sanity.query";
import { recipeType } from "@/types";
import { Suspense } from "react";
import Recipe from "../Cards/Recipe";
import RecipeSkeleton from "../skeletons/RecipeSkeleton";

function LoadingState() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 md:grid-cols-3">
      <RecipeSkeleton />
      <RecipeSkeleton />
      <RecipeSkeleton />
    </div>
  );
}

async function ShowFeaturedRecipes() {
  const data: recipeType[] = await getFeaturedRecipes(6);

  return (
    <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 md:grid-cols-3">
      {data.map((ele, idx) => {
        return (
          <Recipe
            key={idx}
            slug={ele.slug}
            url={ele.image}
            title={ele.title}
            category={ele.categories}
          />
        );
      })}
    </div>
  );
}

export default async function FeaturedRecipies() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-20 text-center">
      <div className="flex flex-col gap-5">
        <h2 className="text-5xl font-semibold">Recettes simples et savoureuses</h2>
        <p className="mx-auto leading-7 text-gray-500 md:max-w-1/2">
          Des plats frais et pleins de saveurs.
        </p>
      </div>
      <Suspense fallback={<LoadingState />}>
        <ShowFeaturedRecipes />
      </Suspense>
    </div>
  );
}
