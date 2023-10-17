import Image from 'next/image'
import AppLogo from '../components/AppLogo'
import {AppHeader, AppHeader2} from '../components/AppHeader'
import AppFeature from '../components/AppFeature'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  const host = process.env.SQL_SERVER_HOST;
  return (
    <main>
      <h1 className="my-text">home page</h1>
      <h2 className={styles.myText}>home page - local scope</h2>
      {host}
      <AppLogo />
      <AppFeature  title='title app feaure' count={1}/>

      <Link href="/about">About</Link>
      <br />
      <Link href="/contact">Contact</Link>
    </main>
  )
}
