import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Changa_One, Changa_One } from 'next/font/google'

const Changa_One = Changa_One({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={Changa_One.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#00aba9"/>
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Component {...pageProps} />
      </>
    )
}
