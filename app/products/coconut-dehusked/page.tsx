
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Package, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CoconutDehuskedPage() {
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
                        title="Coconut Dehusked"
                        subtitle="Premium semi-husked coconuts for fresh consumption and processing."
                    />
                </div>
            </section>

            <div className="container px-4 py-12 max-w-screen-xl mx-auto">
                <div className="grid gap-12 lg:grid-cols-2 items-start">
                    {/* Image Section */}
                    <div className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-muted overflow-hidden shadow-2xl">
                        <Image
                            src="/images/kelapa-kupas-bulat.png"
                            alt="Coconut Dehusked"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-2">Coconut Dehusked</h2>
                            <h3 className="text-xl text-primary font-medium mb-4">(Kelapa Kupas Bulat)</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our semi-husked coconuts are carefully selected from the best plantations in Sulawesi. They are known for their thick meat and sweet water, making them ideal for fresh consumption or processing into coconut milk and oil. We ensure strict quality control to maintain freshness and size consistency.
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
                                            <TableCell className="font-medium">Weight</TableCell>
                                            <TableCell>800g - 1200g per nut</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Moisture</TableCell>
                                            <TableCell>Naturally preserved</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Packaging</TableCell>
                                            <TableCell>Net bag (20-25 nuts) / Wholesale Bulk</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">MOQ</TableCell>
                                            <TableCell>1 x 20ft Container (~14 MT)</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">HS Code</TableCell>
                                            <TableCell>0801.19.10</TableCell>
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
