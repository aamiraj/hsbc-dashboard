import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1>This will be customer screen page.</h1>
        <Link href={"/dashboard"} className="underline text-bold ">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
