
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

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

            <div className="container px-4 py-16 max-w-screen-xl mx-auto">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Product 1: Dehusked */}
                    <Link href="/products/coconut-dehusked" className="group relative overflow-hidden rounded-2xl bg-background border hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                        <div className="aspect-[4/3] w-full relative overflow-hidden">
                            <Image
                                src="/images/kelapa-kupas-bulat.png"
                                alt="Coconut Dehusked"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Coconut Dehusked</h3>
                            <p className="text-muted-foreground mb-6 line-clamp-3">
                                Fresh, semi-husked coconuts perfect for retail and wholesale markets. Known for thick meat and sweet water.
                            </p>
                            <div className="mt-auto flex items-center text-primary font-medium group-hover:underline">
                                View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </Link>

                    {/* Product 2: Copra */}
                    <Link href="/products/copra" className="group relative overflow-hidden rounded-2xl bg-background border hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                        <div className="aspect-[4/3] w-full relative overflow-hidden">
                            <Image
                                src="/images/coprahd.png"
                                alt="Copra"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Copra</h3>
                            <p className="text-muted-foreground mb-6 line-clamp-3">
                                High-quality dried coconut meat (Asalan) with high oil content. Ideal for coconut oil production and industrial use.
                            </p>
                            <div className="mt-auto flex items-center text-primary font-medium group-hover:underline">
                                View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </Link>

                    {/* Product 3: White Copra */}
                    <Link href="/products/white-copra" className="group relative overflow-hidden rounded-2xl bg-background border hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                        <div className="aspect-[4/3] w-full relative overflow-hidden">
                            <Image
                                src="/images/kelapa-abandon.png"
                                alt="White Copra"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">White Copra</h3>
                            <p className="text-muted-foreground mb-6 line-clamp-3">
                                Premium white meat coconut (Kopra Putih). Clean, dried, and ready for specialized processing or culinary use.
                            </p>
                            <div className="mt-auto flex items-center text-primary font-medium group-hover:underline">
                                View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
