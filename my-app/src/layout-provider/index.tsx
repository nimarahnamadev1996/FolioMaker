'use client'
import { usePathname } from 'next/navigation'



import PrivateLayout from './private-layout'
import PublicLayout from './public-layout'



const LayoutProvider = ({ children }: { children: React.ReactNode }) => {

    const pathname = usePathname()

    if(pathname.startsWith('/account')){
        return <PrivateLayout>{children}</PrivateLayout>
    }else{
        return <PublicLayout>{children}</PublicLayout>
    }

}

export default LayoutProvider