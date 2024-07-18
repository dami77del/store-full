import Link from "next/link"

export function NavBar() {
    return (
        <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
            <div className="flex items-center">
                <Link href='/'>
                <h1 className="text-black font-bold text-xl lg:text-3xl">DOTPoke<span className="text-primary">Store</span></h1>
                </Link>
            </div>
        </nav>
    )
}