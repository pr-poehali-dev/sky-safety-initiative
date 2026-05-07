import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-[hsl(220,25%,6%)]/95 backdrop-blur-md border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
              <Icon name="Zap" size={16} className="text-white" />
            </div>
            <h1 className="font-orbitron text-xl font-bold text-white">
              Smart<span className="text-orange-500">Com</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="font-geist text-white/80 hover:text-orange-500 transition-colors duration-200 text-sm">
                Услуги
              </a>
              <a href="#ecosystem" className="font-geist text-white/80 hover:text-orange-500 transition-colors duration-200 text-sm">
                Экосистема
              </a>
              <a href="#portfolio" className="font-geist text-white/80 hover:text-orange-500 transition-colors duration-200 text-sm">
                Портфолио
              </a>
              <a href="#faq" className="font-geist text-white/80 hover:text-orange-500 transition-colors duration-200 text-sm">
                FAQ
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-3">
            <Button variant="outline" className="border-orange-500/40 text-orange-400 hover:bg-orange-500/10 hover:text-orange-300 font-geist text-sm bg-transparent">
              Стать партнёром
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-geist border-0 text-sm">
              Рассчитать стоимость
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-500 transition-colors duration-200"
            >
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[hsl(220,25%,6%)]/98 border-t border-orange-500/20">
              <a href="#services" className="block px-3 py-2 font-geist text-white/80 hover:text-orange-500 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Услуги
              </a>
              <a href="#ecosystem" className="block px-3 py-2 font-geist text-white/80 hover:text-orange-500 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Экосистема
              </a>
              <a href="#portfolio" className="block px-3 py-2 font-geist text-white/80 hover:text-orange-500 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Портфолио
              </a>
              <a href="#faq" className="block px-3 py-2 font-geist text-white/80 hover:text-orange-500 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                FAQ
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full border-orange-500/40 text-orange-400 hover:bg-orange-500/10 font-geist bg-transparent">
                  Стать партнёром
                </Button>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-geist border-0">
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
