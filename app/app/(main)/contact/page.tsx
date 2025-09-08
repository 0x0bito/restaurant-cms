import { Separator } from "@/components/ui/separator";
import { getContactInfo } from "@/sanity/sanity.query";
import { contactType } from "@/types";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Contact() {
  const data: contactType = await getContactInfo();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            We&apos;d love to hear from you! Get in touch with us for reservations, inquiries, or
            just to say hello.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="flex items-start gap-5">
              <div className="mr-4 rounded-full bg-gray-100 p-3">
                <MapPin className="h-6 w-6 text-amber-700" />
              </div>
              <div className="max-w-[300px]">
                <h3 className="mb-2 text-xl font-semibold text-black">Our Location</h3>
                <p className="mb-2 leading-relaxed text-gray-700">{data.location.name}</p>
                <Link
                  href={data.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-gray-800 hover:text-black"
                >
                  View on Google Maps <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="mr-4 rounded-full bg-gray-100 p-3">
                <Phone className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-black">Phone Number</h3>
                <Link
                  href={`tel:${data.phone}`}
                  className="text-lg font-medium text-gray-700 transition-colors hover:text-black"
                >
                  {data.phone}
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="mr-4 rounded-full bg-gray-100 p-3">
                <Mail className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-black">Email Address</h3>
                <Link
                  href={`mailto:${data.mail}`}
                  className="text-lg font-medium text-gray-700 transition-colors hover:text-black"
                >
                  {data.mail}
                </Link>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="mb-6 flex items-start">
              <div className="mr-4 rounded-full bg-gray-100 p-3">
                <Clock className="h-6 w-6 text-amber-700" />
              </div>
              <div className="flex-1">
                <h3 className="mb-4 text-xl font-semibold text-black">Opening Hours</h3>
              </div>
            </div>

            <div className="ml-16 space-y-4 text-gray-700">
              {data.openingHours.map((ele) => (
                <div key={ele.day} className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium">{ele.day}</span>
                  <span>{ele.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <Separator className="mt-28" />
        <div className="pt-12">
          <h3 className="mb-6 text-center text-2xl font-semibold text-black">Follow Us</h3>
          <div className="flex justify-center space-x-12">
            {data.socialMedia.map((ele) => (
              <Link
                key={ele.platform}
                href={ele.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                {ele.icon ? (
                  <Image
                    src={ele.icon}
                    alt={ele.platform}
                    width={38}
                    height={38}
                    priority={false}
                  />
                ) : null}
                <span className="mt-2 text-sm font-medium text-gray-700 capitalize group-hover:text-black">
                  {ele.platform}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
