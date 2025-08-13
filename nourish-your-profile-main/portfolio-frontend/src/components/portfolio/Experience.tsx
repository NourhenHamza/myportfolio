"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Calendar, MapPin } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Web & AI Developer Internship",
      company: "INVEEP",
      location: "Lac 2, Tunisia",
      period: "Summer 2024 - 2025",
      type: "Internship",
      description: [
        "Contributed to developing a management platform for the business-university-student ecosystem (internships, defenses, post-internship tracking)",
        "Participated in organizing university events and implemented public tests with anti-cheating facial recognition system",
        "Full-stack web applications (MERN) for automated notifications and email sending",
      ],
      technologies: ["MERN Stack", "Facial Recognition", "MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "Web Developer Internship",
      company: "NOVINANET",
      location: "Monastir, Tunisia",
      period: "Summer 2023 - 2024",
      type: "Internship",
      description: [
        "Developed a delivery web application with Laravel (PHP, MVC)",
        "Managed orders, delivery tracking, and responsive user interface",
        "Implemented authentication, MySQL database and views with Blade",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Blade", "MVC", "CSS"],
    },
  ]

  const education = [
    {
      title: "2nd Year Software Engineering",
      institution: "Faculty of Sciences of Tunis",
      period: "2024 - 2025",
      type: "Education",
      description: "Advanced training in software engineering, web development, and emerging technologies",
    },
    {
      title: "Integrated Preparatory Cycle",
      institution: "Faculty of Sciences of Tunis",
      period: "2021 - 2023",
      type: "Education",
      description: "Fundamental scientific training in mathematics, physics and computer science",
    },
    {
      title: "Baccalaureate in Experimental Sciences",
      institution: "Ibn Sina High School Mahdia",
      period: "2020 - 2021",
      type: "Diploma",
      description: "With highest honors",
      badge: "Highest Honors",
    },
  ]

  return (
    <section
      id="experience"
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
              Experience & Education
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">My professional and academic journey</p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
            <Building className="mr-3 h-6 w-6 text-emerald-400" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-emerald-500/5 border border-emerald-400/10 hover:border-emerald-400/30 transition-all duration-300 hover:shadow-2xl"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-slate-300">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1 text-slate-300">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-slate-300 flex items-start">
                        <span className="text-emerald-400 mr-2">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-emerald-400/30 text-emerald-300 bg-emerald-500/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
            <Calendar className="mr-3 h-6 w-6 text-emerald-400" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="backdrop-blur-md bg-emerald-500/5 border border-emerald-400/10 hover:border-emerald-400/30 transition-all duration-300 hover:shadow-2xl"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-white">{edu.title}</CardTitle>
                      <div className="flex items-center gap-1 mt-2 text-slate-300">
                        <Building className="h-4 w-4" />
                        <span>{edu.institution}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1 text-slate-300">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                      >
                        {edu.type}
                      </Badge>
                      {edu.badge && (
                        <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                          {edu.badge}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience