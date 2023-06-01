import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
          <title>LeetClone</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/fav.png' />
          <meta name='description' content='Web application that containts leetcode problems and videos solutions' />
        </Head>
        <Component {...pageProps} />
    </>
  )
  
}
