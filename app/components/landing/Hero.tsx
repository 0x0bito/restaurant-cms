import { getHeroSection } from "@/sanity/sanity.query";
import { heroType } from "@/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
  const data: heroType = await getHeroSection();

  return (
    <section className="flex flex-col items-center justify-center overflow-hidden rounded-4xl bg-white lg:flex-row">
      <div className="flex flex-1 flex-col gap-12 px-10 py-14 lg:p-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl leading-tight font-semibold tracking-tight lg:text-6xl">
            {data.title}
          </h1>
          <p className="max-w-xl leading-7 text-gray-500">{data.description}</p>
        </div>

        <Link
          href={"#categories"}
          // href={data.buttonLink || "#"}
          className="bg-light-red hover:bg-light-red/95 group mt-4 inline-flex w-fit items-center gap-2 rounded-2xl px-7 py-4 font-semibold text-white transition-all"
        >
          {data.buttonText}
          <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="flex w-full flex-1">
        <div>
          <Image
            src={data.image}
            width={600}
            height={600}
            alt="image"
            priority
            className="h-full w-full rounded-none object-cover lg:rounded-4xl"
          />
        </div>
      </div>
    </section>
  );
}
