import { Skeleton } from "@/components/ui/skeleton";

export default function CategorySkeleton() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
      <Skeleton className="h-[200px] w-[200px] rounded-4xl shadow-[0px_0px_2px_0px_#dbdbdb]" />
      <Skeleton className="h-[200px] w-[200px] rounded-4xl shadow-[0px_0px_2px_0px_#dbdbdb]" />
      <Skeleton className="h-[200px] w-[200px] rounded-4xl shadow-[0px_0px_2px_0px_#dbdbdb]" />
    </div>
  );
}
