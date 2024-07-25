'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cl from './NavMenu.module.scss';


import {
  DashBoardIcon,
  DashBoarActivedIcon,
  CustomersIcon,
  CustomersActiveIcon,
  ProductIcon,
  ProductActiveIcon,
  IncomeIcon,
  IncomeActiveIcon,
  PromoteIcon,
  PromoteActiveIcon,
  HelpIcon,
  HelpActiveIcon,
  SnapeIcon,
  SnapeActiveIcon
} from '../../icons/NavBar/index'; 


const navItems = [
  { href: '/', label: 'Dashboard', icon: DashBoardIcon, activeIcon: DashBoarActivedIcon },
  { href: '/product', label: 'Product', icon: ProductIcon, activeIcon: ProductActiveIcon },
  { href: '/customers', label: 'Customers', icon: CustomersIcon, activeIcon: CustomersActiveIcon },
  { href: '/income', label: 'Income', icon: IncomeIcon, activeIcon: IncomeActiveIcon },
  { href: '/promote', label: 'Promote', icon: PromoteIcon, activeIcon: PromoteActiveIcon },
  { href: '/help', label: 'Help', icon: HelpIcon, activeIcon: HelpActiveIcon }
];

type Props = {
  isOpenBurger: boolean;
  setIsOpenBurger: (_: boolean) => void;
};

const NavMenu: React.FC<Props> = ({ isOpenBurger, setIsOpenBurger }) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const handleLinkClick = () => {
    setIsOpenBurger(false);
  };

  return (
    <nav className={`${cl.navMenu} ${isOpenBurger ? cl.openMenu : ''}`}>
      {navItems.map(({ href, label, icon, activeIcon }) => (
        <Link
          key={href}
          onClick={handleLinkClick}
          href={href}
          className={`${cl.linkWrapper} ${isActive(href) ? cl.active : ''}`}
        >
          <div className={cl.linkTitle}>
            <Image
              src={isActive(href) ? activeIcon : icon}
              alt={label}
            />
            <span>{label}</span>
          </div>
          <Image
            src={isActive(href) ? SnapeActiveIcon : SnapeIcon}
            alt='SnapeIcon'
          />
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
