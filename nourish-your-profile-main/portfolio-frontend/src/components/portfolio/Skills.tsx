"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cloud, Code, Database, GitBranch, Globe, Monitor, Smartphone } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      color: "emerald",
      skills: ["React", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: Code,
      color: "green",
      skills: ["Node.js", "Laravel", "Spring Boot", "PHP", "Python", "Express.js"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "teal",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "NoSQL", "SQL"],
    },
    {
      title: "Mobile & Desktop",
      icon: Smartphone,
      color: "emerald",
      skills: ["Flutter", "React Native", "Dart"],
    },
    {
      title: "Artificial Intelligence",
      icon: Brain,
      color: "green",
      skills: [
        "Machine Learning",
        "NLP",
        "Computer Vision",
        "TensorFlow",
        "PyTorch",
        "scikit-learn",
        "spaCy",
        "OpenCV",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "teal",
      skills: ["AWS", "Azure", "Docker", "Git", "CI/CD"],
    },
    {
      title: "Methodologies",
      icon: GitBranch,
      color: "emerald",
      skills: ["Agile", "Scrum", "JIRA", "Git", "GitHub"],
    },
    {
      title: "Programming Languages",
      icon: Globe,
      color: "green",
      skills: ["Python", "JavaScript", "TypeScript", "PHP", "Java", "Dart", "SQL"],
    },
  ]

  const certifications = [
    "Code2Create Hackathon - 3rd Place",
    "IEEE CS Chapter Member",
    "Google Developer Student Club (GDSC) Member",
  ]

  return (
    <section
      id="skills"
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">My technical skills and areas of expertise</p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group backdrop-blur-md bg-emerald-500/5 border border-emerald-400/10 hover:border-emerald-400/30 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <category.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs bg-slate-800/50 text-slate-300 hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors duration-300 border border-emerald-400/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skill Level Indicators */}
          <Card className="backdrop-blur-md bg-emerald-500/5 border border-emerald-400/10">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center">
                <Code className="mr-3 h-6 w-6 text-emerald-400" />
                Expertise Level
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { skill: "Web Development", level: 90 },
                { skill: "Artificial Intelligence", level: 80 },
                { skill: "Databases", level: 85 },
                { skill: "Agile Methodologies", level: 75 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-white">{item.skill}</span>
                    <span className="text-sm text-slate-300">{item.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-emerald-400 to-green-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="backdrop-blur-md bg-emerald-500/5 border border-emerald-400/10">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center">
                <GitBranch className="mr-3 h-6 w-6 text-emerald-400" />
                Achievements & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">{cert}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-emerald-500/10 rounded-lg border border-emerald-400/20">
                <p className="text-sm text-white font-medium mb-2">Always Learning</p>
                <p className="text-sm text-slate-300">
                  Passionate about new technologies, I continue to train regularly to stay up-to-date with the latest innovations in the field.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Skills