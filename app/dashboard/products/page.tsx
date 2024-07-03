import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal, PlusCircle, UserIcon } from "lucide-react";
import Link from "next/link";

export default function ProductRoute() {
    return (
        <>
            <div className="flex items-center justify-end">
                <Button asChild className="flex items-center gap-x-2">
                    <Link href="/dashboard/products/create">
                        <PlusCircle className="w-3.5 h-3.5" />
                        <span>Add Product</span>
                    </Link>
                </Button>
            </div>
            <Card className="mt-5">
                <CardHeader>
                    <CardTitle>Product List</CardTitle>
                    <CardDescription>Manage your products and view their sales performance</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Image</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <UserIcon className="h-16 w-16"></UserIcon>
                                </TableCell>
                                <TableCell>Figure Poke</TableCell>
                                <TableCell>Active</TableCell>
                                <TableCell>$120</TableCell>
                                <TableCell>15-07-2024</TableCell>
                                <TableCell className="text-end">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size='icon' variant='ghost'>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}