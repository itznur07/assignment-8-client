import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductDetails() {
  return (
    <div className='grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-8 md:py-12'>
      <div className='grid gap-4 md:gap-8'>
        <div className='grid md:grid-cols-5 gap-4'>
          <div className='hidden md:flex flex-col gap-4'>
            <button className='border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50'>
              <img
                alt='Product Image Thumbnail'
                className='aspect-square object-cover'
                height='100'
                src='/placeholder.svg'
                width='100'
              />
            </button>
            <button className='border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50'>
              <img
                alt='Product Image Thumbnail'
                className='aspect-square object-cover'
                height='100'
                src='/placeholder.svg'
                width='100'
              />
            </button>
            <button className='border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50'>
              <img
                alt='Product Image Thumbnail'
                className='aspect-square object-cover'
                height='100'
                src='/placeholder.svg'
                width='100'
              />
            </button>
            <button className='border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50'>
              <img
                alt='Product Image Thumbnail'
                className='aspect-square object-cover'
                height='100'
                src='/placeholder.svg'
                width='100'
              />
            </button>
          </div>
          <div className='md:col-span-4'>
            <img
              alt='Product Image'
              className='aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800'
              height='600'
              src='/placeholder.svg'
              width='600'
            />
          </div>
        </div>
      </div>
      <div className='grid gap-4 md:gap-8'>
        <div>
          <h1 className='text-3xl md:text-4xl font-bold'>Acme Prism T-Shirt</h1>
          <p className='text-gray-500 dark:text-gray-400 mt-2'>
            60% combed ringspun cotton/40% polyester jersey tee.
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <StarIcon className='w-5 h-5 fill-primary' />
            <StarIcon className='w-5 h-5 fill-primary' />
            <StarIcon className='w-5 h-5 fill-primary' />
            <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
            <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
          </div>
          <div className='text-4xl font-bold'>$99</div>
        </div>
        <form className='grid gap-4'>
          <div className='grid gap-2'>
            <Label className='text-base' htmlFor='color'>
              Size
            </Label>
            <RadioGroup
              className='flex items-center gap-2'
              defaultValue='black'
              id='color'
            >
              <Label
                className='border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                htmlFor='color-black'
              >
                <RadioGroupItem id='color-black' value='black' />
                small
              </Label>
              <Label
                className='border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                htmlFor='color-white'
              >
                <RadioGroupItem id='color-white' value='white' />
                medium
              </Label>
              <Label
                className='border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800'
                htmlFor='color-blue'
              >
                <RadioGroupItem id='color-blue' value='blue' />
                large
              </Label>
            </RadioGroup>
          </div>

          <div className='grid gap-2'>
            <Label className='text-base' htmlFor='quantity'>
              Quantity
            </Label>
            <Select defaultValue='1'>
              <SelectTrigger className='w-24'>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='1'>1</SelectItem>
                <SelectItem value='2'>2</SelectItem>
                <SelectItem value='3'>3</SelectItem>
                <SelectItem value='4'>4</SelectItem>
                <SelectItem value='5'>5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button size='lg'>Add to cart</Button>
        </form>
      </div>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
    </svg>
  );
}
