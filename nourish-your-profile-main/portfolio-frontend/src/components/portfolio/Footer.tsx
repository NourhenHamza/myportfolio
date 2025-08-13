"use client"

import { Github, Heart, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-slate-600 via-emerald-700 to-slate-700 border-t border-emerald-300/30 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-300/15 to-green-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-300/15 to-teal-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-200 via-green-200 to-teal-200 bg-clip-text text-transparent">
                Nourhen Hamza
              </span>
            </h3>
            <p className="text-slate-100 leading-relaxed">
              Software engineering student passionate about development and innovative technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="text-slate-100 hover:text-emerald-200 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:nourhenhamzaa@gmail.com"
                className="flex items-center text-slate-100 hover:text-emerald-200 transition-colors duration-300"
              >
                <Mail className="h-4 w-4 mr-2" />
                nourhenhamzaa@gmail.com
              </a>
              <p className="text-slate-100">Manar 1, Tunisia</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-300/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center text-slate-100">
              <span>© {currentYear} Nourhen Hamza. Made with</span>
              <Heart className="h-4 w-4 mx-2 text-emerald-300 animate-pulse" />
              <span>and React</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/NourhenHamza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-100 hover:text-white transition-colors duration-300 p-2 hover:bg-emerald-400/20 rounded-lg border border-emerald-300/40 hover:border-emerald-300/60 bg-slate-500/30 backdrop-blur-sm"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:nourhenhamzaa@gmail.com"
                className="text-slate-100 hover:text-white transition-colors duration-300 p-2 hover:bg-emerald-400/20 rounded-lg border border-emerald-300/40 hover:border-emerald-300/60 bg-slate-500/30 backdrop-blur-sm"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                 href="https://www.linkedin.com/in/nourhen-hamza-004206270/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-100 hover:text-white transition-colors duration-300 p-2 hover:bg-emerald-400/20 rounded-lg border border-emerald-300/40 hover:border-emerald-300/60 bg-slate-500/30 backdrop-blur-sm"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer