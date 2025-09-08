import Recipe from "@/components/Cards/Recipe";
import CategoryBreadCrumb from "@/components/CategoryBreadcrumb";
import RecipeSkeleton from "@/components/skeletons/RecipeSkeleton";
import { getRecipesByCategory } from "@/sanity/sanity.query";
import { recipeType } from "@/types";
import { Suspense } from "react";
import RecipePagination from "./RecipePagination";

function LoadingState() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-3 md:grid-cols-5">
      <RecipeSkeleton />
      <RecipeSkeleton />
      <RecipeSkeleton />
      <RecipeSkeleton />
      <RecipeSkeleton />
    </div>
  );
}

async function ShowCategoryRecipes({ data }: { data: recipeType[] }) {
  if (data == null || data.length == 0) {
    return (
      <div className="flex min-h-[300px] w-full items-center justify-center">
        <h1 className="text-xl font-semibold text-gray-600">No recipes found in this category.</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-3 md:grid-cols-5">
      {data.map((ele) => {
        return (
          <Recipe
            key={ele._id}
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

async function Categories({
  slug,
  page,
  pageNumber,
}: {
  slug: string;
  page: string | number | string[];
  pageNumber: number;
}) {
  const data: recipeType[] = await getRecipesByCategory(
    slug,
    Number(page),
    Number(process.env.NEXT_PUBLIC_RECIPE_PER_PAGE)
  );

  return (
    <>
      <ShowCategoryRecipes data={data} />
      {data && data.length > 0 && <RecipePagination slug={slug} page={pageNumber} />}
    </>
  );
}

export default async function Category({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const page = (await searchParams).page || 1;

  const pageNumber = Math.max(1, Number(page || 1));

  return (
    <div className="my-28 flex min-h-screen flex-col gap-28">
      <CategoryBreadCrumb />
      <Suspense fallback={<LoadingState />}>
        <Categories slug={slug} page={page} pageNumber={pageNumber} />
      </Suspense>
    </div>
  );
}
