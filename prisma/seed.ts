import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // 1. Spice Powders & Masalas
  const catSpices = await prisma.category.upsert({
    where: { slug: 'spice-powders-masalas' },
    update: {},
    create: {
      name: 'Spice Powders & Masalas',
      slug: 'spice-powders-masalas',
      description: 'കഴുകി ഉണക്കി പൊടിച്ച പൊടികളും മസാലകളും',
      products: {
        create: [
          {
            name: 'Chilli Powder',
            malayalamName: 'മുളകുപൊടി',
            slug: 'chilli-powder',
            description: 'Premium roasted chilli powder.',
            variants: { create: [{ name: '250g', weight: 250, unit: 'g', sku: 'SP-CHL-250', price: 120 }, { name: '500g', weight: 500, unit: 'g', sku: 'SP-CHL-500', price: 220 }] }
          },
          {
            name: 'Coriander Powder',
            malayalamName: 'മല്ലിപ്പൊടി',
            slug: 'coriander-powder',
            description: 'Freshly ground coriander powder.',
            variants: { create: [{ name: '250g', weight: 250, unit: 'g', sku: 'SP-COR-250', price: 90 }, { name: '500g', weight: 500, unit: 'g', sku: 'SP-COR-500', price: 170 }] }
          },
          {
            name: 'Chicken Masala',
            malayalamName: 'ചിക്കൻ മസാല',
            slug: 'chicken-masala',
            description: 'Authentic Kerala chicken curry masala.',
            variants: { create: [{ name: '250g', weight: 250, unit: 'g', sku: 'SP-CHK-250', price: 150 }, { name: '500g', weight: 500, unit: 'g', sku: 'SP-CHK-500', price: 280 }] }
          }
        ]
      }
    }
  })

  // 2. Traditional Pickles
  const catPickles = await prisma.category.upsert({
    where: { slug: 'traditional-pickles' },
    update: {},
    create: {
      name: 'Traditional Pickles',
      slug: 'traditional-pickles',
      description: 'നാടൻ അച്ചാറുകൾ',
      products: {
        create: [
          {
            name: 'Mango Pickle',
            malayalamName: 'മാങ്ങ അച്ചാർ',
            slug: 'mango-pickle',
            description: 'Spicy traditional mango pickle.',
            variants: { create: [{ name: '400g', weight: 400, unit: 'g', sku: 'PK-MNG-400', price: 150 }] }
          },
          {
            name: 'Tuna Fish Pickle',
            malayalamName: 'ചൂര അച്ചാർ',
            slug: 'tuna-fish-pickle',
            description: 'Delicious Kerala style Tuna fish pickle.',
            variants: { create: [{ name: '400g', weight: 400, unit: 'g', sku: 'PK-TUN-400', price: 290 }] }
          },
          {
            name: 'Beef Pickle',
            malayalamName: 'ബീഫ് അച്ചാർ',
            slug: 'beef-pickle',
            description: 'Premium quality beef pickle.',
            variants: { create: [{ name: '400g', weight: 400, unit: 'g', sku: 'PK-BEEF-400', price: 320 }] }
          }
        ]
      }
    }
  })

  console.log('Seeding completed.')
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
