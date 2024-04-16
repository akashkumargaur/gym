import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface HeaderItemProps {
  label: string;
  active?: boolean;
  href: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({
  label,
  active,
  href
}) => {
  return ( 
    <Link
      href={href} 
      className={twMerge(`
        flex 
        flex-row 
        h-auto 
        items-center 
        w-full 
        gap-x-2
        font-bold
        cursor-pointer
        transition
        text-black-100
        px-4
        `,
        active && ""
        )
      }
    >
      <p className="transition ease-in-out delay-150 hover:scale-105 hover:cursor-pointer truncate w-100 ">{label}</p>
    </Link>
   );
}

export default HeaderItem;