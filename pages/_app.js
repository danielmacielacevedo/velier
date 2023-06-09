import '@/styles/globals.css'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@/styles/splide-custom.css'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics /> 
    </>
  )
}
