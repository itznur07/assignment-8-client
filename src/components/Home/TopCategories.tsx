import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const TopCategories = () => {
  return (
    <div>
      <section className='w-full py-10 md:py-14 lg:py-14'>
        <div className='container'>
          <div className='space-y-4 text-center'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Top Categories
            </h2>
            <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
              Explore our wide range of products across various categories.
            </p>
          </div>
          <div className='grid gap-6 md:grid-cols-3 mt-10'>
            <div className='group relative overflow-hidden rounded-lg'>
              <img
                alt='Category Image'
                className='w-full object-cover transition-all duration-300 group-hover:scale-105'
                src='https://images.unsplash.com/photo-1580256081112-e49377338b7f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                width={400}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
              <div className='absolute bottom-0 left-0 right-0 p-4 text-center'>
                <h3 className='text-white text-lg font-semibold'>
                  Home Cleaning
                </h3>
              </div>
            </div>
            <div className='grid gap-6'>
              <div className='group relative overflow-hidden rounded-lg'>
                <img
                  alt='Category Image'
                  className='w-full aspect-[4/3] object-cover transition-all duration-300 group-hover:scale-105'
                  height={300}
                  src='https://images.unsplash.com/photo-1577369117918-7e3785e39cb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsZWFuaW5nJTIwc3VwcGxpZXN8ZW58MHx8MHx8fDA%3D'
                  width={400}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
                <div className='absolute bottom-0 left-0 right-0 p-4 text-center'>
                  <h3 className='text-white text-lg font-semibold'>
                    Cooking Room
                  </h3>
                </div>
              </div>
              <div className='group relative overflow-hidden rounded-lg'>
                <img
                  alt='Category Image'
                  className='w-full aspect-[4/3] object-cover transition-all duration-300 group-hover:scale-105'
                  height={300}
                  src='https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNsZWFuaW5nJTIwc3VwcGxpZXN8ZW58MHx8MHx8fDA%3D'
                  width={400}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
                <div className='absolute bottom-0 left-0 right-0 p-4 text-center'>
                  <h3 className='text-white text-lg font-semibold'>
                    Home & Garden
                  </h3>
                </div>
              </div>
            </div>
            <div className='group relative overflow-hidden rounded-lg'>
              <img
                alt='Category Image'
                className='w-full  object-cover transition-all duration-300 group-hover:scale-105'
                src='https://images.unsplash.com/photo-1556037843-347ddff9f4b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNsZWFuaW5nJTIwc3VwcGxpZXN8ZW58MHx8MHx8fDA%3D'
                width={400}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
              <div className='absolute bottom-0 left-0 right-0 p-4 text-center'>
                <h3 className='text-white text-lg font-semibold'>
                  Kitchen & Dining
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='flex items-center justify-center'>
        <Button className='rounded-full mt-2'>
          View All
          <span className='ml-2'>
            <ArrowRight />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default TopCategories;
