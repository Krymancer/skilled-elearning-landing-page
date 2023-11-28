'use client';
import Image from 'next/image'

import Button from '@/components/Button'

import LogoDark from '@/assets/logo-dark.svg';
import LogoLight from '@/assets/logo-light.svg';
import Card from '@/components/Card';

interface Card {
  title: string;
  content?: string;
  icon?: 'animation' | 'business' | 'crypto' | 'design' | 'photography';
  featured?: boolean;
}

const cards: Card[] = [
  {
    title: 'Animation',
    content: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
    icon: 'animation',
  },
  {
    title: 'Design',
    content: 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
    icon: 'design',
  },
  {
    title: 'Photography',
    content: 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
    icon: 'photography',
  },
  {
    title: 'Crypto',
    content: 'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
    icon: 'crypto',
  },
  {
    title: 'Business',
    content: 'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
    icon: 'business',
  }
];

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='flex items-center justify-between px-40 py-10'>
        <div className='relative h-[1.73025rem] w-[6.948rem]'>
          <Image src={LogoDark} fill alt='Logo' />
        </div>
        <Button label="Get Started" onclick={() => { }} />
      </header>
      <main className='flex flex-col flex-grow h-full flex-auto px-40 pb-[8rem]'>
        <div></div>
          <div className='grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-20'>
            <Card title='Check out our most popular courses!' featured />
            {cards.map((card, index) => (
              <Card key={index} title={card.title} content={card.content} icon={card.icon} />
            ))}
          </div>
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
