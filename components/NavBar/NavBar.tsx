'use client';

import Link from 'next/link';
import cl from './NavBar.module.scss';
import LogoIcon from '../../icons/NavBar/logo__icon.svg';
import userPhoto from '../../icons/NavBar/photo.jpg';
import Image from 'next/image';
import NavMenu from '../NavMenu/NavMenu';
import { useState } from 'react';

const NavBar: React.FC = () => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const handleOpenBurger = () => {
    setIsOpenBurger(!isOpenBurger);
  };

  const bodyEl = document.body;
  if (isOpenBurger) {
    bodyEl.classList.add('lock');
  } else {
    bodyEl.classList.remove('lock');
  }

  return (
    <div className={cl.wrapper}>
      <Link href={'/'} className={cl.logo}>
        <Image src={LogoIcon} alt='LogoIcon' />
        <h1>Dashboard</h1>
      </Link>
      <NavMenu isOpenBurger={isOpenBurger} setIsOpenBurger={setIsOpenBurger} />

      <div className={cl.user}>
        <div>
          <Image src={userPhoto} alt='user photo' />
        </div>
        <div className={cl.info}>
          <p>Evano</p>
          <p>Project Manager</p>
        </div>
        <div onClick={handleOpenBurger} className={cl.burger}></div>
      </div>
    </div>
  );
};

export default NavBar;
