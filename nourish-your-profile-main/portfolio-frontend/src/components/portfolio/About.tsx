"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Target, Users } from "lucide-react"

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expertise in React, Angular, Node.js, Laravel and Spring Boot",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Projects in machine learning, NLP and facial recognition",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Team experience with Agile and Scrum methodologies",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Always seeking new technologies and challenges",
    },
  ]

  return (
    <section
      id="about"
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover my journey and passion for software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Who am I?</h3>
            <div className="space-y-4 text-slate-300">
              <p>
                I am a software engineering student, currently in my 2nd year at the Faculty of Sciences in Tunis. My passion for web and software development has been driving me since the beginning of my studies.
              </p>
              <p>
                Curious, serious, and motivated to learn, I particularly enjoy dynamic and collaborative environments where I can contribute to innovative projects while developing my technical skills.
              </p>
              <p>
                My goal is to continue exploring emerging technologies, particularly in the fields of artificial intelligence and machine learning, to create impactful and innovative solutions.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Languages</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">
                  French - Fluent
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">
                  English - Fluent
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30">
                  Arabic - Native
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-emerald-500/5 border border-emerald-400/10 hover:border-emerald-400/30 transition-all duration-300 hover:shadow-2xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-500/10 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-white">{highlight.title}</h4>
                      <p className="text-slate-300">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About