"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { categoryType } from "@/types";
import { use } from "react";
import Category from "../Cards/Category";

export default function Categories({
  categoriesPromise,
}: {
  categoriesPromise: Promise<categoryType[]>;
}) {
  const categories = use(categoriesPromise);

  return (
    <div id="categories" className="flex flex-col gap-20">
      <h2 className="flex items-center text-5xl font-semibold">Categories</h2>

      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          className="relative w-full"
        >
          <CarouselContent>
            {categories.map((ele) => {
              return (
                <CarouselItem
                  key={ele._id}
                  className="flex-none basis-full px-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <Category title={ele.title} url={ele.image} color={"#f3f5f0"} slug={ele.slug} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden! max-sm:top-1/2 max-sm:left-2 max-sm:z-10 max-sm:block! max-sm:-translate-y-1/2" />
          <CarouselNext className="hidden! max-sm:top-1/2 max-sm:right-2 max-sm:z-10 max-sm:block max-sm:-translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  );
}
