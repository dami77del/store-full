'use client'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const navBarLinks = [
    {
        id: 0,
        name: "Home",
        href: '/'
    },
    {
        id: 1,
        name: "All Products",
        href: '/products/all'
    },
    {
        id: 2,
        name: "Accesories",
        href: '/products/accesories'
    },
    {
        id: 3,
        name: "Figure",
        href:'/products/figure'
    },{
        id:4,
        name:"Anime",
        href:'/products/anime'
    }
]
export function NavBarLinks() {
    const location = usePathname()
    return (
        <div className="hidden md:flex justify-center items-center gap-x- ml-8">
            {navBarLinks.map((item)=>(
                <Link href={item.href} key={item.id} className={cn(location == item.href ? 'bg-muted ': 'hover:bg-muted hover:bg-opacity-75', 'group p-2 font-medium rounded-lg' )}>
                    {item.name}
                </Link>
            ))}
        </div>
    )
}