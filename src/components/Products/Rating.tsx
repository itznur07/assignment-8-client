import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const Rating: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className='mt-3 mb-5'>
      {/* list */}
      <div className='flex items-center space-x-2'>
        <Checkbox id='terms' />
        <label
          htmlFor='terms'
          className='text-lg  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          {count} Star
        </label>
      </div>
    </div>
  );
};

export default Rating;
