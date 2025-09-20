import { z } from 'zod';
z.config(z.locales.it());

const infoEvento = z.object({
  nome: z.string().min(5).max(100),
  bio: z.string().max(500).optional(),
  categoria: z.enum(['conferenza', 'workshop', 'seminario', 'networking'])
});

const infoEventoData = infoEvento.parse({
  nome: `Fiera dell'arancino`,
  categoria: 'networking'
})
console.log(infoEventoData)

const infoEventoData2 = infoEvento.safeParse({
  nome: `Fiera dell'arancino`,
  bio: 32,
  categoria: 'networking'
})
console.log(infoEventoData2)


const dataEvento = z.object({
  inizio: z.iso.datetime(),
  fine: z.iso.datetime(),
  durata: z.number().positive().multipleOf(15)
});

const dataEventoData = dataEvento.safeParse({
  inizio: new Date().toISOString(),
  fine: new Date().toISOString(),
  durata: 45
})
console.log('data valido', dataEventoData)

const dataEventoData2 = dataEvento.safeParse({
  inizio: 'oggi',
  fine: '22-12-2026',
  durata: 1
})
console.log('data non valido', dataEventoData2)

const logisticaEvento = z.object({
  maxPartecipanti: z.number().int().positive(),
  prezzo: z.number().multipleOf(0.01)
})

const logisticaEventoData = logisticaEvento.safeParse({
  maxPartecipanti: 12,
  prezzo: 10.12
})
console.log('Logistica evento valido', logisticaEventoData)

const logisticaEventoData2 = logisticaEvento.safeParse({
  maxPartecipanti: '12',
  prezzo: 10.121
})
console.log('Logistica evento NON valido', logisticaEventoData2)

const infoContatto = z.object({
  emailOrgaizzatore: z.email(),
  sito: z.url(),
  telefono: z.string().startsWith('+39')
})

const infoContattoData = infoContatto.safeParse({
  emailOrgaizzatore: 'francesco@gmail.com',
  sito: 'http://localhost:5173/',
  telefono: '+39 312 236 0987'
})

const infoContattoData2 = infoContatto.safeParse({
  emailOrgaizzatore: 'AAA@cikao.com',
  sito: 'boh',
  telefono: '312 236 0987'
})

console.log('Info contatto valido', infoContattoData)
console.log('Info contatto NON valido', infoContattoData2)