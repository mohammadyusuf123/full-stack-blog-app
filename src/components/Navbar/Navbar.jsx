import React from 'react';
import Links from './Links';
import style from './Navbar.module.css'
import { auth } from '@/lib/auth';

const Navbar = async() => {
    const session = await auth();
    return (
        <div className={style.container}>
        <div className={style.logo}>Logo</div>
        <Links session={session}/>
        </div>
    );
};

export default Navbar;