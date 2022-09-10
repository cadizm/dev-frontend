import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <ul className="tracking-widest">
        <li><a href="https://cadizm.com/scramble/">Scramble</a></li>
        <li><a href="/words">Words</a></li>
        <li><a href="/wordle">Wordle</a></li>
      </ul>
    </div>
  )
}

export default Home
