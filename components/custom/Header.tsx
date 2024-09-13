import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className=' w-full flex items-center justify-between px-10 bg-zinc-950 h-[60px] z-50 fixed '>
      <Link href={'/'} className=' text-indigo-500 text-4xl font-bold'>Zoom</Link>
     
     <div className=' items-center gap-3 flex justify-between'>
     <SignedIn>
          <UserButton  />
        </SignedIn>

        <div className=' hidden max-md:block'>
         <MobileNav />

        </div>
     </div>

    </div>
  )
}

export default Header