import { Skeleton } from "@/components/ui/skeleton";

export default function RecipeSkeleton() {
  return (
    <div className="flex h-[300px] w-[300px] flex-col justify-between gap-3 rounded-4xl p-5 shadow-[0px_0px_2px_0px_#dbdbdb]">
      <Skeleton className="h-[150px] w-full rounded-2xl" />
      <Skeleton className="h-[25px] w-1/2 rounded-4xl" />
      <div className="flex gap-2">
        <Skeleton className="h-[20px] w-1/4 rounded-4xl" />
        <Skeleton className="h-[20px] w-1/4 rounded-4xl" />
      </div>
    </div>
  );
}
