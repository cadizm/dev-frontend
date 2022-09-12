import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>cadizm | dev</title>
      </Head>

      <ul className="tracking-widest">
        <li><a href="https://cadizm.com/scramble/">Scramble</a></li>
        <li><a href="/words">Words</a></li>
        <li><a href="/wordle">Wordle</a></li>
      </ul>
    </div>
  )
}

export default Home
