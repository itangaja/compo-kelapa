import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck, Droplets, Factory, PackageCheck, Truck } from "lucide-react";

export default function ProductionPage() {
    const steps = [
        {
            title: "Selection & Sorting",
            description: "Our experts manually select the best coconuts from partner farms. Only coconuts of the right size, maturity, and quality make it to our facility.",
            icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
        },
        {
            title: "Hygienic Processing",
            description: "Dehusking and cleaning are done in a strictly controlled environment. We maintain high hygiene standards to prevent contamination.",
            icon: <Droplets className="h-8 w-8 text-secondary" />,
        },
        {
            title: "Quality Inspection",
            description: "Every batch undergoes rigorous testing for moisture content, size consistency, and visual defects before packaging.",
            icon: <PackageCheck className="h-8 w-8 text-accent-foreground" />,
        },
        {
            title: "Warehousing & Logistics",
            description: "Stored in a cool, dry warehouse to maintain freshness. Our logistics team ensures timely and safe loading into containers.",
            icon: <Truck className="h-8 w-8 text-muted-foreground" />,
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/5 py-16 md:py-24">
                <div className="container px-4 text-center max-w-screen-xl mx-auto">
                    <SectionHeader
                        title="Production & Quality Control"
                        subtitle="We don't just export; we ensure perfection in every shipment."
                    />
                </div>
            </section>

            <section className="container px-4 py-16 max-w-screen-xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Our Standard Operating Procedure</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Buyer satisfaction is our top priority. That explains why we implement a multi-stage quality control system.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <Card key={index} className="relative overflow-hidden border-none shadow-md bg-card transition-all hover:-translate-y-1">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                            <CardHeader className="space-y-4">
                                <div className="bg-muted w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                                    {step.icon}
                                </div>
                                <CardTitle className="text-xl">{step.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Gallery / Visual Proof */}
            <section className="bg-muted/30 py-16">
                <div className="container px-4 max-w-screen-xl mx-auto">
                    <SectionHeader title="Infrastructure & Facilities" subtitle="A glimpse into our daily operations." />

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
                        {/* Gallery Item 1 */}
                        <div className="rounded-xl overflow-hidden aspect-video bg-muted relative group shadow-lg">
                            <Image
                                src="/images/warehouse.png"
                                alt="Warehouse Storage"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-bold text-white text-xl drop-shadow-md">Warehouse Storage</span>
                            </div>
                        </div>

                        {/* Gallery Item 2 */}
                        <div className="rounded-xl overflow-hidden aspect-video bg-muted relative group shadow-lg">
                            <Image
                                src="/images/sorting.png"
                                alt="Sorting Process"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-bold text-white text-xl drop-shadow-md">Sorting Process</span>
                            </div>
                        </div>

                        {/* Gallery Item 3 */}
                        <div className="rounded-xl overflow-hidden aspect-video bg-muted relative group shadow-lg">
                            <Image
                                src="/images/container.png"
                                alt="Loading Container"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-bold text-white text-xl drop-shadow-md">Loading Container</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Badge variant="outline" className="px-4 py-2 text-base">
                            <Factory className="mr-2 h-4 w-4" />
                            Capacity: 50 Containers / Month
                        </Badge>
                    </div>
                </div>
            </section>
        </div>
    );
}
