"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    // Ouvrir l'URL de téléchargement du CV dans un nouvel onglet
    window.open('https://myportfolio-osjl.onrender.com/api/download-cv', '_blank')
  }

  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Modern animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-green-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-lime-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Modern Profile Card */}
          <div className="relative mt-16 mb-8">
            <div className="w-48 h-48 mx-auto relative group">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-slate-900"></div>
              </div>

              {/* Profile image */}
              <div className="absolute inset-2 rounded-full overflow-hidden backdrop-blur-sm bg-emerald-500/10 border border-emerald-400/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/lovable-uploads/f8f32ae7-e759-4211-adbe-642ddb6aefa6.png"
                  alt="Nourhen Hamza"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Modern Typography */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-white via-emerald-100 to-green-100 bg-clip-text text-transparent drop-shadow-sm">
                Nourhen
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                Hamza
              </span>
            </h1>

            <div className="relative">
              <h2 className="text-lg md:text-xl font-medium text-slate-300 tracking-wide">
                Software Engineering Student
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
            </div>
          </div>

          {/* Modern Description Card */}
          <div className="mb-8">
            <div className="backdrop-blur-md bg-emerald-500/5 border border-emerald-400/10 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
Passionate about full-stack web development and AI, seeking opportunities to strengthen my skills by building innovative projects that incorporate cutting-edge technologies like conversational agents and intelligent systems.
              </p>
            </div>
          </div>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white border-0 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail className="mr-3 h-5 w-5 relative z-10" />
              <span className="relative z-10">Contact Me</span>
            </Button>

            <Button
              onClick={handleDownloadCV}
              variant="outline"
              size="lg"
              className="group backdrop-blur-md bg-emerald-500/5 border-emerald-400/20 hover:bg-emerald-500/10 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-emerald-400/40"
            >
              <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </Button>
          </div>

          {/* Modern Social Links - Fixed visibility */}
          <div className="flex justify-center space-x-8 mb-8 relative z-20">
            {[
              { icon: Github, href: "https://github.com/NourhenHamza", label: "GitHub" },
              { icon: Mail, href: "mailto:nourhenhamzaa@gmail.com", label: "Email" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/nourhen-hamza-004206270/", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative p-4 backdrop-blur-md bg-emerald-500/20 border-2 border-emerald-400/30 rounded-full hover:bg-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-emerald-500/20"
                aria-label={label}
                style={{
                  minWidth: "64px",
                  minHeight: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon className="h-8 w-8 text-emerald-200 group-hover:text-white transition-colors duration-300 relative z-10" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/30 to-green-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-xs text-slate-400 font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-emerald-400/30 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ArrowDown className="h-4 w-4 text-slate-400" />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero

