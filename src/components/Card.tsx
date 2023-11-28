import IconAnimation from '@/assets/icon-animation.svg';
import IconBusiness from '@/assets/icon-business.svg';
import IconCrypto from '@/assets/icon-crypto.svg';
import IconDesign from '@/assets/icon-design.svg';
import IconPhotography from '@/assets/icon-photography.svg';

interface CardProps {
  title: string;
  content: string;
  icon: 'animation' | 'business' | 'crypto' | 'design' | 'photography';
  featured?: boolean;
}

export default function Card(props: CardProps) {
  return (
    <div>
      {
        props.featured ? (<h1>{props.title}</h1>) : (
        <div className='flex flex-col items-start gap-6'>
          <h1 className='text-dark-purple text-[1.5rem] font-extrabold'>{props.title}</h1>
          <p className='text-gray text-[1.125rem] leading-[1.75rem] font-medium'>{props.content}</p>
          <button className='text-dark-pink font-bold text-[1.125rem] leading-[1.75rem]'>Get Started</button>
        </div>
      )}
    </div>
  )
}