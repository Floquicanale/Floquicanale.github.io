import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Github, Linkedin, Mail, Download, MapPin, Calendar } from "lucide-react";

// Import your images
import profileImage from "../assets/profile.jpg";

const Index = () => {
  const [aboutText, setAboutText] = useState("");

  useEffect(() => {
    // Replace this with your actual about text or load from file
    const sampleAboutText = `Soy una Ingeniera Biomédica apasionada por la intersección entre tecnología y salud. Mi experiencia se centra en el desarrollo de software médico, procesamiento de señales biomédicas y aplicaciones de inteligencia artificial en el ámbito sanitario.

A lo largo de mi carrera académica y profesional, he trabajado en diversos proyectos que van desde visualizadores de imágenes médicas hasta dispositivos de monitoreo no invasivo. Mi objetivo es contribuir al avance de la tecnología médica para mejorar la calidad de vida de las personas.

Tengo experiencia sólida en lenguajes como Python, C# y Java, así como en frameworks modernos como React y .NET. Me apasiona el aprendizaje continuo y estoy siempre buscando nuevos desafíos que me permitan crecer profesionalmente.`;
    
    setAboutText(sampleAboutText);
  }, []);

  const skills = [
    { category: "Lenguajes de Programación", items: ["Python", "C#", "Java", "JavaScript", "TypeScript"] },
    { category: "Frameworks & Librerías", items: [".NET", "React", "PyQt5", "Scikit-learn", "OpenCV"] },
    { category: "Herramientas & Tecnologías", items: ["AWS", "Git", "PostgreSQL", "Unity", "Arduino"] },
    { category: "Especialidades", items: ["Bioinformática", "ML en salud", "Procesamiento de señales", "Imágenes médicas"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Florencia Canale
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Bioengineer | Software Developer | AI & Data in Healthcare
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Proyectos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contactar
            </Button>
          </div>
          <div className="flex justify-center gap-4">
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
              <Github className="w-5 h-5" />
            </Button>
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Sobre mí</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {aboutText.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge className="bg-primary/10 text-primary">
                <MapPin className="w-3 h-3 mr-1" />
                Argentina
              </Badge>
              <Badge className="bg-secondary/10 text-secondary">
                <Calendar className="w-3 h-3 mr-1" />
                Disponible para trabajar
              </Badge>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-custom-lg">
                <img 
                  src={profileImage} 
                  alt="Florencia Canale" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <Download className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-neutral/30">
        <ProjectsSection />
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Habilidades Técnicas</h2>
          <p className="text-muted-foreground text-lg">
            Tecnologías y herramientas con las que trabajo
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="bg-gradient-card border-neutral/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-card">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">¡Trabajemos Juntos!</h2>
            <p className="text-muted-foreground text-lg">
              Estoy disponible para nuevas oportunidades. ¡Contáctame!
            </p>
          </div>
          
          <Card className="shadow-custom-lg">
            <CardContent className="p-8">
              <form action="https://formspree.io/f/xnnplgyg" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nombre
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea 
                    name="message" 
                    required 
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto o oportunidad..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 transition-opacity px-8"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-foreground text-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm opacity-80">
            © 2024 Florencia Canale. Construido con React, TypeScript y Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
