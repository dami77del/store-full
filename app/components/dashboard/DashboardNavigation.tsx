import Link from "next/link"

const links = [
    {
        name: 'Dashboard',
        href: '/dashboard'
    },
    {
        name: 'Orders',
        href: '/dashboard/orders'
    },
    {
        name: 'Products',
        href: '/dashboard/products'
    },
    {
        name: 'Categories',
        href: '/dashboard/categories'
    }
]

export function Dashboardnavigation() {
    return (
        <>
            {links.map((links) => (
                <Link key={links.name} href={links.href}>
                    {links.name}
                </Link>
            ))}
        </>
    )
}