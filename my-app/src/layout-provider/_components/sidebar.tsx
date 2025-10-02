import React from 'react'
import { Book, Home, LaptopMinimalCheck, ListCheck, Mail, Presentation, Settings, User } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import SignOutButton from './sign-out-button';
import usersGlobalStore, { IUsersGlobalStore } from '@/global-store/users-store';


const Sidebar = ({onClose,openSidebar}:{onClose: () => void;openSidebar: boolean;}) => {


  const pathname = usePathname();
  const router = useRouter();

  const {user} = usersGlobalStore() as IUsersGlobalStore

    const menuItems = [
    {
      title: "Home",
      path: "/account",
      icon: <Home size={14} />,
    },
    {
      title: "Profile",
      path: "/account/profile",
      icon: <User size={14} />,
    },
    {
      title: "Educations",
      path: "/account/educations",
      icon: <Book size={14} />,
    },
    {
      title: "Skills",
      path: "/account/skills",
      icon: <LaptopMinimalCheck size={14} />,
    },
    {
      title: "Projects",
      path: "/account/projects",
      icon: <Presentation size={14} />,
    },
    {
      title: "Experiences",
      path: "/account/experiences",
      icon: <ListCheck size={14} />,
    },
    {
      title : 'Configuration',
      path : '/account/configuration',
      icon : <Settings size={14} />
    },
    {
      title : 'Queries',
      path : '/account/queries',
      icon : <Mail size={14} />
    }
  ];



  return (
    <Sheet  open={openSidebar} onOpenChange={onClose}>

        <SheetContent className="min-w-[300px]">
          <SheetHeader>
            <SheetTitle>Welcome {user?.name}</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-4 mt-5">
            {
              menuItems.map((item) => (
                <div
                   key={item.title}
                   className={`flex gap-4 items-center cursor-pointer p-3 ${
                   pathname === item.path 
                    ? "bg-gray-100 border-gray-400 rounded border cursor-pointer" : ""}`}
                    onClick={() => {
                        router.push(item.path)
                        onClose()}}>
                     {item.icon}
                     <span className="text-sm">{item.title}</span>
                </div>
              ))  
            }

            <SignOutButton/>
          </div>
        </SheetContent>

    </Sheet>
  )
}

export default Sidebar