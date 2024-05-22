const Companies = () => {
  return (
    <section className='py-12 md:py-24 lg:py-32'>
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
            <img
              alt='Logo'
              className='aspect-[2/1] w-full overflow-hidden rounded-lg object-contain object-center grayscale transition-colors duration-300 group-hover:grayscale-0'
              height={70}
              src='/placeholder.svg'
              width={140}
            />
          </div>
          <div className='group relative flex w-full items-center justify-center'>
            <img
              alt='Logo'
              className='aspect-[2/1] w-full overflow-hidden rounded-lg object-contain object-center grayscale transition-colors duration-300 group-hover:grayscale-0'
              height={70}
              src='/placeholder.svg'
              width={140}
            />
          </div>
          <div className='group relative flex w-full items-center justify-center'>
            <img
              alt='Logo'
              className='aspect-[2/1] w-full overflow-hidden rounded-lg object-contain object-center grayscale transition-colors duration-300 group-hover:grayscale-0'
              height={70}
              src='/placeholder.svg'
              width={140}
            />
          </div>
          <div className='group relative flex w-full items-center justify-center'>
            <img
              alt='Logo'
              className='aspect-[2/1] w-full overflow-hidden rounded-lg object-contain object-center grayscale transition-colors duration-300 group-hover:grayscale-0'
              height={70}
              src='/placeholder.svg'
              width={140}
            />
          </div>
          <div className='group relative flex w-full items-center justify-center'>
            <img
              alt='Logo'
              className='aspect-[2/1] w-full overflow-hidden rounded-lg object-contain object-center grayscale transition-colors duration-300 group-hover:grayscale-0'
              height={70}
              src='/placeholder.svg'
              width={140}
            />
          </div>
          <div className='group relative flex w-full items-center justify-center'>
            <img
              alt='Logo'
              className='aspect-[2/1] w-full overflow-hidden rounded-lg object-contain object-center grayscale transition-colors duration-300 group-hover:grayscale-0'
              height={70}
              src='/placeholder.svg'
              width={140}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
