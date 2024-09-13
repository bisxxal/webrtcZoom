'use client'
import {Sheet,SheetClose,SheetContent, SheetTrigger} from "@/components/ui/sheet"
import Link from "next/link";
import { GoSidebarExpand } from "react-icons/go";
import { sidebarLinks } from "./SIdebar";
import { usePathname } from "next/navigation";

function MobileNav() {
    const path = usePathname() 
  return (
      <section className=" w-full max-w-[140px]">
        <Sheet>
          <SheetTrigger> <GoSidebarExpand size={24} /></SheetTrigger>
          <SheetContent side={'left'} className=" bg-black text-white border-none ">
           <Link href={'/'} className=' text-3xl text-center w-full text-indigo-600 font-semibold'>Zoom</Link>
 {
    sidebarLinks.map((link, index) => {
    return(
    <SheetClose asChild key={index} className=" flex w-full ">
    <Link href={link.route}className={`flex items-center w-full px-2 py-3 mt-3 hover:bg-zinc-600 transition-all rounded-xl gap-4 cursor-pointer ${path === link.route ? 'bg-indigo-600 ext-indigo-600 ' : ''}`}>
    {link.imgURL}
    <span>{link.label}</span>
    </Link>
    </SheetClose>
)
} )
}
  </SheetContent>
  </Sheet>
</section>
  )
}

export default MobileNav