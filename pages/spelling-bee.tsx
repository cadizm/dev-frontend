import React, { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { defaultProps } from '../config';

const Words: NextPage = ({ api_url }: any) => {
  let [words, setWords] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    let target = event.currentTarget as HTMLFormElement;
    let letters = target.letters.value;
    if (!letters) return;

    let url = `${api_url}/spelling-bee/${letters}`;
    let res = await fetch(url)
    setWords(res.ok ? await res.json() : []);
  }

  return (
    <div>
      <Head>
        <title>cadizm | spelling bee</title>
      </Head>
      <div>
        <form onSubmit={handleSubmit} className="space-x-1">
          <input type="text" name="letters" maxLength={7} className="border border-gray-400 rounded-md  text-left pl-2" />
          <button type="submit" className="border border-blue-400 rounded-md pl-2 pr-2">Submit</button>
        </form>
      </div>
      <div className="pt-2">
        <ul className="pl-4">
          {
            words.map((word) =>
              <li key={word} className="py-1 list-item list-disc">
                {word}
              </li>
            )}
        </ul>
      </div>
    </div>
  )
}

export default Words

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: defaultProps(),
  };
}
