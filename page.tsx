import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            EventPro
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="#services" className="text-sm hover:text-primary">
              Services
            </Link>
            <Link href="#gallery" className="text-sm hover:text-primary">
              Gallery
            </Link>
            <Link href="#contact" className="text-sm hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button>Get Quote</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16">
        <div className="aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/your-video-id?autoplay=1&mute=1&loop=1&controls=0&showinfo=0"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="container text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Creating Unforgettable Events
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Professional sound, lighting, and production services for your next event
            </p>
            <Button size="lg" className="mt-8">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
              >
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-muted py-24">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Event Gallery</h2>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=400&width=600`}
                  alt={`Event ${item}`}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  fill
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container">
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
                  <Facebook className="h-6 w-6" />
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
    </div>
  )
}

const services = [
  {
    icon: <div className="h-12 w-12 rounded-lg bg-primary/10 p-2" />,
    title: "Sound Systems",
    description: "Professional audio equipment for crystal-clear sound at any venue size.",
  },
  {
    icon: <div className="h-12 w-12 rounded-lg bg-primary/10 p-2" />,
    title: "Lighting Design",
    description: "Create the perfect atmosphere with our state-of-the-art lighting solutions.",
  },
  {
    icon: <div className="h-12 w-12 rounded-lg bg-primary/10 p-2" />,
    title: "Video Production",
    description: "High-quality video recording and live streaming services.",
  },
  {
    icon: <div className="h-12 w-12 rounded-lg bg-primary/10 p-2" />,
    title: "Event Planning",
    description: "Full-service event planning and coordination.",
  },
  {
    icon: <div className="h-12 w-12 rounded-lg bg-primary/10 p-2" />,
    title: "Equipment Rental",
    description: "Rent top-of-the-line audiovisual equipment for your events.",
  },
  {
    icon: <div className="h-12 w-12 rounded-lg bg-primary/10 p-2" />,
    title: "Technical Support",
    description: "Expert technicians to ensure your event runs smoothly.",
  },
]

