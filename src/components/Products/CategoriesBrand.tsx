import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import React from "react";

const CategoriesBrand: React.FC<{ text: string; option: any }> = ({
  text,
  option,
}) => {
  return (
    <div className='flex items-center gap-2 mt-2  '>
      <p>{text}</p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <ChevronDown color='gray' opacity={70} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Comok</DropdownMenuItem>
          <DropdownMenuItem>Harpic</DropdownMenuItem>
          <DropdownMenuItem>Cleaner</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CategoriesBrand;
