import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/5 py-16 md:py-24">
                <div className="container px-4 text-center max-w-screen-xl mx-auto">
                    <SectionHeader
                        title="Contact Us"
                        subtitle="Let's discuss how we can supply your business with premium coconut products."
                    />
                </div>
            </section>

            <section className="container px-4 py-16 max-w-screen-xl mx-auto">
                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold">Get In Touch</h3>
                            <p className="text-muted-foreground">
                                We are available via email, phone, or WhatsApp. Feel free to reach out for price quotations, sample requests, or general inquiries.
                            </p>

                            <div className="space-y-4">
                                <Card className="border-none shadow-sm bg-muted/30">
                                    <CardContent className="flex items-center gap-4 p-6">
                                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Email</h4>
                                            <Link href="mailto:info@kelapaexport.com" className="text-muted-foreground hover:text-primary transition-colors">
                                                info@kelapaexport.com
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-sm bg-muted/30">
                                    <CardContent className="flex items-center gap-4 p-6">
                                        <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Phone / WhatsApp</h4>
                                            <Link href="https://wa.me/6281234567890" className="text-muted-foreground hover:text-primary transition-colors">
                                                +62 812 3456 7890
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-sm bg-muted/30">
                                    <CardContent className="flex items-center gap-4 p-6">
                                        <div className="p-3 bg-accent/20 rounded-full text-accent-foreground">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Office & Warehouse</h4>
                                            <p className="text-muted-foreground">
                                                123 Coconut Lane, Jakarta, Indonesia 10110
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        {/* Map Embed */}
                        <div className="aspect-video w-full rounded-xl bg-muted relative overflow-hidden shadow-sm border">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8059086.177053535!2d116.3623696245054!3d-2.437638423631613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d97a61d848651a3%3A0x600c24240755866!2sSulawesi!5e0!3m2!1sen!2sid!4v1689654123456!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card rounded-2xl border shadow-sm p-8 h-fit">
                        <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">First name</label>
                                    <Input id="first-name" placeholder="John" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Last name</label>
                                    <Input id="last-name" placeholder="Doe" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                <Input id="email" type="email" placeholder="john@example.com" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
                                <Input id="subject" placeholder="Inquiry for Coconut Dehusked" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                <Textarea id="message" placeholder="Tell us about your requirements (Quantity, Destination, etc.)" className="min-h-[150px]" required />
                            </div>

                            <Button type="submit" className="w-full h-11 text-base">
                                Send Message <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}
