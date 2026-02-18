import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";

export default function ProductsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/5 py-16 md:py-24">
                <div className="container px-4 text-center max-w-screen-xl mx-auto">
                    <SectionHeader
                        title="Our Products"
                        subtitle="Premium quality coconut derivatives tailored for international markets."
                    />
                </div>
            </section>

            <div className="container px-4 py-12 max-w-screen-xl mx-auto space-y-24">

                {/* Product 1: Coconut Dehusked */}
                <section id="dehusked" className="scroll-mt-24">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <h2 className="text-3xl font-bold text-foreground">Coconut Dehusked</h2>
                                <Badge variant="secondary">Best Seller</Badge>
                            </div>
                            <h3 className="text-xl text-primary font-medium">(Kelapa Kupas Bulat)</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our semi-husked coconuts are carefully selected from the best plantations. They are known for their thick meat and sweet water, making them ideal for fresh consumption or processing into coconut milk and oil.
                            </p>

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
                        </div>

                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl bg-muted overflow-hidden shadow-xl">
                            <Image
                                src="/images/kelapa-kupas-bulat.png"
                                alt="Coconut Dehusked"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                <hr className="border-muted" />

                {/* Product 2: Copra */}
                <section id="copra" className="scroll-mt-24">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="order-2 lg:order-1 relative aspect-square md:aspect-[4/3] rounded-2xl bg-muted overflow-hidden shadow-xl">
                            <Image
                                src="/images/coprahd.png"
                                alt="Copra Asalan"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="order-1 lg:order-2 space-y-6">
                            <div className="flex items-center gap-3">
                                <h2 className="text-3xl font-bold text-foreground">Copra</h2>
                                <Badge variant="outline">Industrial Grade</Badge>
                            </div>
                            <h3 className="text-xl text-primary font-medium">(Kopra Asalan)</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                High-quality dried coconut meat with high oil content. Our copra is sun-dried or kiln-dried to specific moisture levels, perfect for coconut oil production and animal feed.
                            </p>

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
                                                <TableCell className="font-medium">Moisture Content</TableCell>
                                                <TableCell>5% - 7% (Reg), 10-15% (Asalan)</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Oil Content</TableCell>
                                                <TableCell>~60-65%</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Packaging</TableCell>
                                                <TableCell>Jute Gunny Bag / PP Bag (50kg)</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">MOQ</TableCell>
                                                <TableCell>1 x 20ft Container (~12-13 MT)</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">HS Code</TableCell>
                                                <TableCell>1203.00.00</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <hr className="border-muted" />

                {/* Product 3: White Coconut */}
                <section id="white-coconut" className="scroll-mt-24">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <h2 className="text-3xl font-bold text-foreground">White Coconut</h2>
                                <Badge variant="secondary">Premium</Badge>
                            </div>
                            <h3 className="text-xl text-primary font-medium">(Kelapa Putih Abandon)</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Selected coconuts with the shell completely removed, leaving only the white meat. Ideal for desiccated coconut production, coconut flour, or premium culinary use.
                            </p>

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
                                                <TableCell>White meat, no shell, no testa</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Packaging</TableCell>
                                                <TableCell>Vacuum packed / Frozen (Requires Reefer)</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">MOQ</TableCell>
                                                <TableCell>1 x 20ft Reefer Container</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">HS Code</TableCell>
                                                <TableCell>0801.19.90</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl bg-muted overflow-hidden shadow-xl">
                            <Image
                                src="/images/kelapa-abandon.png"
                                alt="White Coconut"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
