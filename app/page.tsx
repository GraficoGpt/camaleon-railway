"use client"

/* import { ModeToggle } from "@/components/mode-toggle" */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import  Header  from "@/components/Header"
import { FacebookIcon, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Galeria from "@/components/Galeria"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Galeria />

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Ready to create your next amazing event? Contact us for a free consultation.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-primary" />
                  <span>contact@eventpro.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-primary" />
                  <span>123 Event Street, City, State 12345</span>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <FacebookIcon className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name">Name</label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject">Subject</label>
                  <Input id="subject" placeholder="Event Inquiry" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea id="message" placeholder="Tell us about your event..." />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} EventPro. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  )
}