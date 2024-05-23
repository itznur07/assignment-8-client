import company1 from "@/assets/icons/Healthline-img 1.svg";
import company2 from "@/assets/icons/MSN-logo 1.svg";
import company4 from "@/assets/icons/shefinds-logo 1.svg";
import company3 from "@/assets/icons/yahoo-news-img 1.svg";
import Image from "next/image";

const Companies = () => {
  return (
    <section className='py-18 md:py-10 lg:py-14'>
      <div className='container px-4 md:px-6'>
        <div className='space-y-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Our Trusted Partners
          </h2>
          <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
            We are proud to work with these amazing companies.
          </p>
        </div>
        <div className='mt-12 grid grid-cols-2 items-center justify-center gap-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-12'>
          <div className='group relative flex w-full items-center justify-center'>
            <Image
              src={company1}
              alt='Logo'
              className='overflow-hidden rounded-lg object-contain object-center grayscale transition-colors duration-300 group-hover:grayscale-0'
              height={140}
              width={140}
            />
          </div>
          <div className='group relative flex w-full items-center justify-center'>
            <Image
              src={company2}
              alt='Logo'
              className=' overflow-hidden rounded-lg object-contain object-center grayscale transition-colors duration-300 group-hover:grayscale-0'
              height={140}
              width={140}
            />
          </div>
          <div className='group relative flex w-full items-center justify-center'>
            <Image
              src={company3}
              alt='Logo'
              className=' overflow-hidden rounded-lg object-contain object-center grayscale transition-colors duration-300 group-hover:grayscale-0'
              height={140}
              width={140}
            />
          </div>
          <div className='group relative flex w-full items-center justify-center'>
            <Image
              src={company4}
              alt='Logo'
              className=' overflow-hidden rounded-lg object-contain object-center grayscale transition-colors duration-300 group-hover:grayscale-0'
              height={140}
              width={140}
            />
          </div>
          <div className='group relative flex w-full items-center justify-center'>
            <Image
              src={company1}
              alt='Logo'
              className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center grayscale transition-colors duration-300 group-hover:grayscale-0'
              height={140}
              width={140}
            />
          </div>
          <div className='group relative flex w-full items-center justify-center'>
            <Image
              src={company2}
              alt='Logo'
              className=' overflow-hidden rounded-lg object-contain object-center grayscale transition-colors duration-300 group-hover:grayscale-0'
              height={140}
              width={140}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
