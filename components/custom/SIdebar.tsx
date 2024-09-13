'use client'
import { usePathname } from 'next/navigation'
import {   Home3 } from 'iconsax-react';
import { BiSkipPreviousCircle } from "react-icons/bi";
import { MdOutlineUpcoming } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import Link from 'next/link';

export const sidebarLinks = [
  {
    imgURL: <Home3 color="#d9e3f0"/>,
    route: '/',
    label: 'Home',
  },

  {
    imgURL: <MdOutlineUpcoming size={24}/> ,
    route: '/upcoming',
    label: 'Upcoming',
  },
  {
    imgURL:  <BiSkipPreviousCircle size={24}/>,
    route: '/previous',
    label: 'Previous',
  },
  {
    imgURL: <IoVideocamOutline size={24} />,
    route: '/recordings',
    label: 'Recordings',
  },
  {
    imgURL:  <IoAdd size={28} />,
    route: '/personal-room',
    label: 'Personal Room',
  },
];

export const avatarImages = [
  '/images/avatar-1.jpeg',
  '/images/avatar-2.jpeg',
  '/images/avatar-3.png',
  '/images/avatar-4.png',
  '/images/avatar-5.png',
];

function Sidebar() {

  const path = usePathname() 
   
  return (
    <div className=' sticky left-0 top-0 flex h-screen w-fi w-[214px] flex-col justify-between bg-zinc-900 max-md:hidden '>
      <div className=' mt-[68px] px-2'>
         {
          sidebarLinks.map((link, index) => (
            <Link href={link.route} key={index} className={`flex items-center px-2 py-3 mt-3 hover:bg-zinc-600 transition-all rounded-xl gap-4 cursor-pointer ${path === link.route ? 'bg-indigo-600 ext-indigo-600 ' : ''}`}>
              {link.imgURL}
              <span>{link.label}</span>
            </Link>
          ))
         }
      </div>
    </div>
  )
}

export default Sidebar