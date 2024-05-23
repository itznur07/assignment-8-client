"use client";
import CardComp from "@/shared/Card";
import { useState } from "react";

const ProductsCards = () => {
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
  ]);
  return (
    <div className='flex  items-center flex-wrap mt-4'>
      {bannerData?.map((item) => (
        <div key={item.id} className=' md:basis-1/2 lg:basis-1/3 px-2 py-2'>
          <CardComp flashsale={true} item={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductsCards;
