import React from 'react'
import s from './layout.module.scss'
import { NextPage } from 'next';
import Head from 'next/head';
import  Image  from 'next/image';
import { ILayout } from './../../types/layout';

export const Layout:NextPage<ILayout>=({children,title,footer=true})=> {
  return (
    <div className={s.container}>
    <Head>
      <title>{ title }</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={s.main}>
     {children}
    </main>
   {footer &&  <footer className={s.footer}>
             <h1>Welcome to Solijonov blog</h1>
    </footer>}
  </div>
  )
}
