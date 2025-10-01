'use client'

import React, { useState } from 'react'
import Image from 'next/image';


import { Button } from '@/components/ui/button';
import  hero from '../../public/images/hero.png'
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { SignIn, SignUp } from '@clerk/nextjs';
import { useSearchParams } from 'next/navigation';


const menuItems = [
 
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];


const HomePage = () => {

  const [openSheet, setOpenSheet] = useState<boolean>(false)

  const searchParams = useSearchParams()
  const formType = searchParams.get('formType')

  return (

    <div className='flex flex-col min-h-screen'>

      {/* --- Navbar ---- */}

      <div className='flex justify-between items-center bg-gray-100 p-5 '>

        <h1 className="font-bold text-sm text-primary md:text-xl lg:text-3xl">
          <b className="text-[#FE4E59]">Folio</b>Maker
        </h1>

        <div className='flex justify-end gap-2 items-center md:gap-5'>
          {
           menuItems.map((item) => (
            <Link href={item.path} key={item.title} className="text-sm font-bold text-gray-600">
              {item.title}
            </Link>
           )) 
          }

          <Button 
           size='sm'
           onClick={() => setOpenSheet(true)}>
            Sign-In
          </Button>
        </div>
      </div>


       {/* ---- Main page ---- */}

       <div className='grid md:grid-cols-2 gap-10 mt-10 px-20'>

        <div className='flex flex-col justify-center'>
          <div>
            <h1 className="text-md md:text-xl lg:text-4xl font-bold text-primary">
               <b className="text-[#FE4E59]">Folio</b>Maker
            </h1>
            <p className="text-gray-600 mt-2 text-sm lg:text-lg font-semibold">
              FolioMaker is a platform that allows you to create
              your own portfolio in minutes. It is easy to use and has a lot of
              features. You can add your own projects, skills, and experience.
            </p>
          </div>
        </div>

        <div>
           <Image src={hero} alt='Hero'/>
        </div>
       </div>


       {
        openSheet && (
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
             <SheetContent className='min-w-[500px] flex justify-center items-center'>
               <SheetHeader>
                 <SheetTitle></SheetTitle>
               </SheetHeader>

               {
                formType === "sign-up" ? (
                  <SignUp
                     routing="hash"
                     signInUrl="/?formType=sign-in"
                     fallbackRedirectUrl="/account"/>
                 
                ) : (
                   
                   <SignIn
                    routing="hash"
                    signUpUrl="/?formType=sign-up"
                    fallbackRedirectUrl="/account"/>
                )
               }
             </SheetContent>
          </Sheet>
        )
       }

     </div>
  )
}

export default HomePage