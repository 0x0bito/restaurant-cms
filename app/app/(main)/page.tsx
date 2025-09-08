import Categories from "@/components/landing/Categories";
import FeaturedRecipies from "@/components/landing/FeaturedRecipies";
import Hero from "@/components/landing/Hero";
import OurSocial from "@/components/landing/OurSocial";
import Reviews from "@/components/landing/Reviews";
import CategorySkeleton from "@/components/skeletons/CategorySkeleton";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import { getCategories } from "@/sanity/sanity.query";
import { Suspense } from "react";

export default function Home() {
  const categoriesPromise = getCategories();

  return (
    <div className="space-y-36">
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<CategorySkeleton />}>
        <Categories categoriesPromise={categoriesPromise} />
      </Suspense>

      <FeaturedRecipies />
      <OurSocial />
      <Reviews />
    </div>
  );
}
