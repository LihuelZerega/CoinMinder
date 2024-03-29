import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 relative"
      style={{
        backgroundImage:
          "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGN6NGlzaGJodXgzNWZxN2gyNm1xbmhsYjdkM3FvYzU0YW5sd3MxZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QnU6mOrBbElaIQz4Fe/giphy.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="text-center relative z-10">
        <p className="text-base font-semibold text-[#38bdf8]">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-100">
          The page you are looking for does not exist.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-[#38bdf8] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#008dca] focus-visible:outline focus-visible:ring focus-visible:ring-[#38bdf8] focus-visible:ring-opacity-50"
          >
            Return
          </Link>
        </div>
      </div>
    </main>
  );
}
