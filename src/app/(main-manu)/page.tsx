import Image from 'next/image'
import AppLogo from '../components/AppLogo'
import {AppHeader, AppHeader2} from '../components/AppHeader'
import AppFeature from '../components/AppFeature'
import styles from './page.module.css'
import Link from 'next/link'
import { Container, Text, Button, Group } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import classes from './components/hero/MyHero.module.css';
import { MyHero } from './components/hero/MyHero'
import { MyFeature } from './components/feature/MyFeature'

export default function Home() {
  // const host = process.env.SQL_SERVER_HOST;
  return (
    <>
      <MyHero/>
      <MyFeature/>
    </>
  )
}