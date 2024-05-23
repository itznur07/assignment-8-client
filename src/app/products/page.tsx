import CategoriesBrand from "@/components/Products/CategoriesBrand";
import PriceRange from "@/components/Products/PriceRange";

const Products = () => {
  return (
    <div className='container flex gap-4 mt-12'>
      {/* sidebar */}
      <div className='w-[300px]'>
        {/* Price Ranger */}
        <div className='border p-5'>
          <h1 className='text-xl font-semibold mb-3'>Price Range</h1>
          <PriceRange min={20} max={50} />
          <PriceRange min={20} max={50} />
          <PriceRange min={20} max={50} />
          <PriceRange min={20} max={50} />
        </div>
        {/* Cateogries/Brand */}
        <div className='border mt-3 p-5'>
          <h1 className='text-xl font-semibold mb-3'>Categories / Brands</h1>
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
      </div>
      {/* product  */}
      <div className='border w-[900px]'></div>
    </div>
  );
};

export default Products;
