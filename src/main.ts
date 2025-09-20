import { date, z } from 'zod';
z.config(z.locales.it());

// const Product = z.object({
//   id: z.number().int(),
//   name: z.string(),
//   price: z.number().positive(),
//   available: z.boolean(),
//   category: z.array(z.string())
// })

// type Product = z.infer<typeof Product>;

// const product1 = {
//   id: 1,
//   name: 'Mela',
//   price: 2,
//   available: true,
//   category: ['fruit', 'red']
// }

// const product2 = {
//   id: 1,
//   name: 'banana',
//   price: 2,
//   available: false,
//   category: ['fruit', 'yellow']
// }

// const product3 = {
//   id: 1,
//   name: 'fragola',
//   price: 2,
//   available: 'maybe',
//   category: 'red'
// }

// const data = Product.parse(product1);
// console.log(data);

// const data2 = Product.parse(product2);
// console.log(data2);

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

// const data3 = Product.safeParse(product3);
// console.log(data3)

const ProdottoAvanzatoSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(3).max(100), // lunghezza tra 3 e 100 caratteri
  price: z.number().positive().multipleOf(0.01), // precisione centesimi (no millesimi)
  available: z.boolean(),
  category: z.array(z.string()).min(1).max(5), // almeno 1, massimo 5 categorie
  bio: z.string().optional(), // campo opzionale
  discount: z.number().min(0).max(100).nullable(), // percentuale sconto, può essere null
  createdAt: z.iso.datetime() // ISO datetime
});

type ProductType = z.infer<typeof ProdottoAvanzatoSchema>;

const p1 = {
  id: 1,
  name: 'Pane',
  price: 1.50,
  available: true,
  category: ['Cibo', 'pane'],
  discount: null,
  createdAt: new Date().toISOString()
}

const data = ProdottoAvanzatoSchema.parse(p1);
console.log(data)

const p2 = {
  id: undefined,
  name: null,
  price: true,
  available: true,
  category: 'cibo',
  discount: 120,
  createdAt: Date()
}

const data2 = ProdottoAvanzatoSchema.parse(p2);
console.log(data2)