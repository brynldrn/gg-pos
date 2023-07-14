/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const mealCategory = await prisma.productCategory.upsert({
    where: { name: 'Meal' },
    update: {},
    create: {
      name: 'Meal',
    },
  });

  const drinksCategory = await prisma.productCategory.upsert({
    where: { name: 'Drinks' },
    update: {},
    create: {
      name: 'Drinks',
    },
  });
  
  const sidesCategory = await prisma.productCategory.upsert({
    where: { name: 'Sides' },
    update: {},
    create: {
      name: 'Sides',
    },
  });

  const saltedEggChicken = await prisma.product.upsert({
    where: { name: 'Salted Egg Chicken' },
    update: {},
    create: {
      name: 'Salted Egg Chicken',
      description: '',
      price: 275,
      image: '',
      productCategoryId: mealCategory.id
    }
  })

  const orangeJuice = await prisma.product.upsert({
    where: { name: 'Orange Juice' },
    update: {},
    create: {
      name: 'Orange Juice',
      description: '',
      price: 50,
      image: '',
      productCategoryId: drinksCategory.id
    }
  })

  const cornAndCarrots = await prisma.product.upsert({
    where: { name: 'Corn and Carrots' },
    update: {},
    create: {
      name: 'Corn and Carrots',
      description: '',
      price: 50,
      image: '',
      productCategoryId: sidesCategory.id
    }
  })

  console.log({ mealCategory, drinksCategory, sidesCategory })
  console.log({ saltedEggChicken, orangeJuice, cornAndCarrots })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
