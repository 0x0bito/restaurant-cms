import { getHeroSection } from "@/sanity/sanity.query";
import { heroType } from "@/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
  const data: heroType = await getHeroSection();

  return (
    <section className="bg-ice-blue flex flex-col justify-between rounded-4xl lg:flex-row">
      <div className="flex flex-1 flex-col p-12">
        <div className="flex flex-grow flex-col items-start justify-center gap-9">
          <h1 className="text-6xl font-semibold tracking-tighter">{data.title}</h1>
          <p className="leading-7 text-gray-500">{data.description}</p>
        </div>
        <div className="mt-auto pt-10">
          <Link
            href={data.buttonLink || "#"}
            className="group bg-light-red hover:bg-light-red/95 flex w-fit gap-2 rounded-2xl !px-7 !py-4 font-semibold text-white"
          >
            {data.buttonText}
            <ChevronRight
              size={18}
              className="block transform font-semibold transition-all group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      <div className="flex-1">
        <Image
          src={data.image}
          width={660}
          height={640}
          alt="image"
          priority={true}
          className="h-full w-full rounded-tr-4xl rounded-br-4xl object-cover max-sm:rounded-none max-sm:rounded-b-4xl"
        />
      </div>
    </section>
  );
}
