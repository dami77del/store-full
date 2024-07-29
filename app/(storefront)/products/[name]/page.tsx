import { ProductCard } from "@/app/components/storefront/ProductsCard";
import prisma from "@/app/lib/db"
import { notFound } from "next/navigation";

async function getData(productCategory: string) {
    switch (productCategory) {
        case "all": {
            const data = await prisma.product.findMany({
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
                where: {
                    status: "published",
                }
            })
            return {
                title: "All Products",
                data: data,
            };
        }
        case "accesories": {
            const data = await prisma.product.findMany({
                where: {
                    status: 'published',
                    category: 'accesories',
                },
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
            })
            return {
                title: " Products accesories",
                data: data,
            };
        } case "figure": {
            const data = await prisma.product.findMany({
                where: {
                    status: 'published',
                    category: 'figures',
                },
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
            })
            return {
                title: 'Products  figures',
                data: data,
            }
        } case "anime": {
            const data = await prisma.product.findMany({
                where: {
                    status: 'published',
                    category: "anime",
                },
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                }
            })
            return {
                title: "Products Anime",
                data: data,
            }
        } default:{
            return notFound()
        }
    }

}

export default  async function CategoriesPage({params,}:{params:{name:string}}) {
    const {data, title} = await getData(params.name)

    return (
       <section>
        <h1 className="font-semibold text-3xl my-5 ">{title}</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
             { data.map((item)=>(
                <ProductCard item={item}/>
             ))}   
        </div>
       </section>
    )
}