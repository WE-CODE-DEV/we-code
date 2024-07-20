"use client";

import './header.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const AppHeader = () => {
    const pathName = usePathname();

    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 0);
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  
    return(
        <div className={isSticky ? 'app-header make-sticky' : 'app-header'}>
            <nav className="flex items-center justify-between min-h-14 py-2 wrapper mx-auto my-0 transition-all border border-dashed border-transparent">
                <Link href="/">
                    <h1 className="text-lg font-extrabold uppercase text-transparent bg-gradient-to-br from-blue-500 to-blue-800 bg-clip-text">&lt;We Code/&gt;</h1>
                </Link>
                <ul className="flex gap-4 uppercase">
                    <li className={pathName === "/" ? 'active' : ''}>
                        <Link href="/">
                            { pathName === "/" ? `< Home />` : 'Home'}
                        </Link>
                    </li>
                    <li  className={pathName === "/components" ? 'active' : ''}>
                        <Link href="/components">
                            { pathName === "/components" ? `< Components />` : 'Components' }
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs">
                            { pathName === "/blogs" ? `< Blog />` : 'Blog' }
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default AppHeader;