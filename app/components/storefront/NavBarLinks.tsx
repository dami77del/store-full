import Link from "next/link"

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
        href: '/products/all'
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
    return (
        <div className="hidden md:flex justify-center items-center gap-x-4 ml-9">
            {navBarLinks.map((item)=>(
                <Link href={item.href} key={item.id} className="font-medium">
                    {item.name}
                </Link>
            ))}
        </div>
    )
}