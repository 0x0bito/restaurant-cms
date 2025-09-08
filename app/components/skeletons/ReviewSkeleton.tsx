import { Skeleton } from "../ui/skeleton";

export default function ReviewSkeleton() {
  return (
    <div className="flex w-[75%] flex-col gap-5 text-start">
      <div className="flex max-w-full items-center justify-between">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="star h-5 w-5 rounded-sm" />
          ))}
        </div>
      </div>

      <Skeleton className="h-4 w-full max-w-md" />
      <Skeleton className="h-4 w-full max-w-md" />
      <Skeleton className="h-4 w-2/3" />

      <Skeleton className="h-[1px] w-1/2 bg-gray-200" />

      <Skeleton className="h-5 w-32 rounded" />
    </div>
  );
}
