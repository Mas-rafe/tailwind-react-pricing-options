import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
    {
        id: 1,
        name: "Home",
        path: "/home",
    },
    {
        id: 2,
        name: "About",
        path: "/about",
    },
    {
        id: 3,
        name: "Services",
        path: "/services",
    },
    {
        id: 4,
        name: "Projects",
        path: "/projects",
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact",
    },
];


const NavBar = () => {
    const [open, setOpen] = useState(false)
    const links = navigationData.map(route => <Link key={route.id} route={route} ></Link>)
    return (
        <nav className='flex justify-between mx-10 mt-2  p-2'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {open ?
                    <X className='md:hidden' ></X> :
                    <Menu className='md:hidden'></Menu>}

                <ul className={`md:hidden absolute bg-amber-200 p-2
                     ${open ? 'top-10' : '-top-40'} duration-1000`}>
                    {links}
                </ul>
                <h3 className='ml-4'>My Navbar</h3>

            </span>
            <ul className='md:flex hidden '>
                {
                    links
                }

            </ul>
            {/* <ul className='flex'>
                {
                    navigationData.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                    </li> )
                }
             </ul> */}
            <button>Sign in</button>
        </nav>
    );
};

export default NavBar;