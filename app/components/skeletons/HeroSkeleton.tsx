import { Skeleton } from "../ui/skeleton";

export default function HeroSkeleton() {
  return (
    <section className="flex h-[70vh] w-full flex-col justify-between rounded-4xl lg:flex-row">
      <Skeleton className="h-full w-full bg-[#9fe0efb1]" />
    </section>
  );
}
