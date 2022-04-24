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
          <link rel="icon" href="/code_snippet.png" />
          <title>Portfolio | Sarita Karale</title>
          <meta name="title" content="Portfolio | Sarita Karale" />
          <meta
            name="description"
            content="A front end web developer experienced in ReactJs and Angular. Computer engineering graduated from SPPU, Pune."
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://jemma-portfolio.vercel.app/"
          />
          <meta property="og:title" content="Portfolio | Sarita Karale" />
          <meta
            property="og:description"
            content="A front end web developer experienced in ReactJs and Angular. Computer engineering graduated from SPPU, Pune."
          />
          <meta property="og:image" content="/preview.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://jemma-portfolio.vercel.app/"
          />
          <meta property="twitter:title" content="Portfolio | Sarita Karale" />
          <meta
            property="twitter:description"
            content="A front end web developer experienced in ReactJs and Angular. Computer engineering graduated from SPPU, Pune."
          />
          <meta property="twitter:image" content="/preview.png" />
        </Head>

        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
