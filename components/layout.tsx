import React from "react";
import Head from 'next/head'
import GoogleAnalytics from "./google-analytics";

const Header = () => {
  return (
    <header className="flex h-24 items-center justify-end pr-10">
      <div className="flex w-full pl-10">
        <a href="https://cadizm.com" className="text-3xl tracking-wider">Home</a>
        <span className="text-3xl tracking-wider">&nbsp;&gt;&nbsp;</span>
        <a href="/" className="text-3xl tracking-wider">Dev</a>
      </div>
      <div className="p-2">
        <a href="https://github.com/cadizm">
          <svg xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 16 16"
            fill="rgb(149, 157, 165)"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>
      <div className="p-2">
        <a href="https://www.linkedin.com/in/cadizm">
          <svg xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 19 18"
            fill="rgb(149, 157, 165)"
          >
            <path d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
          </svg>
        </a>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="flex h-10 w-full items-center justify-end border-t pr-8 pt-2">
      <div>
        <a href="https://status.cadizm.com">
          <svg xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            stroke="rgb(149, 157, 165)"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

const Layout = ({ children, title = "cadizm" }: any) => {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen py-2">
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
          <GoogleAnalytics />
        </Head>
        <main className="mb-auto pl-10 text-left">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
