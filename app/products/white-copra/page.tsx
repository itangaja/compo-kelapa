
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Package, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhiteCopraPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/5 py-12">
                <div className="container px-4 max-w-screen-xl mx-auto">
                    <Button variant="ghost" asChild className="mb-8 hover:bg-transparent hover:text-primary pl-0">
                        <Link href="/products" className="flex items-center gap-2 text-muted-foreground">
                            <ArrowLeft className="h-4 w-4" /> Back to Products
                        </Link>
                    </Button>
                    <SectionHeader
                        title="White Copra"
                        subtitle="Premium edible-grade dried coconut meat."
                    />
                </div>
            </section>

            <div className="container px-4 py-12 max-w-screen-xl mx-auto">
                <div className="grid gap-12 lg:grid-cols-2 items-start">
                    {/* Image Section */}
                    <div className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-muted overflow-hidden shadow-2xl">
                        <Image
                            src="/images/kelapa-abandon.png"
                            alt="White Copra"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-2">White Copra</h2>
                            <h3 className="text-xl text-primary font-medium mb-4">(Kopra Putih)</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our White Copra is the premium grade of dried coconut. Unlike regular copra, it is dried using clean, indirect heat or sun-dried under hygienic conditions to prevent smoking or discoloration. It is free from mold and impurities, making it ideal for desiccated coconut production, coconut flour, or direct culinary use.
                            </p>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Package className="h-5 w-5 text-primary" />
                                    Product Specifications
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Size</TableCell>
                                            <TableCell>Variable / Graded by diameter</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Quality</TableCell>
                                            <TableCell>White meat, no shell, no testa, no mold</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Packaging</TableCell>
                                            <TableCell>Vacuum packed / Frozen / PP Bag</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">MOQ</TableCell>
                                            <TableCell>1 x 20ft Container</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">HS Code</TableCell>
                                            <TableCell>0801.19.90</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>

                        <div className="pt-4">
                            <Button size="lg" className="w-full sm:w-auto" asChild>
                                <Link href="/contact">Request a Quote</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
