import { z } from 'zod';
z.config(z.locales.it());

const Product = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number().positive(),
  available: z.boolean(),
  category: z.array(z.string())
})

type Product = z.infer<typeof Product>;

const product1 = {
  id: 1,
  name: 'Mela',
  price: 2,
  available: true,
  category: ['fruit', 'red']
}

const product2 = {
  id: 1,
  name: 'banana',
  price: 2,
  available: false,
  category: ['fruit', 'yellow']
}

const product3 = {
  id: 1,
  name: 'fragola',
  price: 2,
  available: 'maybe',
  category: 'red'
}

const data = Product.parse(product1);
console.log(data);

const data2 = Product.parse(product2);
console.log(data2);

// try {
//   const data3 = Product.parse(product3);
//   console.log(data3);
// } catch (error) {
//   if (error instanceof z.ZodError) {
//     error.issues.forEach(e => {
//       console.error(e)
//     })
//   }
// }

const data3 = Product.safeParse(product3);
console.log(data3)