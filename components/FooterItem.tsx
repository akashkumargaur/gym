import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface FooterItemProps {
  label: string;
  active?: boolean;
  href: string;
}

const FooterItem: React.FC<FooterItemProps> = ({
  label,
  active,
  href
}) => {
  return ( 
    <Link
      href={href} 
      className={twMerge(`
        flex 
        flex-col 
        h-auto 
        gap-x-2
        font-bold
        cursor-pointer
        transition
        text-black-100
        px-4
        pt-2
        pb-4
        sm:pb-1
        `,
        active && "text-green-100"
        )
      }
    >
      <p className="transition ease-in-out delay-150 hover:scale-105 hover:cursor-pointer truncate w-100 ">{label}</p>
    </Link>
   );
}

export default FooterItem;