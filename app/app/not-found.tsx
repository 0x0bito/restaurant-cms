import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="text-[20rem] font-bold">404</h1>
      <Link href="/" className="text-blue-600">
        Go Back <span className="underline">HOME</span>
      </Link>
    </div>
  );
}
