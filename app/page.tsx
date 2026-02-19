import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Factory, Globe2, Leaf, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

import { HeroSection } from "@/components/home/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Highlights / Features */}
      <section className="container py-24 px-4 max-w-screen-xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-card/50 border-none shadow-sm transition-all hover:shadow-md">
            <CardContent className="flex flex-col items-center p-8 text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">100% Organic Sourcing</h3>
              <p className="text-muted-foreground">
                Sourced directly from sustainable coconut plantations across Indonesia.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-none shadow-sm transition-all hover:shadow-md">
            <CardContent className="flex flex-col items-center p-8 text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Premium Quality Control</h3>
              <p className="text-muted-foreground">
                Rigorous inspection processes to ensure moisture content and size meet international standards.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-none shadow-sm transition-all hover:shadow-md">
            <CardContent className="flex flex-col items-center p-8 text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Globe2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Global Export Ready</h3>
              <p className="text-muted-foreground">
                Experienced in logistics and documentation for smooth export to any country.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="bg-muted/30 py-24">
        <div className="container px-4 max-w-screen-xl mx-auto">
          <SectionHeader
            title="Our Core Products"
            subtitle="Explore our range of high-quality coconut derivatives tailored for export."
          />

          <div className="grid gap-8 md:grid-cols-3">
            {/* Product 1: Dehusked */}
            <div className="group relative overflow-hidden rounded-2xl bg-background border hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <Image
                  src="/images/kelapa-kupas-bulat.png"
                  alt="Coconut Dehusked"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Coconut Dehusked</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  Fresh, semi-husked coconuts perfect for retail and wholesale markets.
                </p>
                <Link href="/products/coconut-dehusked" className="font-medium text-primary hover:underline inline-flex items-center">
                  View Specifications <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product 2: Copra */}
            <div className="group relative overflow-hidden rounded-2xl bg-background border hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <Image
                  src="/images/coprahd.png"
                  alt="Copra Asalan"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Copra (Asalan)</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  High oil content dried coconut suitable for oil extraction and industrial use.
                </p>
                <Link href="/products/copra" className="font-medium text-primary hover:underline inline-flex items-center">
                  View Specifications <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product 3: White Coconut */}
            <div className="group relative overflow-hidden rounded-2xl bg-background border hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <Image
                  src="/images/kelapa-abandon.png"
                  alt="White Coconut"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">White Copra</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  Premium white meat coconut (Kopra Putih), clean and ready for specialized processing.
                </p>
                <Link href="/products/white-copra" className="font-medium text-primary hover:underline inline-flex items-center">
                  View Specifications <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Production Snippet */}
      <section className="container py-24 px-4 max-w-screen-xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden aspect-video bg-muted shadow-2xl group">
            <Image
              src="/images/coprahd.png"
              alt="Production Process"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="font-bold text-lg">Hygienic Processing</p>
                <p className="text-sm text-white/80">Ensuring highest quality standards</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <SectionHeader
              title="State-of-the-Art Production"
              align="left"
              className="mb-6"
            />
            <p className="text-lg text-muted-foreground">
              We take pride in our rigorous production standards. From the moment the coconuts arrive at our facility to the final packaging, every step is monitored for quality.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                <span>Advanced Sorting & Grading Systems</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                <span>Strict Hygiene & Humidity Control</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                <span>Efficient Warehousing & Logistics</span>
              </li>
            </ul>
            <Button className="mt-4" asChild>
              <Link href="/production">Learn About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary via-[#4E342E] to-primary text-primary-foreground py-24">
        <div className="container px-4 text-center max-w-screen-lg mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Ready to Partner With Us?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Get in touch for quotations, samples, or to discuss your specific requirements. We are ready to supply your business.
          </p>
          <Button size="lg" className="h-14 px-8 text-lg bg-accent text-accent-foreground hover:bg-accent/90 border-none" asChild>
            <Link href="/contact">Get a Quote Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
