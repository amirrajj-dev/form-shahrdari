import localFont from 'next/font/local'

export const nazanin = localFont({
  src: [
    { path: '../../public/fonts/Nazanin.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Nazaninb.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-nazanin',
  display: 'swap',
})

export const bnazanin = localFont({
  src: '../../public/fonts/BNazannO.ttf',
  variable: '--font-bnazanin',
  display: 'swap',
})
