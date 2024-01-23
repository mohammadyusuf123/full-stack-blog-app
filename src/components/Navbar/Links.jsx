"use client"

import React, { useEffect, useState } from 'react';
import NavLink from './Link/NavLink';
import style from './Links.module.css'
import Image from 'next/image';
import { handleLogout } from '@/lib/actions';

const Links = ({session}) => {
    const [open,setOpen]=useState(true)
    useEffect(()=>{
        setOpen(false)
    },[])

    const links=[
        {
        title:'HomePage',
        path:'/'
    },
        {
        title:'About',
        path:'/about'
    },
        {
        title:'Contact',
        path:'/contact'
    },
        {
        title:'Blog',
        path:'/blog'
    },
        
]
// const season=true;
// const isAdmin=true;
    return (
        <div className={style.container} suppressHydrationWarning>
         <div className={style.links}>
         {
                links.map((link)=>(<NavLink key={link.title} item={link}/>))
            }
              
              {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={style.btn}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
         </div>
               
               <Image
        className={style.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={style.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
            
        </div>
    );
};

export default Links;