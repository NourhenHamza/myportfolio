"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://myportfolio-osjl.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        toast({
          title: "Error",
          description: result.error || "An error occurred while sending your message.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not connect to the server. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nourhenhamzaa@gmail.com",
      href: "mailto:nourhenhamzaa@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "23299577",
      href: "tel:23299577",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Manar 1, Tunisia",
      href: "#",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/NourhenHamza",
      href: "https://github.com/NourhenHamza",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-green-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/10 to-teal-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Feel free to contact me to discuss opportunities or projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's stay in touch</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always open to new opportunities, collaborations, and discussions about innovative projects. Whether it's for an internship, a project, or just to talk about technology, don't hesitate to contact me.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group backdrop-blur-md bg-emerald-500/5 border border-emerald-400/10 hover:border-emerald-400/30 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-4">
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4"
                    >
                      <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
                        <info.icon className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Follow me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/NourhenHamza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-emerald-500/10 rounded-lg hover:bg-emerald-500/20 transition-colors duration-300 border border-emerald-400/20 hover:border-emerald-400/40"
                >
                  <Github className="h-6 w-6 text-emerald-400" />
                </a>
                <a
                  href="mailto:nourhenhamzaa@gmail.com"
                  className="p-3 bg-emerald-500/10 rounded-lg hover:bg-emerald-500/20 transition-colors duration-300 border border-emerald-400/20 hover:border-emerald-400/40"
                >
                  <Mail className="h-6 w-6 text-emerald-400" />
                </a>
                <a
                   href="https://www.linkedin.com/in/nourhen-hamza-004206270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-emerald-500/10 rounded-lg hover:bg-emerald-500/20 transition-colors duration-300 border border-emerald-400/20 hover:border-emerald-400/40"
                >
                  <Linkedin className="h-6 w-6 text-emerald-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="backdrop-blur-md bg-emerald-500/5 border border-emerald-400/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-slate-800/50 border-emerald-400/20 focus:border-emerald-400 text-white placeholder:text-slate-400"
                      placeholder="Your name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-800/50 border-emerald-400/20 focus:border-emerald-400 text-white placeholder:text-slate-400"
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-slate-800/50 border-emerald-400/20 focus:border-emerald-400 text-white placeholder:text-slate-400"
                    placeholder="Message subject"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="bg-slate-800/50 border-emerald-400/20 focus:border-emerald-400 resize-none text-white placeholder:text-slate-400"
                    placeholder="Your message..."
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact