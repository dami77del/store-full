import Image from "next/image";
import Link from "next/link";

import all from '@/public/all.jpg'
import figure from '@/public/figure.jpg'
import manga from '@/public/manga.jpg'

export function CategorySelection() {
    return (
        <div className="py-24 sm:py-32 ">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-extrabold tracking-tight ">Shop by Category</h2>
                <Link className="text-sm font-semibold text-primary hover:text-primary/80 " href='/products/all'>
                    Browse all Products &rarr;
                </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2">
                    <Image src={all} alt='All Product Image' className="object-cover object-center" />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-60" />
                    <div className="p-6 flex items-end">
                        <Link href="/products/all">
                            <h3 className="text-white font-semibold">All Products</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
                <div className="group aspect-w-2  aspect-h-1 rounded-xl overflow-hidden sm:relative sm:aspect-none sm:h-full">
                    <Image
                        src={figure}
                        alt='Products Figure'
                        className="object-center object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full" />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-60 sm:absolute sm:inset-0" />
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href="/products/figure">
                            <h3 className="text-white font-semibold">Products Figure</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
                <div className="group aspect-w-2  aspect-h-1 rounded-xl overflow-hidden sm:relative sm:aspect-none sm:h-full">
                    <Image
                        src={manga}
                        alt='Products Manga'
                        className="object-center object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full" />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-60 sm:absolute sm:inset-0" />
                    <div className="p-6 flex items-end sm:absolute sm:inset-0">
                        <Link href="/products/manga">
                            <h3 className="text-white font-semibold">Products Manga</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}