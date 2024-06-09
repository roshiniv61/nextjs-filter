import Image from 'next/image'
import Filter from '../components/Filter'
import data from '../data/items.js'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Filter data={data} />
    </>
  )
}
