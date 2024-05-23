import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found",
  description: "Oops! The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-100 text-center'>
      <h1 className='text-9xl font-extrabold text-black'>404</h1>
      <h2 className='mt-4 text-3xl text-gray-800'>Page Not Found</h2>
      <p className='mt-2 text-lg text-gray-600'>
        Oops! The page you are looking for does not exist.
      </p>

      <Link
        href='/'
        className='mt-6 px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-blue-700 transition flex items-center gap-2'
      >
        Go Back Home <ChevronRight />
      </Link>
    </div>
  );
}
