"use client";
import CardComp from "@/shared/Card";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const MostPopular = () => {
  const [bannerData] = useState([
    {
      id: 1,
      title: "Eco-Friendly All-Purpose Cleaner",
      price: 12.99,
      discount_price: 9.99,
      discount_percentage: 23,
      image_url:
        "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Industrial Strength Disinfectant",
      price: 24.99,
      discount_price: 19.99,
      discount_percentage: 20,
      image_url:
        "https://media.istockphoto.com/id/1454041049/photo/brushes-bottles-with-cleaning-liquids-sponges-rag-and-yellow-rubber-gloves-on-white.webp?b=1&s=170667a&w=0&k=20&c=p977j6vshjYvmVWT2xmVrgNFeWhuXvzT7FKm9rz8srY=",
    },
    {
      id: 3,
      title: "Premium Microfiber Cleaning Cloths (Pack of 12)",
      price: 15.99,
      discount_price: 12.99,
      discount_percentage: 19,
      image_url:
        "https://media.istockphoto.com/id/165835394/photo/cleaning-supplies.webp?b=1&s=170667a&w=0&k=20&c=ONkQQpLxlcjQ1-PieWIAJ7fKhZKKIUhU_7-dpYRptq8=",
    },
    {
      id: 4,
      title: "Heavy-Duty Floor Cleaner",
      price: 29.99,
      discount_price: 24.99,
      discount_percentage: 17,
      image_url:
        "https://media.istockphoto.com/id/1432336822/photo/colorful-cleaning-products-and-tools-on-kitchen-counter.webp?b=1&s=170667a&w=0&k=20&c=mgCA8Vt0o-9aHT7EgDLE5SLJND9tElX6_nbycfiHQ5M=",
    },
    {
      id: 5,
      title: "Natural Glass Cleaner",
      price: 10.99,
      discount_price: 8.99,
      discount_percentage: 18,
      image_url:
        "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Eco-Friendly All-Purpose Cleaner",
      price: 12.99,
      discount_price: 9.99,
      discount_percentage: 23,
      image_url:
        "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      title: "Industrial Strength Disinfectant",
      price: 24.99,
      discount_price: 19.99,
      discount_percentage: 20,
      image_url:
        "https://media.istockphoto.com/id/1454041049/photo/brushes-bottles-with-cleaning-liquids-sponges-rag-and-yellow-rubber-gloves-on-white.webp?b=1&s=170667a&w=0&k=20&c=p977j6vshjYvmVWT2xmVrgNFeWhuXvzT7FKm9rz8srY=",
    },
    {
      id: 8,
      title: "Premium Microfiber Cleaning Cloths (Pack of 12)",
      price: 15.99,
      discount_price: 12.99,
      discount_percentage: 19,
      image_url:
        "https://media.istockphoto.com/id/165835394/photo/cleaning-supplies.webp?b=1&s=170667a&w=0&k=20&c=ONkQQpLxlcjQ1-PieWIAJ7fKhZKKIUhU_7-dpYRptq8=",
    },
  ]);

  return (
    <div className='container'>
      {/* section heading */}
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Most Popular Products</h1>
        <Button className='rounded-full'>
          View All
          <span>
            <ArrowRight />
          </span>
        </Button>
      </div>
      {/* Card Carusel slider*/}
      <div className='flex  items-center flex-wrap mt-10'>
        {bannerData?.map((item) => (
          <div key={item.id} className=' md:basis-1/2 lg:basis-1/4 mt-5 px-1'>
            <CardComp flashsale={true} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
