import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const events: Event[] = [
    {
      title: "Tech Conference 2023",
      description: "Annual gathering of industry leaders in technology",
      images: [
        "https://placehold.co/600x400",
        "https://placehold.co/600x400",
        "https://placehold.co/600x400",
      ],
    },
    {
      title: "Summer Music Festival",
      description: "A weekend of live performances from top artists",
      images: [
        "https://placehold.co/600x400/black/red",
        "https://placehold.co/600x400/black/blue",
        "https://placehold.co/600x400/black/green",
      ],
    },
    {
      title: "Gala Dinner",
      description: "Elegant fundraising event for local charities",
      images: [
        "https://placehold.co/600x400/black/blue",
        "https://placehold.co/600x400/black/green",
        "https://placehold.co/600x400/black/red",
      ],
    },
    {
      title: "Product Launch",
      description: "Unveiling the next generation of smart devices",
      images: [
        "https://placehold.co/600x400/black/blue",
        "https://placehold.co/600x400/black/green",
        "https://placehold.co/600x400/black/red",
      ],
    },
    {
      title: "Wedding Ceremony",
      description: "A beautiful celebration of love and commitment",
      images: [
        "https://placehold.co/600x400/black/blue",
        "https://placehold.co/600x400/black/green",
        "https://placehold.co/600x400/black/red",
      ],
    },
    {
      title: "Corporate Retreat",
      description: "Team building and strategy planning in a scenic location",
      images: [
        "https://placehold.co/600x400/black/blue",
        "https://placehold.co/600x400/black/green",
        "https://placehold.co/600x400/black/red",
      ],
    },
  ]

  type Event = {
    title: string
    description: string
    images: string[]
  }

  function EventCard({ event }: { event: Event }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % event.images.length)
    }

    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + event.images.length) % event.images.length)
    }

    return (
      <div className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg">
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative aspect-video cursor-pointer overflow-hidden">
              <Image
                src={event.images[0]}
                alt={event.title}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                fill
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <div className="relative aspect-video">
              <Image
                src={event.images[currentImageIndex]}
                alt={`${event.title} - Image ${currentImageIndex + 1}`}
                className="object-cover"
                fill
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-opacity hover:bg-black/75"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-opacity hover:bg-black/75"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
        <div className="p-4">
          <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
          <p className="text-sm text-muted-foreground">{event.description}</p>
        </div>
      </div>
    )
  }

const Galeria = () => {
  return (
    <section id="gallery" className="bg-muted py-24">
    <div className="container mx-auto">
      <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Event Gallery</h2>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Galeria
