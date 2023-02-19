import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Indie from '@/components/fonts/indie'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>The Menu</title>
        <meta name="description" content="Stuff Happening at the Learning Lab this Week" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} >
        <div className={inter.className}>
          <Indie><h1 style={{fontWeight: "900", fontSize: "10em"}}>the menu</h1></Indie>
          <p style={{fontWeight: "100"}}>ok. what now?</p>
          <Indie>test</Indie>
        </div>
        
      </main>
    </>
  )
}
