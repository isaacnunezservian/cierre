"use client"

import Link from "next/link"
import { Footer } from "@/components/footer"
import { PoweredByBadge } from "@/components/powered-by-badge"
import { TypingHero } from "@/components/typing-hero"
import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import {ContactForm} from "@/mycomponents/contact-form"
import { useState } from "react"



export default function Home() {
  const [formu, setformu] = useState(false)
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "+5491170061908"
    const message = "👋 ¡Hola! ¿En qué puedo ayudarte con tu tienda online?"
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
        {/* Simple gradient background */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-emerald-950"></div>

        {/* Content container */}
        <div className="relative z-10">
          {/* Hero section with better contrast */}
          <section className="flex flex-col items-center justify-center min-h-[100vh] px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="mb-8">
                <PoweredByBadge />
              </div>

              {/* Enhanced hero with better contrast */}
              <div className="relative">
                {/* Background for better contrast in light mode */}
                <div className="absolute inset-0 bg-background/80 dark:bg-transparent rounded-2xl blur-3xl"></div>
                <div className="relative z-10">
                  <TypingHero />
                </div>
              </div>

              <div className="h-px w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto my-8"></div>

              {/* Enhanced description with better contrast */}
              <div className="relative">
                <div className="absolute inset-0 bg-background/60 dark:bg-transparent rounded-xl blur-2xl"></div>
                <p className="relative z-10 text-gray-300 max-w-xl mx-auto font-medium">
                  Formá tu propio canal de ventas antes de las fiestas. <br /> Por fuera de las <span className="text-emerald-500">comisiones</span> de Mercado Libre
                </p>
              </div>

              {/* Button section - Left to Right order */}
              <button className="pt-8"
              onClick={() => setformu(true)}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div
                    className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium text-base hover:from-emerald-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                  >
                    <span className="flex items-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>Agendá una llamada gratis</span>
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </section>
          {/* Expertise section */}
          {/* <ExpertiseSection /> */}

          {/* Services viewport section */}

          {/* Simple pricing section */}
          <section className="w-full py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-emerald-950/20"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-600/20 border border-emerald-500/30 rounded-3xl p-8 backdrop-blur-sm">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  🚀 Transformá tu negocio
                </h2>
                
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg mb-6 inline-block">
                  <span className="flex items-center space-x-2">
                    <span className="text-yellow-200">⚡</span>
                    <span>OFERTA ESPECIAL - 80% OFF</span>
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-gray-400 text-xl line-through">
                    Precio Regular: $1.500.000
                  </span>
                </div>

                <div className="text-4xl md:text-5xl font-bold text-emerald-300 mb-6">
                  $ ARS 299.000
                </div>

                <p className="text-emerald-200 text-lg mb-8">
                  ¡Ahorrás ARS 1.201.000!
                </p>

                <button
                  onClick={() => setformu(true)}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-bold text-xl hover:from-emerald-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105"
                >
                  🚀 ¡AGENDA UNA LLAMADA GRATIS!
                </button>
                
                <p className="text-emerald-300 text-sm mt-4">
                  Desarrollamos tu tienda y nos pagás solo si estás conforme
                </p>
              </div>
            </div>
          </section>

          <Footer />
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-[50px] h-[50px] bg-emerald-600 text-white rounded-full shadow-sm transition-all duration-800 hover:scale-110 group"
          style={{
            backgroundColor: 'rgba(34, 197, 94, 0.9)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-current"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690"/>
          </svg>
          
          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping"></div>
        </button>

        <ContactForm 
        isOpen={formu} 
        onClose={() => setformu(false)} 
      />
      </main>
    </>
  )
}
