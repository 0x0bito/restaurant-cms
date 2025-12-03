import { getClientReviews } from "@/sanity/sanity.query";
import { clientReviewsType } from "@/types";
import { Suspense } from "react";
import Review from "../Cards/Review";
import ReviewSkeleton from "../skeletons/ReviewSkeleton";

async function ShowReviews() {
  const data: clientReviewsType[] = await getClientReviews();

  return (
    <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2">
      {data.map((ele) => {
        return (
          <Review
            key={ele._id}
            FullName={ele.fullName}
            Content={ele.content}
            NumberStars={ele.rating}
          />
        );
      })}
    </div>
  );
}

function LoadingState() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2">
      <ReviewSkeleton />
      <ReviewSkeleton />
      <ReviewSkeleton />
    </div>
  );
}

export default async function Reviews() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-20 text-center">
      <div className="flex flex-col gap-5">
        <h2 className="text-5xl font-semibold">Avis de nos clients</h2>
        <p className="leading-7 text-gray-500">
          Leurs expériences et leurs retours en quelques mots.
        </p>
      </div>

      <Suspense fallback={<LoadingState />}>
        <ShowReviews />
      </Suspense>
    </div>
  );
}
