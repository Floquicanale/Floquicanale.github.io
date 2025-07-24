import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Switch } from "@/components/ui/switch";
import { Github, Linkedin, Mail, Download, MapPin, Calendar, FileText} from "lucide-react";

// Import your images
import profileImage from "../assets/profile.jpg";

const Index = () => {
  const [aboutText, setAboutText] = useState("");
  const [language, setLanguage] = useState<"es" | "en">("es");

  useEffect(() => {

    const aboutTexts = { es : `Hola, soy Florencia Canale — aunque la mayoría me conoce como Floqui. Nací en San Martín de los Andes pero actualmente vivo en Buenos Aires. Soy Bioingeniera recientemente recibida del Instituto Tecnológico de Buenos Aires y espero con ansias iniciar esta nueva etapa de mi vida profesional. 

A lo largo de toda mi carrera en el ITBA desarrollé una gran pasión por los proyectos de innovación en tecnología médica y, en cada oportunidad que se presentó, aproveche esa motivación para crear productos innovadores con la ayuda de la electrónica, programación, aprendizaje automático y, por supuesto, amigos.

Mi motivación es crear tecnologías que impacten en la vida de las personas, que los ayuden en su día a día y que nos acerque, como sociedad, a una versión más humana del futuro. Hoy en día, estoy en búsqueda de un oportunidad laboral que me permita trabajar en equipo para resolver problemas en el ámbito de la salud mediante el desarrollo de software.

Tengo experiencia sólida en lenguajes como Python, C# y Java, así como en frameworks modernos como React y .NET. Me apasiona el aprendizaje continuo y estoy siempre en busca de nuevos desafíos que me permitan crecer.`,
  en: `Hello, I'm Florencia Canale—although most people know me as Floqui. I was born in San Martín de los Andes but currently live in Buenos Aires. I recently graduated as a Bioengineer from the Buenos Aires Institute of Technology and I'm looking forward to starting this new stage of my professional life.

Throughout my career at ITBA, I developed a great passion for innovative projects in medical technology, and every opportunity I encountered has led me to use that motivation to create innovative products with the help of electronics, programming, machine learning, and, of course, friends.

My motivation is to create technologies that impact people's lives, that help them in their daily lives, and that bring us, as a society, closer to a more humane future. Currently, I'm looking for a job opportunity that will allow me to work in a team to solve problems in the healthcare field through software development.

I have solid experience in languages such as Python, C#, and Java, as well as modern frameworks such as React and .NET. I am passionate about continuous learning and am always looking for new challenges that allow me to grow.`
  };
    
  setAboutText(aboutTexts[language]);
}, [language]);

const getSkills = (language: "es" | "en") => [
  {
    category: language === "es" ? "Lenguajes de Programación" : "Programming Languages",
    items: ["Python", "C#", "Java", "JavaScript", "TypeScript"],
  },
  {
    category: language === "es" ? "Frameworks & Librerías" : "Frameworks & Libraries",
    items: [".NET", "React", "PyQt5", "Scikit-learn", "OpenCV", "ORMs"],
  },
  {
    category: language === "es" ? "Herramientas & Tecnologías" : "Tools & Technologies",
    items: ["AWS", "Azure", "Git", "PostgreSQL", "Unity", "Arduino"],
  },
  {
    category: language === "es" ? "Especialidades" : "Specialties",
    items:
      language === "es"
        ? [
            "Bioinformática",
            "ML en salud",
            "Procesamiento de señales",
            "Imágenes médicas",
            "Software en Salud",
          ]
        : [
            "Bioinformatics",
            "ML in Healthcare",
            "Signal Processing",
            "Medical Imaging",
            "Healthcare Software",
          ],
  },
];

const resumeUrl = language === "en" ? "/resumeEN.pdf" : "/resume.pdf";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center relative min-h-screen flex items-center justify-center text-white overflow-hidden
    bg-[url('/sanma3.jpg')] bg-cover bg-center bg-no-repeat text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <span className="text-sm text-white/80">EN</span>
            <Switch
              checked={language === "en"}
              onCheckedChange={() => setLanguage(language === "es" ? "en" : "es")}
            />
          </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Florencia Canale
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
          {language === "es" ? "Bioingeniera | Desarrolladora de Software | IA & Análisis de Datos en Salud" : "Bioengineer | Software Developer | AI & Data in Health"}
            
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {language === "es" ? "Ver Proyectos" : "View Projects"}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-black hover:bg-white/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {language === "es" ? "Contactar" : "Contact"}
            </Button>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" onClick={() => window.open('https://github.com/Floquicanale')}>
              <Github className="w-5 h-5" />
            </Button>
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" onClick={() => window.open('https://www.linkedin.com/in/florencia-canale-03b430209/')}>
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" onClick={() => window.open(resumeUrl, '_blank')}>
              <FileText className="w-5 h-5" />
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
            <h2 className="text-3xl font-bold text-foreground">{language === "es" ? "Sobre mí" : "About me"}</h2>
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
                {language === "es" ? "Disponible para trabajar" : "Open to work"}
              </Badge>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-85 rounded-2xl overflow-hidden shadow-custom-lg">
                <img 
                  src={profileImage} 
                  alt="Florencia Canale" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-neutral/30">
        <ProjectsSection language={language}/>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{language === "es" ? "Habilidades Técnicas" : "Technical Skills"}</h2>
          <p className="text-muted-foreground text-lg">
          {language === "es" ? "Tecnologías y herramientas con las que trabajo" : "Technologies and tools I work with"}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {getSkills(language).map((skillGroup, index) => (
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
            <h2 className="text-3xl font-bold text-foreground mb-4">{language === "es" ? "¡Trabajemos Juntos!" : "Let's work together!"}</h2>
            <p className="text-muted-foreground text-lg">
              {language === "es" ? "Estoy disponible para nuevas oportunidades. Formulario de contacto:" : "I'm available for new opportunities. Fill out the form:"}
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
                      placeholder= {language === "es" ? "Tu nombre" : "Your name"}
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
                      placeholder={language === "es" ? "tu@email.com" : "your@email.com"}
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
                    placeholder={language === "es" ? "Contame sobre tu proyecto..." : "Tell me about your project..."}
                  ></textarea>
                </div>
                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 transition-opacity px-8"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {language === "es" ? "Enviar Mensaje" : "Send Message"}
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
