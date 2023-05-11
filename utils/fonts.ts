// eslint-disable-next-line camelcase
import { Noto_Sans_TC } from 'next/font/google'

export const notoSansTC = Noto_Sans_TC({
  subsets: [ 'latin' ],
  variable: '--font-noto-sans',
  display: 'swap',
  weight: [ '300', '400', '500', '700' ],
})
