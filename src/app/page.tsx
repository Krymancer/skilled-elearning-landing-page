'use client';
import Image from 'next/image'

import Button from '@/components/Button'

import LogoDark from '@/assets/logo-dark.svg';
import LogoLight from '@/assets/logo-light.svg';

export default function Home() {
  return (
    <div className=''>
      <header className='flex items-center justify-between px-40 py-10'>
        <div className='relative h-[1.73025rem] w-[6.948rem]'>
          <Image src={LogoDark} fill alt='Logo' />
        </div>
        <Button label="Get Started" onclick={() => { }} />
      </header>
      <main className=''>
      </main>
      <footer className='bg-dark-purple flex items-center justify-between px-40 py-10'>
        <div className='relative h-[1.73025rem] w-[6.948rem]'>
          <Image src={LogoLight} fill alt='Logo' />
        </div>
        <Button label="Get Started" tertiary onclick={() => { }} />
      </footer>
    </div>
  )
}
