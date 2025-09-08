import { Quote, Star, StarHalf } from "lucide-react";
import { Separator } from "../ui/separator";

export default function Review({
  FullName,
  NumberStars,
  Content,
}: {
  FullName: string;
  NumberStars: number;
  Content: string;
}) {
  const fullStars = Math.floor(NumberStars);
  const hasHalfStar = NumberStars % 1 !== 0;

  return (
    <div className="flex w-full flex-col gap-5 text-start">
      <div className="flex items-center justify-between">
        <Quote size={42} className="rotate-180 text-[#135CE7] opacity-50" fill="#135CE7" />
        <div className="flex justify-end gap-1">
          {Array.from({ length: fullStars }).map((_, i) => (
            <Star key={`full-${i}`} className="text-yellow-400" fill="currentColor" />
          ))}
          {hasHalfStar && <StarHalf fill="currentColor" className="text-yellow-400" />}
        </div>
      </div>
      <p className="text-lg leading-7 font-medium">{Content}</p>
      <Separator className="!w-1/2" />
      <span className="text-xl font-semibold">{FullName}</span>
    </div>
  );
}
