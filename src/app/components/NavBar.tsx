"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle';
import SignIn from './SignIn';
const NavBar = () => {
    const currentPath = usePathname();
    const links = [
        {label: 'Home', href: '/'},
        {label: 'Products', href: '/products'},
        {label: 'Contact Us', href: '/contact'},
        {label: 'Login', href: '/login'},
        {label: 'TicTacToe', href: '/tictactoe'},
    ]
  return (
    <nav className='flex space-x-6 bg-lime-200 dark:bg-slate-900 border-b w-full h-12 items-center justify-between px-3'>
        <section className='flex space-x-12 justify-between'>
            {links.map(link => <Link key={link.href} className={`${link.href === currentPath ? 'text-lime-800 dark:text-slate-200' : 'text-lime-600 dark:text-slate-600'} hover:text-lime-950 hover:dark:text-slate-400 transition-colors text-lg font-bold`} href={link.href}>{link.label}</Link>)}
        </section>
        <SignIn />
        <ModeToggle />
    </nav>
  )
}

export default NavBar