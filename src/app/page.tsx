import CaruselBanner from "@/components/Home/CaruselBanner";
import Companies from "@/components/Home/Companies";
import FlashSale from "@/components/Home/FlashSale";
import MostPopular from "@/components/Home/MostPopular";
import TopCategories from "@/components/Home/TopCategories";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className='bg-slate-100'>
        {/* Heading */}
        <section className=' pt-12 md:pt-24 lg:pt-32 xl:pt-24 container'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none'>
                  Partner for Premium Clean Supplies
                </h1>
                <p className='mx-auto max-w-[700px] text-lg text-gray-500 md:text-xl dark:text-gray-400'>
                  Discover a comprehensive range of high-quality cleaning
                  products tailored to meet your unique needs.
                </p>
              </div>
              <Link
                className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                href='#'
              >
                Get now
              </Link>
            </div>
          </div>
        </section>
        {/* Carusel slider */}
        <section className='mb-16 py-10 container'>
          <CaruselBanner />
        </section>
      </div>
      {/* Flash Sale */}
      <section className='mt-24'>
        <FlashSale />
      </section>
      {/* Top Categories */}
      <section className='mt-24'>
        <TopCategories />
      </section>
      {/* Most Popular Products */}
      <section className='mt-24'>
        <MostPopular />
      </section>
      {/* Companies Section */}
      <section className='mt-24'>
        <Companies />
      </section>
    </div>
  );
}
