import Link from "next/link";
import { Palmtree, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t bg-muted/40">
            <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center text-center md:text-left">
                    <div className="space-y-4 flex flex-col items-center md:items-start">
                        <Link href="/" className="flex items-center space-x-2">
                            <Palmtree className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold">Kelapa Export</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Exporters of premium quality coconut products from Indonesia to the world. Sustainable, reliable, and high standard.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Products</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="/products#dehusked" className="hover:text-primary">Coconut Dehusked</Link>
                            </li>
                            <li>
                                <Link href="/products#copra" className="hover:text-primary">Copra</Link>
                            </li>
                            <li>
                                <Link href="/products#white-coconut" className="hover:text-primary">White Coconut</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="/about" className="hover:text-primary">About Us</Link>
                            </li>
                            <li>
                                <Link href="/production" className="hover:text-primary">Production & QC</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-primary">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-foreground">Contact Us</h3>
                        <ul className="space-y-3 text-base text-muted-foreground">
                            <li className="flex items-start space-x-3 justify-center md:justify-start">
                                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                                <a href="https://maps.google.com/?q=Sulawesi,Indonesia" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Sulawesi, Indonesia</a>
                            </li>
                            <li className="flex items-center space-x-3 justify-center md:justify-start">
                                <Phone className="h-5 w-5 shrink-0 text-primary" />
                                <span>+62 812 3456 7890</span>
                            </li>
                            <li className="flex items-center space-x-3 justify-center md:justify-start">
                                <Mail className="h-5 w-5 shrink-0 text-primary" />
                                <span>info@kelapaexport.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t pt-8 text-center">
                    <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Kelapa Export. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
