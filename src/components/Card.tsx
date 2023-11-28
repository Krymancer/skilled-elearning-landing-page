import IconAnimation from '@/assets/icon-animation.svg';
import IconBusiness from '@/assets/icon-business.svg';
import IconCrypto from '@/assets/icon-crypto.svg';
import IconDesign from '@/assets/icon-design.svg';
import IconPhotography from '@/assets/icon-photography.svg';

import Image from 'next/image';

interface CardProps {
  title: string;
  content?: string;
  icon?: 'animation' | 'business' | 'crypto' | 'design' | 'photography';
  featured?: boolean;
}

export default function Card(props: CardProps) {
  const baseClass = "flex rounded-[0.9375rem] w-[21.875rem] h-[20.125rem] px-8 py-16 bg-white shadow-card";
  const featuredClass ="bg-gradient-to-b from-gradient-1-1 to-gradient-1-2";
  const iconClass ="flex flex-col relative";

  const icons = {
    animation: IconAnimation,
    business: IconBusiness,
    crypto: IconCrypto,
    design: IconDesign,
    photography: IconPhotography,
  };

  return (
    <div className={`${baseClass} ${props.featured ? featuredClass : iconClass}`}>
      {
        props.featured ? (<h1 className='font-extrabold text-[2rem] leading-[2.5rem] text-white'>{props.title}</h1>) : (
        <>
        <Image className='absolute top-[-1rem] left-[2rem]' width={56} height={56} src={icons[props.icon ?? 'animation']} alt={props.icon ?? ''} />
        <div className='flex flex-col items-start gap-6 relative'>
          <h1 className='text-dark-purple text-[1.5rem] font-extrabold'>{props.title}</h1>
          <p className='text-gray text-[1.125rem] leading-[1.75rem] font-medium'>{props.content}</p>
          <button className='text-dark-pink font-bold text-[1.125rem] leading-[1.75rem]'>Get Started</button>
        </div>
        </>
      )}
    </div>
  )
} 