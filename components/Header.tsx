import Link from "next/link"
import { Button } from "@/components/ui/button"
import {ModeToggle} from "@/components/mode-toggle";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm flex justify-center">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Camaleon
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="#services" className="text-sm hover:text-primary">
            Servicios
          </Link>
          <Link href="#gallery" className="text-sm hover:text-primary">
            Galería
          </Link>
          <Link href="#contact" className="text-sm hover:text-primary">
            Contáctenos
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button>
            <Link href="#contact">Contáctenos</Link></Button>
        </div>
      </div>
    </header>
  )
}

export default Header;
