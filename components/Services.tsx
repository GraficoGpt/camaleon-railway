import { AudioLines, Cable, Calendar, LampDesk, MapPinHouse, Video } from "lucide-react"

const Services = () => {
    const services = [
        {
          icon: <AudioLines color="#90EE90" size={48} />,
          title: "Sound Systems",
          description: "Professional audio equipment for crystal-clear sound at any venue size.",
        },
        {
          icon: <LampDesk color="#90EE90" size={48} />,
          title: "Lighting Design",
          description: "Create the perfect atmosphere with our state-of-the-art lighting solutions.",
        },
        {
          icon: <Video color="#90EE90" size={48} />,
          title: "Video Production",
          description: "High-quality video recording and live streaming services.",
        },
        {
          icon: <Calendar color="#90EE90" size={48} />,
          title: "Event Planning",
          description: "Full-service event planning and coordination.",
        },
        {
          icon: <MapPinHouse color="#90EE90" size={48} />,
          title: "Equipment Rental",
          description: "Rent top-of-the-line audiovisual equipment for your events.",
        },
        {
          icon: <Cable color="#90EE90" size={48} />,
          title: "Technical Support",
          description: "Expert technicians to ensure your event runs smoothly.",
        },
      ]
  return (
    <section id="services" className="py-24 px-4">
    <div className="container mx-auto">
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
  )
}

export default Services;