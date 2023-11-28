interface ButtonProps {
  label: string;
  onclick: () => void;
  secondary?: boolean;
  tertiary?: boolean;
}

export default function Button(props: ButtonProps) {
  const baseClass = 'text-white rounded-[1.75rem] px-8 py-[0.88rem] transition-all flex items-center font-bold text-[1.125rem] leading-[1.75rem]';
  const primaryClass = 'bg-dark-purple hover:bg-light-purple';
  const secondaryClass = 'bg-gradient-to-b from-gradient-1-1 to-gradient-1-2 hover:from-gradient-1-1/50 hover:to-gradient-1-2/50';
  const tertiaryClass = 'bg-gradient-to-b from-gradient-2-1 to-gradient-2-2  from-[-54.32%] to-100%  hover:from-gradient-2-1/50 hover:to-gradient-2-2/50';
  return(
    <button onClick={props.onclick} className={`${baseClass} ${props.secondary ? secondaryClass : (props.tertiary) ? tertiaryClass : primaryClass}`}>
      {props.label}
    </button>
  )
}