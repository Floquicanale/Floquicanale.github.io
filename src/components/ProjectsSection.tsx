import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

// Project images
import maqui from '../assets/maqui.jpg';
import hernii from '../assets/hernii.png';
import apnea from '../assets/eeg.jpg';
import ivus from '../assets/ivus2.jpeg';
import rehab from '../assets/kinevirtual.jpg';

const projectsData = [
  {
    title: "MAQUI",
    description: "Visualizador de imágenes DICOM, sistema centrado en el paciente con C#, SQL y AWS.",
    fullDescription: `MAQUI es un sistema integral de visualización de imágenes médicas DICOM desarrollado con un enfoque centrado en el paciente. El sistema permite a los pacientes visualizar y gestionar accesos a sus imágenes, mientras que los médicos pueden visualizar, analizar y compartir imágenes médicas con otros médicos en caso de estar habilitados.

El backend se desarrolló siguiendo una arquitectura Clean con C# y .NET Framework, con una base de datos PostgreSQL para el almacenamiento de metadatos y AWS S3 para el almacenamiento de las imágenes DICOM. El frontend se deasarrollo en JavaScript XML y HTML con el framework React + Vite. La aplicación incluye un sistema para cargar y compartir imágenes de forma segura, lista de médicos/pacientes de contacto frecuente y funcionalidades básicas de procesamiento de imágenes.`,
    technologies: ["C#", ".NET", "PostgreSQL", "AWS S3", "Azure", "DICOM", "Clean Architecture", "React", "Vite", "JavaScript", "HTML", "CSS", "Cornerstone.js"],
    image: maqui,
    link: "https://maquiapi20250506175249-hzb0dafndpawhkfn.brazilsouth-01.azurewebsites.net/login",
    github: "https://github.com/Floquicanale/MAQUI",
    features: [
      "Herramientas para la visualización y procesamiento de imágenes DICOM 2D",
      "Dos alternativas para la carga sencilla de imágenes",
      "Sistema de gestión de accesos a imágenes para los pacientes",
      "Lista de médicos de confianza",
      "Interfaz intuitiva y responsive",
      "Web desplegada en Azure",
      "Limpieza automática de la base de datos"
    ],
    challenges: [
      "Seguridad de los datos sensibles",
      "Diseño del visualizador con herramientas propias",
      "Diseño de arquitectura escalable en AWS",
      "Intergración de la base de datos relacional con almacenamiento de imágenes en el bucket de S3",
      "Validación del rol de médicos con número de licencia en SISA",
      "Implementación "
    ],
    outcomes: [
      "Sistema validado con pruebas de usuarios: médicos y pacientes",
      "Experiencia de usuario clasificada como 'intuitiva'",
      "Elogio a la velocidad en las distintas consultas a la página",
      "Posibles mejoras en herramientas de visualización"
    ]
  },
  {
    title: "HERNII",
    description: "Dispositivo de Medición de Presión Arterial No Invasiva utilizando Cálculo de PTT",
    fullDescription: `HERNII es un dispositivo innovador para la medición no invasiva de la presión arterial basado en el cálculo del Tiempo de Tránsito de Pulso (PTT). El proyecto combina hardware con Arduino y una aplicación móvil desarrollada en Android Studio.

El dispositivo utiliza sensores especializados (PPG, ECG y acelerómetro) para capturar el pulso en diferentes puntos del cuerpo, siguiendo su recorrido desde el corazón hasta la mano y calcula la presión arterial mediante algoritmos avanzados de procesamiento de señales. La aplicación móvil permite monitorear en tiempo real y almacenar historial de mediciones.`,
    technologies: ["Java", "Arduino", "Android Studio", "Bluetooth", "Signal Processing", "FireBase", "ECG", "PPG"],
    image: hernii,
    github: "https://github.com/Floquicanale/hernii",
    features: [
      "Medición no invasiva de presión arterial",
      "Conectividad Bluetooth con dispositivos móviles",
      "Algoritmos de procesamiento de señales PTT",
      "Aplicación móvil para monitoreo en tiempo real",
      "Almacenamiento de datos en FireBase y envío de historial de mediciones vía mail"
    ],
    challenges: [
      "Calibración de mediciones para cada usuario de forma sencilla",
      "Obtención de las señales con la menor cantidad de ruido posible",
      "Elección del algoritmo para cálculo de la presión arterial mediante PTT",
      "Definición de puntos importantes en las señales obtenidas para realizar los cálculos",
      "Envío de datos vía blutooth en tiempo real a la aplicación móvil",
      "Diseño de la interfaz de usuario"
    ],
    outcomes: [
      "Demuestra la viabilidad de medir la presión con el PTT con un error aceptable",
      "Selección de algoritmo de cálculo de presión discriminado por RSME para presión diastólica y sistólica",
      "Prototipo funcional validado con múltiples sujetos de distintas edades y sexos",
      "Reconocimiento en feria de innovación ITBA"
    ]
  },
  {
    title: "Detección de Apnea con ML",
    description: "Clasificador de apnea basado en EEG usando machine learning.",
    fullDescription: `Este proyecto desarrolla un sistema de detección automática de apnea del sueño utilizando técnicas de machine learning. Se preprocesan y obtienen parámetros relevantes de señales de electroencefalograma (independizadas del electrooculograma) para identificar episodios de apnea en pacientes.

Utilizando Python y bibliotecas especializadas como Scikit-learn y Pandas, se implementaron algoritmos de Machine Learning para clasificar eventos de apnea en diversos pacientes utilizando transformada wavelets y una segmentación en etapas del sueño propia para calcular los features de entrada.`,
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Signal Processing", "Árbol de decisión", "SVM", "KNN", "Random Forrest"],
    image: apnea,
    link: "https://colab.research.google.com/drive/1nrrgezh53GshPx-h4oPNqJVbGfiiM7uB?usp=sharing",
    features: [
      "Procesamiento de señales de EEG de datasets públicos",
      "Definición de etapas del sueño mediante frecuencias características de ondas",
      "Utilización de filtros para eliminar ruidos constantes y señales que interfieren",
      "Algoritmos de machine learning para clasificación de eventos de apnea",
      "Visualización de resultados y estadísticas"
    ],
    challenges: [
      "Manejo de señales ruidosas y artefactos",
      "Evitar overfitting",
      "Selección de características relevantes"
    ],
    outcomes: [
      "Exactitud de 80% en detección de apnea",
      "Posible reducción en tiempo de diagnóstico de apnea del sueño",
      "Posibilidad de desarrollo de dispositivos monocanal de uso más cómodo",
      "Técnica de clasificación independiente de expertos",
      "Modelo validado con observaciones clínicas de expertos obtenidas de los datasets"
    ]
  },
  {
    title: "Interfaz de Usuario para IVUS",
    description: "Software en Python para análisis de ultrasonido intravascular.",
    fullDescription: `Desarrollo de una interfaz de usuario para el análisis de imágenes de ultrasonido intravascular (IVUS). El software permite a los cardiólogos visualizar y analizar imágenes IVUS para evaluar las características vasculares y planificar colocación de stents.

La aplicación incluye herramientas de medición automática, detección de placa arterial cálcica y cálculo del coeficiente de areas que determina la necesidad de un stent. Desarrollado con Python, PyQt5, OpenCV y funciones propias para procesamiento de imágenes médicas.`,
    technologies: ["Python", "PyQt5", "OpenCV", "NumPy", "SciPy", "DICOM", "Region Growing"],
    image: ivus,
    github: "https://github.com/Floquicanale/TP-PIB",
    features: [
      "Visualización de imágenes IVUS",
      "Herramientas para calcular el diámetro del lumen",
      "Detección automática de placas cálcica con alerta",
      "Cálculo de coeficiente para determinar la necesidad de colocar un stent"
    ],
    challenges: [
      "Segmentación precisa de estructuras vasculares",
      "Cálculo de areas de forma precisa",
      "Diseño de interfaz intuitiva"
    ],
    outcomes: [
      "Segmentación automática sin necesidad de un experto",
      "Reducción significativa en tiempo de análisis",
      "Reconocimiento en feria del ITBA"
    ]
  },
  {
    title: "Plataforma de Rehabilitación con VR",
    description: "Simulador en Unity para rehabilitación física.",
    fullDescription: `Plataforma para rehabilitación física de manos que utiliza realidad virtual para crear ejercicios terapéuticos inmersivos. Desarrollada en Unity con C++, la plataforma ofrece un entorno virtual realista ambientado para transmitir tranquilidad al paciente.

El sistema incluye ejercicios validados por la posición de la mano para asegurar un seguimiento. La experiencia lúdica ayuda a lograr adherencia al tratamiento. `,
    technologies: ["Unity", "C#", "Oculus Quest", "3D Modeling", "Game Development"],
    image: rehab,
    github: "https://github.com/Floquicanale/KineVirtual",
    link: "https://www.youtube.com/watch?v=7g30DdFGjEw",
    features: [
      "Entorno virtual inmersivos para rehabilitación",
      "Ejercicios validados por la posición de la mano y sonido de aprobación al completar cada ejercicio",
      "Sistema de seguimiento de movimientos 3D",
      "Ludificación para motivar a los pacientes"
    ],
    challenges: [
      "Diseño del ambiente virtual para experiencia realista",
      "Uso de una voz generada con IA para dar instruccones sin agregar otro jugador",
      "Calibración precisa de movimientos en VR",
      "Transición de movimiento con controles a uso de las manos para ejercicios",
      "Optimización de rendimiento para memoria del Oculus Quest"
    ],
    outcomes: [
      "Prototipo validado en pacientes",
      "Experiencia agradable que minimaliza la despersonalización"
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