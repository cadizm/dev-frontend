import React, { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { defaultProps } from '../config';

const Wordle: NextPage = ({ api_url }: any) => {
  let [wordle, setWordle] = useState<string[]>(['', '', '', '', '']);
  let [excluded, setExcluded] = useState<string>('');
  let [misplaced, setMisplaced] = useState<string[]>(['', '', '', '', '']);
  let [candidates, setCandidates] = useState<[string, number][]>([]);

  const handleWordleChange = async (event: React.FormEvent) => {
    let target = event.currentTarget as HTMLFormElement;
    const index = parseInt(target.name.split('-', 2)[1]);
    setWordle(items => {
      return [
        ...items.slice(0, index),
        target.value.toLowerCase(),
        ...items.slice(index + 1),
      ];
    });
    if (!target.value.length)
      return;
    focusInput('wordle', index + 1);
  }

  const handleExcludedChange = async (event: React.FormEvent) => {
    let target = event.currentTarget as HTMLFormElement;
    setExcluded(target.value.toLowerCase());
  }

  const handleMisplacedChange = async (event: React.FormEvent) => {
    let target = event.currentTarget as HTMLFormElement;
    const index = parseInt(target.name.split('-', 2)[1]);
    setMisplaced(items => {
      return [
        ...items.slice(0, index),
        target.value.toLowerCase(),
        ...items.slice(index + 1),
      ];
    });
    if (!target.value.length)
      return;
    focusInput('misplaced', index + 1);
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    let res = await fetch(`${api_url}/wordle/suggest`,
      {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "wordle": wordle,
          "excluded": excluded,
          "misplaced": misplaced,
        })
      });
    setCandidates(res.ok ? await res.json() : []);
  }

  const focusInput = (prefix: string, index: number) => {
    const nextInput = document.querySelector(
      `input[name=${prefix}-${index}]`
    ) as HTMLElement;

    // If found, focus the next field
    if (nextInput !== null) {
      nextInput.focus();
    }
  }

  return (
    <div>
      <Head>
        <title>cadizm | wordle</title>
      </Head>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex py-2">
            <div className="w-28">
              Wordle
            </div>
            <div className="grid grid-cols-5 w-max">
              <div className="pr-1"><input type="text" name="wordle-0" onChange={handleWordleChange} maxLength={1} className="border border-gray-400 rounded-md text-center w-7 h-7" /></div>
              <div className="px-1"><input type="text" name="wordle-1" onChange={handleWordleChange} maxLength={1} className="border border-gray-400 rounded-md text-center w-7 h-7" /></div>
              <div className="px-1"><input type="text" name="wordle-2" onChange={handleWordleChange} maxLength={1} className="border border-gray-400 rounded-md text-center w-7 h-7" /></div>
              <div className="px-1"><input type="text" name="wordle-3" onChange={handleWordleChange} maxLength={1} className="border border-gray-400 rounded-md text-center w-7 h-7" /></div>
              <div className="px-1"><input type="text" name="wordle-4" onChange={handleWordleChange} maxLength={1} className="border border-gray-400 rounded-md text-center w-7 h-7" /></div>
            </div>
          </div>

          <div className="flex py-2">
            <div className="w-28">
              Excluded
            </div>
            <div>
              <input type="text" name="excluded" onChange={handleExcludedChange} maxLength={25} className="border border-gray-400 rounded-md text-left pl-2 h-7 w-max" />
            </div>
          </div>

          <div className="flex py-2">
            <div className="w-28">
              Misplaced
            </div>
            <div className="grid grid-cols-5 w-max">
              <div className="pr-1"><input type="text" name="misplaced-0" onChange={handleMisplacedChange} maxLength={5} className="border border-gray-400 rounded-md text-center w-7 h-7" /></div>
              <div className="px-1"><input type="text" name="misplaced-1" onChange={handleMisplacedChange} maxLength={5} className="border border-gray-400 rounded-md text-center w-7 h-7" /></div>
              <div className="px-1"><input type="text" name="misplaced-2" onChange={handleMisplacedChange} maxLength={5} className="border border-gray-400 rounded-md text-center w-7 h-7" /></div>
              <div className="px-1"><input type="text" name="misplaced-3" onChange={handleMisplacedChange} maxLength={5} className="border border-gray-400 rounded-md text-center w-7 h-7" /></div>
              <div className="px-1"><input type="text" name="misplaced-4" onChange={handleMisplacedChange} maxLength={5} className="border border-gray-400 rounded-md text-center w-7 h-7" /></div>
            </div>
          </div>

          <div className="flex py-2">
            <button type="submit" className="border border-blue-400 rounded-md pl-2 pr-2">Submit</button>
          </div>
        </form>

        <div className="pt-2">
          <ul className="pl-4">
            {
              candidates.map(([word, score]) =>
                <li key={word} className="py-1 list-item list-disc">
                  {word}
                </li>
              )}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Wordle

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: defaultProps(),
  };
}
