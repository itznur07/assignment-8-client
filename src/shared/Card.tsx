import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const CardComp: React.FC<{ item: any; flashsale: boolean }> = ({
  item,
  flashsale,
}) => {
  return (
    <Card className={`max-w-[400px] h-[${flashsale ? "300px" : "450px"}]`}>
      <div className='relative'>
        <Image
          alt='Banner Image'
          className='object-fill'
          width={500}
          height={600}
          src={item.image_url}
        />
        <div className='absolute top-4 left-4'>
          <Badge
            className='rounded-full px-3 py-1 text-sm font-medium'
            variant='default'
          >
            {item.discount_percentage}% OFF
          </Badge>
        </div>
      </div>
      <div className='p-6'>
        <h3 className='mb-2 text-xl font-bold'>Acme Prism T-Shirt</h3>
        <div className='mb-4 flex items-center gap-2'>
          <span className='text-2xl font-bold line-through text-gray-500'>
            $49.99
          </span>
          <span className='text-2xl font-bold text-primary'>$44.99</span>
        </div>
        <Button className='w-full' size='lg' variant='default'>
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default CardComp;
