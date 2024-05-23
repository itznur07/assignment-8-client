import CategoriesBrand from "@/components/Products/CategoriesBrand";
import PriceRange from "@/components/Products/PriceRange";
import ProductsCards from "@/components/Products/ProductsCards";
import Rating from "@/components/Products/Rating";

const Products = () => {
  return (
    <div className='container flex gap-4 my-12'>
      {/* Sidebar */}
      <div className='w-[300px]'>
        {/* Price Ranger */}
        <div className='border p-5'>
          <h1 className='text-xl font-medium mb-3'>Price Range</h1>
          <PriceRange min={20} max={50} />
          <PriceRange min={20} max={50} />
          <PriceRange min={20} max={50} />
          <PriceRange min={20} max={50} />
        </div>
        {/* Cateogries/Brand */}
        <div className='border mt-3 p-5'>
          <h1 className='text-xl font-medium mb-3'>Categories / Brands</h1>
          <CategoriesBrand text='AFL' option={[{ id: 1, text: "Harpic" }]} />
          <CategoriesBrand
            text='Bosundara'
            option={[{ id: 1, text: "Harpic" }]}
          />
          <CategoriesBrand
            text='Bengal Group'
            option={[{ id: 1, text: "Harpic" }]}
          />
        </div>
        {/* Rating */}
        <div className='border mt-3 p-5'>
          <h1 className='text-xl font-medium mb-3'>Ratings</h1>
          <Rating count={4} />
          <Rating count={3} />
          <Rating count={5} />
        </div>
      </div>
      {/* product  */}
      <div className='w-[980px] px-5'>
        <h1 className='text-3xl font-semibold'>Our Collection Of Products</h1>
        <p className='text-sm mt-2 text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          cumque a voluptate suscipit reiciendis quibusdam ipsa eum dignissimos
          optio consectetur?
        </p>
        {/* Products Card */}
        <ProductsCards />
      </div>
    </div>
  );
};

export default Products;
