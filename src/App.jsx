import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Download,
  Menu,
  X,
  Code,
  Database,
  Server,
  Globe
} from 'lucide-react'
import { Button } from './components/ui/button'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark')
    
    // Handle scroll to update active section
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const skills = [
    { name: 'Django REST Framework', icon: <Server className="w-6 h-6" />, level: 95 },
    { name: 'Node.js & Express', icon: <Code className="w-6 h-6" />, level: 90 },
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6" />, level: 88 },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" />, level: 85 },
    { name: 'API Development', icon: <Server className="w-6 h-6" />, level: 92 },
    { name: 'React', icon: <Globe className="w-6 h-6" />, level: 82 }
  ]

  const projects = [
    {
      title: 'Enterprise API Gateway',
      description: 'Scalable microservices architecture with Django REST Framework. Implements authentication, rate limiting, logging, and service orchestration for enterprise applications.',
      technologies: ['Django REST', 'PostgreSQL', 'Redis', 'Docker'],
      github: 'https://github.com/EzekielMisgae/enterprise-api-gateway',
      live: 'https://api-gateway-demo.herokuapp.com'
    },
    {
      title: 'Real-time Data Processing Pipeline',
      description: 'High-performance backend system built with Node.js for processing large datasets. Features real-time analytics, caching, and automated reporting.',
      technologies: ['Node.js', 'MongoDB', 'Redis', 'WebSockets'],
      github: 'https://github.com/EzekielMisgae/realtime-data-pipeline',
      live: 'https://data-pipeline-demo.herokuapp.com'
    },
    {
      title: 'Banking API System',
      description: 'Secure RESTful API for financial transactions with comprehensive authentication, audit logging, and compliance features. Built with Django and PostgreSQL.',
      technologies: ['Django', 'PostgreSQL', 'JWT', 'Celery'],
      github: 'https://github.com/EzekielMisgae/banking-api-system',
      live: 'https://banking-api-demo.herokuapp.com'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gradient"
            >
              Ezekiel M. Alene
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border"
            >
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 px-4 rounded hover:bg-accent transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Backend</span><br />
              <span className="text-gradient">Engineer</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
              Specialized in scalable backend systems, APIs, and database architecture. 
              Full-stack capabilities with a focus on robust server-side solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="accent"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="animate-subtle-glow"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements - more subtle */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-slate-600/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-500/5 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-slate-700/5 rounded-full blur-xl animate-pulse-subtle"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Professional background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Photo Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-1 flex justify-center lg:justify-start"
              >
                <div className="relative">
                  <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 p-1 animate-subtle-glow">
                    <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center relative overflow-hidden">
                      {/* Your profile photo */}
                      <img 
                        src="/profile.png" 
                        alt="Ezekiel M. Alene" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-slate-600/30 rounded-full animate-pulse-subtle"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-slate-600/30 rounded-full animate-bounce-soft"></div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-8"
              >
                <div className="space-y-6">
                  <p className="text-lg text-slate-300 leading-relaxed">
                    I'm <span className="text-slate-100 font-semibold">Ezekiel M. Alene</span>, a passionate Software Engineering graduate from Bahirdar University. 
                    I specialize in backend system architecture with deep expertise in Django REST Framework and Node.js.
                  </p>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    My core focus is building robust APIs, microservices, and database solutions. While I have full-stack 
                    capabilities, my passion lies in creating scalable backend infrastructures that power modern applications.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-xl professional-card"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center">
                        <Code className="w-5 h-5 text-slate-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-100">Education</h3>
                    </div>
                    <p className="text-slate-300 font-medium">Software Engineering</p>
                    <p className="text-sm text-slate-400">Bahirdar University</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-xl professional-card"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center">
                        <Server className="w-5 h-5 text-slate-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-100">Specialization</h3>
                    </div>
                    <p className="text-slate-300 font-medium">Backend Architecture & APIs</p>
                    <p className="text-sm text-slate-400">Django REST • Node.js • Microservices</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-xl professional-card"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-slate-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-100">Location</h3>
                    </div>
                    <p className="text-slate-300 font-medium">Addis Ababa, Ethiopia</p>
                    <p className="text-sm text-slate-400">Available for remote work</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-xl professional-card"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center">
                        <Database className="w-5 h-5 text-slate-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-100">Focus Areas</h3>
                    </div>
                    <p className="text-slate-300 font-medium">System Architecture</p>
                    <p className="text-sm text-slate-400">APIs • Databases • Performance</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-900/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Backend Expertise</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Core technologies and frameworks for robust backend solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl professional-card group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-slate-600/30 rounded-xl flex items-center justify-center text-slate-300 group-hover:text-slate-100 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-slate-50 transition-colors">{skill.name}</h3>
                </div>
                
                {/* Progress bar */}
                <div className="mb-4">
                  <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-slate-500 to-slate-400 h-3 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse-subtle"></div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-sm text-slate-400">Proficiency</p>
                  <p className="text-sm font-bold text-slate-300">{skill.level}%</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative overflow-hidden bg-muted/30">
        {/* Professional background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-slate-800/20 to-slate-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.08),transparent_50%)]"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Backend-focused solutions showcasing system architecture and API development expertise
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass p-8 rounded-2xl professional-card h-full flex flex-col relative overflow-hidden">
                  {/* Project number indicator */}
                  <div className="absolute top-6 right-6 w-8 h-8 bg-slate-600/30 rounded-full flex items-center justify-center text-slate-400 text-sm font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Project icon/category */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-600/50 to-slate-700/50 rounded-xl flex items-center justify-center mb-4">
                      <Server className="w-6 h-6 text-slate-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-slate-50 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1.5 bg-slate-700/50 text-slate-300 rounded-lg font-medium border border-slate-600/30 hover:bg-slate-600/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 mt-auto pt-4 border-t border-slate-700/30">
                    <Button variant="minimal" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Interested in My Work?</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                These projects represent my approach to solving complex backend challenges. 
                I'm always excited to discuss architecture decisions and technical implementations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" onClick={() => scrollToSection('contact')}>
                  Let's Discuss Your Project
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/EzekielMisgae" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View All Projects
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss your next project or opportunity
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-lg"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Email</h3>
                  </div>
                  <p className="text-muted-foreground">ezkielmisgae@gmail.com</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-lg"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Phone</h3>
                  </div>
                  <p className="text-muted-foreground">+251975325354</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-lg"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Location</h3>
                  </div>
                  <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-lg"
              >
                <h3 className="text-2xl font-semibold mb-6">Let's Build Something</h3>
                <p className="text-slate-400 mb-8">
                  I'm always interested in challenging backend projects and system architecture opportunities. 
                  Whether you need robust APIs, database optimization, or scalable microservices, 
                  let's discuss how we can create powerful solutions together.
                </p>
                
                <div className="space-y-4">
                  <Button variant="accent" size="lg" className="w-full animate-subtle-glow" asChild>
                    <a href="mailto:ezkielmisgae@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <a href="/Ezekiel_Alene_Resume.txt" download="Ezekiel_Alene_Resume.txt">
                      <Download className="w-5 h-5 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </div>

                <div className="flex justify-center space-x-6 mt-8 pt-8 border-t border-border">
                  <a
                    href="https://github.com/EzekielMisgae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/ezekielmisgae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
        </a>
      </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Ezekiel M. Alene. All rights reserved.
        </p>
      </div>
      </footer>
    </div>
  )
}

export default App