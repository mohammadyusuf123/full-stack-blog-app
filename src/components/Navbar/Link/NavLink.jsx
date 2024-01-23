"use client"

import Link from 'next/link';
import React from 'react';
import style from './NavLink.module.css'
import { usePathname } from 'next/navigation';

const NavLink = ({item}) => {
    const pathName=usePathname()
    return (
        <div className={`${style.container} ${pathName ===item.path && style.active}`} suppressHydrationWarning>
           <Link key={item.title} href={item.path}>{item.title}</Link>
        </div>
    );
};

export default NavLink;