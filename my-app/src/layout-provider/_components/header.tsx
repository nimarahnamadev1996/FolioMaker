import { Button } from '@/components/ui/button'
import usersGlobalStore, { IUsersGlobalStore } from '@/global-store/users-store'
import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import Sidebar from './sidebar'

const Header = () => {

 const [openSidebar, setOpenSidebar] = useState(false)

 const {user} = usersGlobalStore() as IUsersGlobalStore

  return (
    <div className="bg-primary p-5 flex justify-between items-center">

        <h1 className="font-bold text-md text-yellow-500 md:text-2xl">FolioMaker</h1>

        <div className="flex gap-1 items-center md:gap-5">
             <span className="text-sm text-white">{user?.name}</span>

             <Button onClick={() => setOpenSidebar(true)}>
                <Menu size={15} className="text-white" />
             </Button>
        </div>


        {
          openSidebar && (
            <Sidebar
              openSidebar={openSidebar}
              onClose={() => setOpenSidebar(false)}/>
          )  
        }
    </div>
  )
}

export default Header