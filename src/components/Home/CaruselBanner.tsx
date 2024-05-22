"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardComp from "@/shared/Card";
import { useState } from "react";

const CaruselBanner = () => {
  const [bannerData] = useState([
    {
      id: 1,
      title: "Eco-Friendly All-Purpose Cleaner",
      price: 12.99,
      discount_price: 9.99,
      discount_percentage: 23,
      image_url:
        "https://img.freepik.com/free-vector/pack-cleaning-products_23-2148534087.jpg?t=st=1716369107~exp=1716372707~hmac=73ae4d87e7ebbf61a6b42a2159081e750efb583bcc95cf5c809f5d3ffd8b56d8&w=740",
    },
    {
      id: 2,
      title: "Industrial Strength Disinfectant",
      price: 24.99,
      discount_price: 19.99,
      discount_percentage: 20,
      image_url:
        "https://img.freepik.com/free-vector/pack-cleaning-products_23-2148534087.jpg?t=st=1716369107~exp=1716372707~hmac=73ae4d87e7ebbf61a6b42a2159081e750efb583bcc95cf5c809f5d3ffd8b56d8&w=740",
    },
    {
      id: 3,
      title: "Premium Microfiber Cleaning Cloths (Pack of 12)",
      price: 15.99,
      discount_price: 12.99,
      discount_percentage: 19,
      image_url:
        "https://img.freepik.com/free-vector/pack-cleaning-products_23-2148534087.jpg?t=st=1716369107~exp=1716372707~hmac=73ae4d87e7ebbf61a6b42a2159081e750efb583bcc95cf5c809f5d3ffd8b56d8&w=740",
    },
    {
      id: 4,
      title: "Heavy-Duty Floor Cleaner",
      price: 29.99,
      discount_price: 24.99,
      discount_percentage: 17,
      image_url:
        "https://img.freepik.com/free-vector/pack-cleaning-products_23-2148534087.jpg?t=st=1716369107~exp=1716372707~hmac=73ae4d87e7ebbf61a6b42a2159081e750efb583bcc95cf5c809f5d3ffd8b56d8&w=740",
    },
    {
      id: 5,
      title: "Natural Glass Cleaner",
      price: 10.99,
      discount_price: 8.99,
      discount_percentage: 18,
      image_url:
        "https://img.freepik.com/free-vector/pack-cleaning-products_23-2148534087.jpg?t=st=1716369107~exp=1716372707~hmac=73ae4d87e7ebbf61a6b42a2159081e750efb583bcc95cf5c809f5d3ffd8b56d8&w=740",
    },
  ]);

  return (
    <div>
      {/* Slider */}
      <section className='flex items-center justify-center pt-14'>
        <Carousel
          opts={{
            align: "start",
          }}
          className='w-full'
        >
          <CarouselContent>
            {bannerData?.map((item) => (
              <CarouselItem
                key={item.id}
                className=' md:basis-1/2 lg:basis-1/3'
              >
                <CardComp item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
};

export default CaruselBanner;
