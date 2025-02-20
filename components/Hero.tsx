
import { Button } from "./ui/button";
import Camaleon480MP4 from '@/app/assets/Camaleon-480mp.mp4';
import Camaleon720MP4 from '@/app/assets/Camaleon-720mp.mp4';
import Camaleon1080MP4 from '@/app/assets/Camaleon-1080mp.mp4';
import Camaleon480WebM from '@/app/assets/Camaleon-480wm.webm';
import Camaleon720WebM from '@/app/assets/Camaleon-720wm.webm';
import Camaleon1080WebM from '@/app/assets/Camaleon-1080wm.webm';
import Miniatura from '@/app/assets/Miniatura.webp';

const Hero = () => {
  return (
    <section className="relative pt-16">
      <div className="aspect-video w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={Miniatura.src}
      >
        {/* WebM (mejor para navegadores modernos) */}
        <source src={Camaleon1080WebM} type="video/webm" media="(min-width: 1024px)" />
        <source src={Camaleon720WebM} type="video/webm" media="(max-width: 1023px)" />
        <source src={Camaleon480WebM} type="video/webm" media="(max-width: 768px)" />

        {/* MP4 (fallback para navegadores que no soportan WebM) */}
        <source src={Camaleon1080MP4} type="video/mp4" media="(min-width: 1024px)" />
        <source src={Camaleon720MP4} type="video/mp4" media="(max-width: 1023px)" />
        <source src={Camaleon480MP4} type="video/mp4" media="(max-width: 768px)" />

        Tu navegador no soporta videos en HTML5.
      </video>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="container text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Creando eventos inolvidables
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Servicios profesionales de sonido, iluminación y producción para tu evento
          </p>
          <Button size="lg" className="mt-8">
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero;
