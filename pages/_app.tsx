import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Head from 'next/head'
import Footer from '../components/footer'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Head>
          <title>Sarita Karale</title>
          <link rel="icon" href="/code_snippet.png" />
        </Head>

        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
