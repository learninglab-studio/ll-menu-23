import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import SlackImage from '@/components/tests/SlackImage'

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
      <main className={styles.main}>
        <div className={inter.className}>
          <h1>the menu</h1>
          <h2>test</h2>
          {/* <SlackImage slackUrl="https://files.slack.com/files-pri/T0HTW3H0V-F04PR57H5PA/img_1587.jpg?pub_secret=18fddf4f4c" /> */}
          <p>image there or no?</p>
        </div>
      </main>
    </>
  )
}
