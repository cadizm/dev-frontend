import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>cadizm | dev</title>
      </Head>

      <ul className="tracking-widest">
        {/* /scramble route is not used by this next app,
            but proxied by nginx to a containerized app */}
        <li><a href="/scramble">Scramble</a></li>
        <li><a href="/words">Words</a></li>
        <li><a href="/wordle">Wordle</a></li>
      </ul>
    </div>
  )
}

export default Home
