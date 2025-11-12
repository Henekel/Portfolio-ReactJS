import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Download, MapPin, Calendar } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import Image from "next/image"
import Link from "next/link"


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50/30 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="text-lg md:text-xl lg:text-2xl font-bold text-lg sm:text-xl bg-gradient-to-r from-neutral-900 to-blue-600 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
                Henok Rezene
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="text-lg md:text-xl lg:text-2xl transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#projects" className="text-lg md:text-xl lg:text-2xl transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#contact" className="text-lg md:text-xl lg:text-2xl transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="text-lg md:text-xl lg:text-2xl hidden sm:flex bg-transparent">
              <a
                href="/resume.pdf"
                download
                className="flex items-center"
              >
              <Download className="mr-2 h-4 w-4" />
              Resume
              </a>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-16 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-neutral-900 to-blue-600 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
                Hi, I'm Henok Rezene
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl lg:text-3xl">
                Junior Developer & Computer Science Graduate
              </p>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl max-w-[600px] text-muted-foreground md:text-lg mx-auto lg:mx-0">
              Recent Computer Science graduate passionate about building innovative web applications. Eager to apply my
              academic knowledge and growing practical skills to create meaningful digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" asChild className="text-lg md:text-xl lg:text-2xl w-full sm:w-auto">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg md:text-xl lg:text-2xl w-full sm:w-auto bg-transparent">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
              <Button variant="ghost" size="icon" className="w-14 h-14 p-0" asChild>
                <Link href="https://github.com/Henekel" target="_blank">
                  <Github className="!h-8 !w-8" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="w-14 h-14 p-0" asChild>
                <Link href="https://www.linkedin.com/in/henok-rezene-16bab8116/" target="_blank">
                  <Linkedin className="!h-8 !w-8" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="w-14 h-14 p-0" asChild>
                <Link href="mailto:henokrezene95@gmail.com" aria-label="Send Email">
                  <Mail className="!h-8 !w-8" />
                  
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse z-0"></div>
              <Image
                src="/henok.jpg"
                alt="Henok Rezene"
                width={300}
                height={300}
                className="relative rounded-full border-4 border-background shadow-2xl w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-16 md:py-24 bg-gradient-to-r from-neutral-50/50 to-blue-50/50 dark:from-neutral-900/50 dark:to-blue-900/50"
      >
        <div className="absolute inset-0 bg-grid-neutral-100 dark:bg-grid-neutral-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-lg md:text-xl lg:text-2xl text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl mb-6 bg-gradient-to-r from-neutral-900 to-blue-600 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground md:text-lg mb-12 max-w-3xl mx-auto">
              I'm a recent Computer Science graduate with a strong foundation in software development and a passion for
              learning new technologies. I enjoy solving complex problems and building user-friendly applications.
            </p>
            <div className="grid gap-8 md:grid-cols-2 text-left max-w-4xl mx-auto">
              <div className="space-y-6 bg-white/50 dark:bg-neutral-800/50 p-6 rounded-lg backdrop-blur-sm border border-white/20 dark:border-neutral-700/50">
                <h3 className="text-lg md:text-xl lg:text-2xl text-xl font-semibold bg-gradient-to-r from-neutral-900 to-blue-600 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
                  What I Do
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="text-lg md:text-xl lg:text-2xl flex items-start">
                    <span className="text-blue-600 dark:text-yellow-400 mr-2">•</span>
                    Frontend Development (ReactJS, Flutter, JavaScript, HTML/CSS)
                  </li>
                  <li className="text-lg md:text-xl lg:text-2xl flex items-start">
                    <span className="text-blue-600 dark:text-yellow-400 mr-2">•</span>
                    Backend Development (Node.js, Python, Java)
                  </li>
                  <li className="text-lg md:text-xl lg:text-2xl flex items-start">
                    <span className="text-blue-600 dark:text-yellow-400 mr-2">•</span>
                    Frameworks and Libraries(Spring Boot, ReactJS, VueJS, JUnit)
                  </li>
                  <li className="text-lg md:text-xl lg:text-2xl flex items-start">
                    <span className="text-blue-600 dark:text-yellow-400 mr-2">•</span>
                    Database Technologies (MySQL, MongoDB)
                  </li>
                  <li className="text-lg md:text-xl lg:text-2xl flex items-start">
                    <span className="text-blue-600 dark:text-yellow-400 mr-2">•</span>
                    DevOps & Tools(Git, GitHub, Docker, Linux)
                  </li>
                </ul>
              </div>
              <div className="space-y-6 bg-white/50 dark:bg-neutral-800/50 p-6 rounded-lg backdrop-blur-sm border border-white/20 dark:border-neutral-700/50">
                <h3 className="text-lg md:text-xl lg:text-2xl text-xl font-semibold bg-gradient-to-r from-neutral-900 to-blue-600 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
                  Education & Experience
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-lg md:text-xl lg:text-2xl font-medium">B.S. Computer Science</p>
                      <p className="text-lg md:text-xl lg:text-2xl text-sm text-muted-foreground">2025 Graduate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-lg md:text-xl lg:text-2xl font-medium">B.S. of Arts in Geography</p>
                      <p className="text-lg md:text-xl lg:text-2xl text-sm text-muted-foreground">2010 Graduate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-lg md:text-xl lg:text-2xl font-medium">Graduated Interpreter</p>
                      <p className="text-lg md:text-xl lg:text-2xl text-sm text-muted-foreground">2020 Graduate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-lg md:text-xl lg:text-2xl font-medium">Open to Opportunities</p>
                      <p className="text-lg md:text-xl lg:text-2xl text-sm text-muted-foreground">Remote & On-site positions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container py-16 md:py-24 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-400/10 dark:bg-green-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-400/10 dark:bg-yellow-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl mb-6 bg-gradient-to-r from-neutral-900 to-blue-600 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground md:text-lg mb-12 max-w-3xl mx-auto">
            Here are some of the technologies I work with regularly
          </p>
          <div className="text-lg md:text-xl lg:text-l flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "ReactJS",
              "VueJS",
              "HTML/CSS",
              "Node.js",
              "Python",
              "Java",
              "C#",
              "Spring Boot",
              "MySQL",
              "MongoDB",
              "Git",
              "GitHub",
              "Docker",
              "Tailwind CSS",
              "Bootstrap",
              "REST APIs",
              "Responsive Design",
              "Problem Solving",
              "Team Collaboration",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-base md:text-lg lg:text-xl py-3 px-6 hover:bg-primary hover:text-primary-foreground transition-colors border border-yellow-400/20"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 md:py-24 bg-gradient-to-l from-neutral-50/50 to-purple-50/50 dark:from-neutral-900/50 dark:to-purple-900/50 relative"
      >
        <div className="absolute inset-0 bg-grid-neutral-100 dark:bg-grid-neutral-800 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="container relative">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-lg md:text-xl lg:text-2xl text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl mb-6 bg-gradient-to-r from-neutral-900 to-blue-600 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground md:text-lg max-w-3xl mx-auto">
                Some of my recent work that I'm proud of
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              <Card className="group hover:shadow-lg transition-shadow border border-white/20 dark:border-neutral-700/50 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="E-commerce Platform"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg md:text-xl lg:text-2xl mb-2 bg-gradient-to-r from-neutral-900 to-blue-600 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
                    Scool Management System
                  </CardTitle>
                  <CardDescription className="text-lg md:text-xl lg:text-l mb-4">
                    A comprehensive web-based School Management System designed to streamline administrative operations for educational institutions. The system supports user roles such as Admin,
                    Teachers, and Students. The backend is built with Spring Boot using MVC architecture, and the frontend is rendered using Thymeleaf templates 
                    enhanced with JavaScript interactivity for a smooth user experience.
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <Badge variant="outline" className="text-lg md:text-xl lg:text-l text-xs border-blue-600/30 dark:border-yellow-400/30">
                      Spring Boot
                    </Badge>
                    <Badge variant="outline" className="text-lg md:text-xl lg:text-l text-xs border-blue-600/30 dark:border-yellow-400/30">
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="text-lg md:text-xl lg:text-l text-xs border-blue-600/30 dark:border-yellow-400/30">
                      Thymeleaf
                    </Badge>
                    <Badge variant="outline" className="text-lg md:text-xl lg:text-l text-xs border-blue-600/30 dark:border-yellow-400/30">
                      MySQL
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com/Henekel/School-Management-System" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="https://example.com" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow border border-white/20 dark:border-neutral-700/50 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Task Management App"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg md:text-xl lg:text-2xl mb-2 bg-gradient-to-r from-neutral-900 to-blue-600 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
                    Hotel Management System
                  </CardTitle>
                  <CardDescription className="text-lg md:text-xl lg:text-l mb-4">
                    A collaborative hotel management application developed during my studies. Includes user registration,
                    room booking, calceling bookings and rooms etc.
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <Badge variant="outline" className="text-lg md:text-xl lg:text-l text-xs border-blue-600/30 dark:border-yellow-400/30">
                      JavaFX
                    </Badge>
                    <Badge variant="outline" className="text-lg md:text-xl lg:text-l text-xs border-blue-600/30 dark:border-yellow-400/30">
                      Java
                    </Badge>
                    <Badge variant="outline" className="text-lg md:text-xl lg:text-l text-xs border-blue-600/30 dark:border-yellow-400/30">
                      MySQL
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com/Henekel/Hotel-Management-System" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="https://example.com" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow border border-white/20 dark:border-neutral-700/50 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Weather App"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg md:text-xl lg:text-2xl mb-2 bg-gradient-to-r from-neutral-900 to-blue-600 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
                    Weather App
                  </CardTitle>
                  <CardDescription className="text-lg md:text-xl lg:text-l mb-4">
                    Developed a Flutter mobile app integrating OpenWeatherMap API to show real-time weather by location.
                    Implemented multi-screen navigation, 5-day/3-hour forecasts, and weather-specific icons.
                    Enhanced user experience with dynamic visuals, clean UI design, and smooth transitions.
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <Badge variant="outline" className="text-lg md:text-xl lg:text-l text-xs border-blue-600/30 dark:border-yellow-400/30">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="text-lg md:text-xl lg:text-l text-xs border-blue-600/30 dark:border-yellow-400/30">
                      React
                    </Badge>
                    <Badge variant="outline" className="text-lg md:text-xl lg:text-l text-xs border-blue-600/30 dark:border-yellow-400/30">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="text-lg md:text-xl lg:text-l text-xs border-blue-600/30 dark:border-yellow-400/30">
                      Talwind CSS
                    </Badge>
                    </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com/Henekel/Portfolio-ReactJS" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="https://example.com" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="container py-16 md:py-24 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-lg md:text-xl lg:text-4xl text-l font-bold tracking-tighter md:text-3xl lg:text-4xl mb-6 bg-gradient-to-r from-neutral-900 to-blue-600 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground md:text-lg mb-12 max-w-3xl mx-auto">
            I'm actively seeking junior developer opportunities and would love to contribute to innovative projects.
            Let's connect and discuss how I can add value to your team!
          </p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border border-white/20 dark:border-neutral-700/50 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm">
              <Mail className="h-8 w-8 mx-auto mb-4 text-blue-600 dark:text-yellow-400" />
              <h3 className="font-semibold mb-2 bg-gradient-to-r from-neutral-900 to-blue-600 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
                Email
              </h3>
              <p className="text-lg md:text-xl lg:text-l text-sm text-muted-foreground mb-4">henokrezene95@gmail.com</p>
              <Button variant="outline" size="sm" asChild>
                <Link className="text-lg md:text-xl lg:text-l" href="mailto:alex@example.com">Send Email</Link>
              </Button>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border border-white/20 dark:border-neutral-700/50 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm">
              <Linkedin className="h-8 w-8 mx-auto mb-4 text-blue-600 dark:text-yellow-400" />
              <h3 className="font-semibold mb-2 bg-gradient-to-r from-neutral-900 to-blue-600 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
                LinkedIn
              </h3>
              <p className="text-lg md:text-xl lg:text-l text-sm text-muted-foreground mb-4">Connect with me</p>
              <Button variant="outline" size="sm" asChild>
                <Link className="text-lg md:text-xl lg:text-l" href="https://linkedin.com" target="_blank">
                  View Profile
                </Link>
              </Button>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border border-white/20 dark:border-neutral-700/50 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm">
              <Github className="h-8 w-8 mx-auto mb-4 text-blue-600 dark:text-yellow-400" />
              <h3 className="font-semibold mb-2 bg-gradient-to-r from-neutral-900 to-blue-600 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent">
                GitHub
              </h3>
              <p className="text-lg md:text-xl lg:text-l text-sm text-muted-foreground mb-4">Check out my code</p>
              <Button variant="outline" size="sm" asChild>
                <Link className="text-lg md:text-xl lg:text-l text-lg md:text-xl lg:text-l" href="https://github.com/Henekel" target="_blank">
                  View Repos
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 border-white/20 dark:border-neutral-700/50">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <p className="text-lg md:text-xl lg:text-l text-center text-sm leading-loose text-muted-foreground md:text-left">
                © 2025 Henok Rezene. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="w-14 h-14 p-0" asChild>
                <Link href="https://github.com/Henekel" target="_blank">
                  <Github className="!h-8 !w-8" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>

              <Button variant="ghost" size="icon" className="w-14 h-14 p-0" asChild>
                <Link href="https://www.linkedin.com/in/henok-rezene-16bab8116/" target="_blank">
                  <Linkedin className="!h-8 !w-8" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="w-14 h-14 p-0" asChild>
                <Link href="mailto:henokrezene95@gmail.com">
                  <Mail className="!h-8 !w-8" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
