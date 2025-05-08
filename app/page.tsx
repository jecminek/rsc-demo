import Link from 'next/link';

// "Disables caching"
export const revalidate = 0;

export default function Home() {
  return (
      <div className="container mx-auto p-4 text-center min-h-screen flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">Next.js 15 RSC Demo</h1>
        <p className="mb-8 text-lg">
          Next.js 15 RSC Demo
        </p>
        <Link
            href="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded inline-block mx-auto hover:bg-blue-700"
        >
          Show products
        </Link>
      </div>
  );
}