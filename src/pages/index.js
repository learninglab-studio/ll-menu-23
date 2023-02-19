import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '400', '900'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>The Medu</title>
        <meta name="description" content="Stuff Happening at the Learning Lab this Week" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>the menu</h1>
      </main>
    </>
  )
}
