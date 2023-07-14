import MenuItem from '@/components/MenuItem';
import prisma from '@/lib/prisma';
import dayjs from 'dayjs';
import Link from 'next/link';

export default async function MenuList() {
  const menuItems = await prisma.product.findMany();

  return (
    <div className='w-full overflow-hidden'>
      <h1 className='font-bold text-3xl text-right'>{dayjs().format('(ddd) MMM DD, YYYY')}</h1>
      <div className='flex flex-row flex-wrap gap-6 mt-4'>
        {menuItems?.map((item) => 
          <MenuItem key={item.id} />
        )}
        <MenuItem />
        <MenuItem />
      </div>
      {!menuItems?.length && (
        <div className="flex items-center justify-center">
          <h1>No Menu Items Yet! <Link href="/menu-management"
            className='underline'>Add them here!</Link></h1>
        </div>
      )}
    </div>
  )
}
