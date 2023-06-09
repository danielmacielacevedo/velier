import '@/styles/globals.css'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@/styles/splide-custom.css'
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Analytics /> 
      <Footer />
    </>
  )
}
