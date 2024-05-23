import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className='flex h-16  items-center justify-between  container'>
      <Link className='flex items-center gap-2' href='/'>
        <span className='flex  text-lg font-semibold'>
          <Image src={logo} alt='Clean Supplies Logo' width={50} height={50} />
          <span className='font-md mt-1 uppercase font-bold'>CleanBuzz</span>
        </span>
      </Link>
      <nav className='hidden space-x-10 md:flex'>
        <Link
          className='text-md font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50'
          href='/'
        >
          Home
        </Link>
        <Link
          className='text-md font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50'
          href='#'
        >
          Categories
        </Link>
        <Link
          className='text-md font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50'
          href='/products'
        >
          Products
        </Link>
        <Link
          className='text-md font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50'
          href='/flashsales'
        >
          Flash Sale
        </Link>
      </nav>
    </header>
  );
}
