import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getTotalRecipesByCategory } from "@/sanity/sanity.query";

export default async function RecipePagination({ slug, page }: { slug: string; page: number }) {
  if (!page) {
    return null;
  }
  if (!Number(page) || Number(page) < 0) {
    return null;
  }

  const currentPage = Number(page) || 1;

  const totalRecipes = await getTotalRecipesByCategory(slug);
  const totalPages = Math.ceil(totalRecipes / Number(process.env.NEXT_PUBLIC_RECIPE_PER_PAGE));

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant={"ghost"} disabled={currentPage <= 1}>
            <PaginationPrevious href={`?page=${currentPage - 1}`} />
          </Button>
        </PaginationItem>

        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <PaginationItem key={pageNum}>
              <PaginationLink href={`?page=${pageNum}`} isActive={pageNum === currentPage}>
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <Button variant={"ghost"} disabled={currentPage >= totalPages}>
            <PaginationNext href={`?page=${currentPage + 1}`} />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
