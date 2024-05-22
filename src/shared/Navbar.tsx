import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className='flex h-16  items-center justify-between  container'>
      <Link className='flex items-center gap-2' href='#'>
        <span className='flex items-center text-lg font-semibold'>
          <Image src={logo} alt='Clean Supplies Logo' width={80} height={80} />
          Clean Supplies
        </span>
      </Link>
      <nav className='hidden space-x-10 md:flex'>
        <Link
          className='text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50'
          href='#'
        >
          Home
        </Link>
        <Link
          className='text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50'
          href='#'
        >
          Features
        </Link>
        <Link
          className='text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50'
          href='#'
        >
          Pricing
        </Link>
        <Link
          className='text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50'
          href='#'
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
