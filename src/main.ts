import { z } from 'zod';

const Product = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number().positive(),
  available: z.boolean(),
  category: z.array(z.string())
})

type Product = z.infer<typeof Product>;