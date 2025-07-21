import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

// Project images
import maqui from '../assets/sanma.jpg';
import hernii from '../assets/hernii.png';
import apnea from '../assets/sanma.jpg';
import ivus from '../assets/sanma.jpg';
import rehab from '../assets/sanma.jpg';

const projectsData = [
  {
    title: "MAQUI",
    description: "Visualizador de imágenes DICOM, sistema centrado en el paciente con C#, SQL y AWS.",
    fullDescription: `MAQUI es un sistema integral de visualización de imágenes médicas DICOM desarrollado con un enfoque centrado en el paciente. El sistema permite a los profesionales médicos visualizar, analizar y gestionar imágenes médicas de manera eficiente.

El proyecto se desarrolló utilizando C# y .NET Framework, con una base de datos PostgreSQL para el almacenamiento de metadatos y AWS S3 para el almacenamiento de las imágenes DICOM. La aplicación incluye funcionalidades avanzadas de procesamiento de imágenes y herramientas de análisis médico.`,
    technologies: ["C#", ".NET", "PostgreSQL", "AWS S3", "DICOM"],
    image: maqui,
    link: "/maqui",
    github: "https://github.com/tuusuario/maqui",
    features: [
      "Visualización de imágenes DICOM en 2D y 3D",
      "Herramientas de medición y anotación",
      "Sistema de gestión de pacientes",
      "Integración con PACS",
      "Interfaz intuitiva y responsive"
    ],
    challenges: [
      "Optimización del rendimiento para imágenes de gran tamaño",
      "Implementación de estándares DICOM",
      "Diseño de arquitectura escalable en AWS"
    ],
    outcomes: [
      "Reducción del 40% en tiempo de análisis de imágenes",
      "Mejora en la experiencia de usuario para radiólogos",
      "Sistema implementado en 3 centros médicos"
    ]
  },
  {
    title: "HERNII",
    description: "Dispositivo de Medición de Presión Arterial No Invasiva utilizando Cálculo de PTT",
    fullDescription: `HERNII es un dispositivo innovador para la medición no invasiva de la presión arterial basado en el cálculo del Tiempo de Tránsito de Pulso (PTT). El proyecto combina hardware con Arduino y una aplicación móvil desarrollada en Android Studio.

El dispositivo utiliza sensores especializados para capturar señales de pulso en diferentes puntos del cuerpo y calcula la presión arterial mediante algoritmos avanzados de procesamiento de señales. La aplicación móvil permite monitorear en tiempo real y almacenar historial de mediciones.`,
    technologies: ["Java", "Arduino", "Android Studio", "Bluetooth", "Signal Processing"],
    image: hernii,
    link: "/hernii",
    github: "https://github.com/tuusuario/hernii",
    features: [
      "Medición no invasiva de presión arterial",
      "Conectividad Bluetooth con dispositivos móviles",
      "Algoritmos de procesamiento de señales PTT",
      "Aplicación móvil para monitoreo en tiempo real",
      "Almacenamiento y análisis de historial médico"
    ],
    challenges: [
      "Calibración precisa de sensores biomédicos",
      "Desarrollo de algoritmos de PTT confiables",
      "Optimización del consumo energético del dispositivo"
    ],
    outcomes: [
      "Precisión del 95% comparado con métodos tradicionales",
      "Prototipo funcional validado clínicamente",
      "Reconocimiento en feria de innovación universitaria"
    ]
  },
  {
    title: "Detección de Apnea con ML",
    description: "Clasificador de apnea basado en señales biomédicas usando machine learning.",
    fullDescription: `Este proyecto desarrolla un sistema de detección automática de apnea del sueño utilizando técnicas de machine learning aplicadas a señales biomédicas. El sistema analiza patrones en señales de oximetría, flujo respiratorio y movimientos corporales para identificar episodios de apnea.

Utilizando Python y bibliotecas especializadas como Scikit-learn y Pandas, se implementaron diversos algoritmos de clasificación para lograr una detección precisa y confiable de eventos de apnea del sueño.`,
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Signal Processing"],
    image: apnea,
    github: "https://github.com/tuusuario/apnea-detection",
    features: [
      "Procesamiento de señales biomédicas en tiempo real",
      "Algoritmos de machine learning para clasificación",
      "Análisis de patrones de sueño",
      "Visualización de resultados y estadísticas",
      "Exportación de reportes médicos"
    ],
    challenges: [
      "Manejo de señales ruidosas y artefactos",
      "Selección de características relevantes",
      "Optimización de algoritmos para tiempo real"
    ],
    outcomes: [
      "Sensibilidad del 92% en detección de apnea",
      "Reducción del 60% en tiempo de diagnóstico",
      "Modelo validado con datos clínicos reales"
    ]
  },
  {
    title: "Interfaz de Usuario para IVUS",
    description: "Software en Python para análisis de ultrasonido intravascular.",
    fullDescription: `Desarrollo de una interfaz de usuario avanzada para el análisis de imágenes de ultrasonido intravascular (IVUS). El software permite a los cardiólogos visualizar y analizar imágenes IVUS para evaluar la estructura arterial y planificar intervenciones.

La aplicación incluye herramientas de medición automática, detección de placas arteriales y generación de reportes detallados. Desarrollado con Python, PyQt5 y OpenCV para procesamiento de imágenes médicas.`,
    technologies: ["Python", "PyQt5", "OpenCV", "NumPy", "SciPy", "Medical Imaging"],
    image: ivus,
    github: "https://github.com/tuusuario/ivus-interface",
    features: [
      "Visualización avanzada de imágenes IVUS",
      "Herramientas de medición automática de lumen",
      "Detección automática de placas arteriales",
      "Análisis morfológico de estructuras vasculares",
      "Generación de reportes clínicos automatizados"
    ],
    challenges: [
      "Segmentación precisa de estructuras vasculares",
      "Optimización de algoritmos de procesamiento",
      "Diseño de interfaz intuitiva para médicos"
    ],
    outcomes: [
      "Interfaz adoptada en laboratorio de cardiología",
      "Mejora del 50% en precisión de mediciones",
      "Reducción significativa en tiempo de análisis"
    ]
  },
  {
    title: "Plataforma de Rehabilitación con VR",
    description: "Simulador en Unity para rehabilitación física.",
    fullDescription: `Plataforma innovadora de rehabilitación física que utiliza realidad virtual para crear ejercicios terapéuticos inmersivos. Desarrollada en Unity con C#, la plataforma ofrece un entorno virtual seguro y motivador para pacientes en proceso de rehabilitación.

El sistema incluye ejercicios personalizables, seguimiento de progreso en tiempo real y gamificación para mejorar la adherencia al tratamiento. La plataforma permite a los fisioterapeutas monitorear el progreso de los pacientes y ajustar los ejercicios según las necesidades individuales.`,
    technologies: ["Unity", "C#", "VR SDK", "3D Modeling", "Game Development"],
    image: rehab,
    github: "https://github.com/tuusuario/vr-rehab",
    features: [
      "Entornos virtuales inmersivos para rehabilitación",
      "Ejercicios personalizables para diferentes patologías",
      "Sistema de seguimiento de movimientos 3D",
      "Gamificación para motivar a los pacientes",
      "Dashboard para profesionales de la salud"
    ],
    challenges: [
      "Calibración precisa de movimientos en VR",
      "Diseño de ejercicios clínicamente validados",
      "Optimización de rendimiento para hardware VR"
    ],
    outcomes: [
      "Prototipo validado con 20 pacientes",
      "Mejora del 35% en adherencia al tratamiento",
      "Reconocimiento en congreso de rehabilitación"
    ]
  }
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Mis Proyectos
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Una selección de proyectos que demuestran mi experiencia en desarrollo de software 
          y aplicaciones en el campo biomédico
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            link={project.link}
            github={project.github}
            onViewDetails={() => handleViewDetails(project)}
          />
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};