import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Globe, HeartHandshake, Sprout, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Banner */}
            <section className="bg-primary/5 py-16 md:py-24">
                <div className="container px-4 text-center max-w-screen-xl mx-auto">
                    <SectionHeader
                        title="About Kelapa Export"
                        subtitle="Bridging Indonesian farmers to the global market with sustainable, high-quality coconut products."
                    />
                </div>
            </section>

            {/* Story & Vision */}
            <section className="container py-16 px-4 max-w-screen-xl mx-auto">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-primary">Our Story</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Founded in the heart of Indonesia's coconut-rich regions, Kelapa Export began with a simple mission: to empower local farmers and share the versatility of Indonesian coconuts with the world. What started as a small community initiative has grown into a trusted export company, connecting local agricultural potential with international demand.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We believe in fair trade and sustainability. By working directly with farmers, we ensure fair compensation and promote environmentally friendly harvesting practices.
                        </p>
                    </div>
                    <div className="relative aspect-video rounded-2xl bg-muted overflow-hidden shadow-xl">
                        <Image
                            src="/images/pabrik.png"
                            alt="Kelapa Export Factory"
                            fill
                            className="object-cover transition-transform hover:scale-105 duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* Vision & Mission Cards */}
            <section className="bg-muted/30 py-16">
                <div className="container px-4 max-w-screen-xl mx-auto">
                    <div className="grid gap-8 md:grid-cols-2">
                        <Card className="bg-background border-none shadow-md">
                            <CardContent className="p-8 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Globe className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">Our Vision</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    To be the preferred global partner for Indonesian coconut products, recognized for quality, reliability, and commitment to sustainable growth for our farmers and partners.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-background border-none shadow-md">
                            <CardContent className="p-8 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                                        <Sprout className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">Our Mission</h3>
                                </div>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>Deliver premium quality coconut products consistently.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>Uphold ethical business practices and fair trade.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>Innovate in processing to minimize waste and maximize value.</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="container py-16 px-4 max-w-screen-xl mx-auto">
                <SectionHeader title="Our Core Values" subtitle="The principles that guide every decision we make." />

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                    <div className="flex flex-col items-center text-center space-y-3">
                        <div className="p-4 bg-primary/10 rounded-full text-primary mb-2">
                            <HeartHandshake className="h-8 w-8" />
                        </div>
                        <h4 className="text-lg font-bold">Integrity</h4>
                        <p className="text-sm text-muted-foreground">We build trust through transparency and honesty in all our dealings.</p>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-3">
                        <div className="p-4 bg-secondary/10 rounded-full text-secondary mb-2">
                            <Users className="h-8 w-8" />
                        </div>
                        <h4 className="text-lg font-bold">Community</h4>
                        <p className="text-sm text-muted-foreground">We grow together with our farmers and local communities.</p>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-3">
                        <div className="p-4 bg-accent/20 rounded-full text-accent-foreground mb-2">
                            <Sprout className="h-8 w-8" />
                        </div>
                        <h4 className="text-lg font-bold">Sustainability</h4>
                        <p className="text-sm text-muted-foreground">We are committed to eco-friendly practices throughout our supply chain.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
