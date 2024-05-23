import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import React from "react";

const CategoriesBrand: React.FC<{ text: string; option: any }> = ({
  text,
  option,
}) => {
  return (
    <div className='flex items-center gap-2 mt-3  '>
      <p>{text}</p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <ChevronDown color='gray' opacity={70} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuItem className='text-lg'>Comok</DropdownMenuItem>
          <DropdownMenuItem className='text-lg'>Harpic</DropdownMenuItem>
          <DropdownMenuItem className='text-lg'>Cleaner</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CategoriesBrand;
