import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 relative"
      style={{
        backgroundImage:
          "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnZseWdrMmJ0aXkwNWphZnF4NGd2ZGR0dnJiYnVhZG43d3d1cnJqcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pHQDXnSUlx2Y3h6UX1/giphy.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="text-center relative z-10">
        <p className="text-base font-semibold text-pink-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-100">
          La página que buscas no existe.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className="rounded-md bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:ring focus-visible:ring-pink-600 focus-visible:ring-opacity-50">
              Volver a la página de inicio
          </Link>
        </div>
      </div>
    </main>
  );
}