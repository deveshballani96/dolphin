import { Barlow_Semi_Condensed, Lusitana } from 'next/font/google';

export const barlowSemiCondensed = Barlow_Semi_Condensed({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});
