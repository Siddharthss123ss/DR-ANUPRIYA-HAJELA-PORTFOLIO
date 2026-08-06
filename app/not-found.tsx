import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-7xl font-black text-cyan-600">404</h1>

        <h2 className="mt-4 text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600">
          The page you are looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block bg-cyan-600 text-white px-8 py-4 rounded-xl"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}