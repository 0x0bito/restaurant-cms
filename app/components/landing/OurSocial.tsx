import { getSocialMediaPosts } from "@/sanity/sanity.query";
import { socialMediaType } from "@/types";
import Image from "next/image";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";

async function ShowPosts() {
  const data: socialMediaType = await getSocialMediaPosts();

  return (
    <>
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-semibold md:text-5xl">{data.title}</h2>
        <p className="mx-auto leading-7 text-gray-500 md:max-w-1/2">{data.subtitle}</p>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-10 max-sm:justify-center">
        {data.images.map((ele) => (
          <Image
            key={ele.alt}
            width={300}
            height={600}
            alt={ele.alt}
            src={ele.url}
            className="rounded-lg"
          />
        ))}
      </div>
    </>
  );
}

function LoadingState() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <Skeleton className="mx-auto h-[40px] w-1/2" />
        <Skeleton className="mx-auto h-[25px] w-[25%]" />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <Skeleton className="h-[400px] w-full max-w-xs rounded-xl" />
        <Skeleton className="h-[400px] w-full max-w-xs rounded-xl" />
        <Skeleton className="h-[400px] w-full max-w-xs rounded-xl" />
      </div>
    </>
  );
}

export default async function OurSocial() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-20 text-center">
      <Suspense fallback={<LoadingState />}>
        <ShowPosts />
      </Suspense>
    </div>
  );
}
