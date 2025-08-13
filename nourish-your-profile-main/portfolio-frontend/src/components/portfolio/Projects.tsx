"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, ExternalLink, Eye, Github, MessageSquare } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Skills-Based Matching Web Application",
      description:
        "A matching platform connecting employees with positions based on their skills, developed with the MERN stack.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "JavaScript"],
      icon: Code,
      category: "Web Application",
      features: [
        "Intelligent matching algorithm",
        "User-friendly interface",
        "User profile management",
        "Optimized database",
      ],
    },
    {
      title: "Intelligent Chatbot",
      description:
        "Development of a local chatbot capable of interacting with SQL and NoSQL databases to answer natural language queries.",
      technologies: ["Python", "NLP", "spaCy", "Llama", "SQL", "NoSQL"],
      icon: MessageSquare,
      category: "Artificial Intelligence",
      features: [
        "Natural language processing",
        "Multi-database integration",
        "Contextual responses",
        "Conversational interface",
      ],
    },
    {
      title: "Facial Recognition System",
      description:
        "Development of a facial recognition system to identify or verify individuals in real-time via camera.",
      technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
      icon: Eye,
      category: "Computer Vision",
      features: [
        "Real-time detection",
        "Recognition algorithms",
        "Integrated camera interface",
        "Verification system",
      ],
    },
    {
      title: "License Plate Detection",
      description:
        "Creation of an intelligent system to automatically detect and read license plates from images or videos.",
      technologies: ["Python", "OCR", "Computer Vision", "Image Processing"],
      icon: Database,
      category: "Computer Vision",
      features: ["Automatic detection", "Character recognition", "Image processing", "Video analysis"],
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400/10 to-teal-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-green-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover my technical achievements and innovative projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group backdrop-blur-md bg-emerald-500/5 border border-emerald-400/10 hover:border-emerald-400/30 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
                      <project.icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <Badge
                        variant="outline"
                        className="border-emerald-400/30 text-emerald-300 mb-2 bg-emerald-500/10"
                      >
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300 leading-relaxed">{project.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-center">
                        <span className="text-emerald-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-slate-800/50 text-slate-300 border border-emerald-400/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-emerald-400/30 hover:border-emerald-400 hover:bg-emerald-500/10 text-emerald-300 hover:text-emerald-200 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-emerald-400/30 hover:border-emerald-400 hover:bg-emerald-500/10 text-emerald-300 hover:text-emerald-200 bg-transparent"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-emerald-400/30 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 text-emerald-300 hover:text-emerald-200 bg-transparent"
            onClick={() => window.open("https://github.com/NourhenHamza", "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects