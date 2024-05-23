import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const PriceRange: React.FC<{ min: number; max: number }> = ({ min, max }) => {
  return (
    <div className='mt-2'>
      {/* list */}
      <div className='flex items-center space-x-2'>
        <Checkbox id='terms' />
        <label
          htmlFor='terms'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          ${min} - ${max}
        </label>
      </div>
    </div>
  );
};

export default PriceRange;
