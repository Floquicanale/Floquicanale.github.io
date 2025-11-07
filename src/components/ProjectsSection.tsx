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

const projectsDataEN = [
  {
    title: "MAQUI",
    description: "DICOM image viewer, patient-centered system built with C#, SQL, and AWS.",
    fullDescription: `MAQUI is a comprehensive DICOM medical imaging viewer system developed with a patient-centered approach. It allows patients to view and manage access to their images, while doctors can visualize, analyze, and share images with other professionals if authorized.

The backend follows a Clean Architecture approach using C# and the .NET Framework, with a PostgreSQL database for metadata storage and AWS S3 for DICOM image storage. The frontend was built with JavaScript XML and HTML using React + Vite. The application includes secure image upload and sharing, a list of frequent doctors/patients, and basic image processing tools.`,
    technologies: ["C#", ".NET", "PostgreSQL", "AWS S3", "Azure", "DICOM", "Clean Architecture", "React", "Vite", "JavaScript", "HTML", "CSS", "Cornerstone.js"],
    image: maqui,
    link: "https://youtu.be/qWFCRb0zEDY",
    github: "https://github.com/Floquicanale/MAQUI",
    features: [
      "Tools for 2D DICOM image visualization and processing",
      "Two simple alternatives for image upload",
      "Patient-controlled image access management",
      "Trusted doctor list",
      "Intuitive and responsive interface",
      "Web app deployed on Azure",
      "Automatic database cleanup"
    ],
    challenges: [
      "Sensitive data security",
      "Viewer design with custom tools",
      "Scalable architecture design on AWS",
      "Integration of relational database with image storage on S3",
      "Doctor license validation using SISA",
      "Implementation"
    ],
    outcomes: [
      "System validated with real users: doctors and patients",
      "User experience described as ‘intuitive’",
      "Praised for fast response time across different sections",
      "Identified potential improvements in viewer tools"
    ]
  },
  {
    title: "HERNII",
    description: "Non-invasive blood pressure measurement device using PTT calculation.",
    fullDescription: `HERNII is an innovative device for non-invasive blood pressure measurement based on Pulse Transit Time (PTT). The project combines Arduino-based hardware with a mobile app built in Android Studio.

The device uses specialized sensors (PPG, ECG, and accelerometer) to capture the pulse at different body points—tracking its path from the heart to the hand—and calculates blood pressure using advanced signal processing algorithms. The mobile app allows real-time monitoring and stores measurement history.`,
    technologies: ["Java", "Arduino", "Android Studio", "Bluetooth", "Signal Processing", "FireBase", "ECG", "PPG"],
    image: hernii,
    github: "https://github.com/Floquicanale/hernii",
    features: [
      "Non-invasive blood pressure monitoring",
      "Bluetooth connectivity with mobile devices",
      "Signal processing algorithms for PTT",
      "Mobile app for real-time monitoring",
      "Data storage on Firebase and measurement history sharing via email"
    ],
    challenges: [
      "Simple calibration for individual users",
      "Noise reduction in signal acquisition",
      "Algorithm selection for blood pressure estimation via PTT",
      "Definition of signal landmarks for accurate calculations",
      "Real-time data transfer via Bluetooth to the app",
      "User interface design"
    ],
    outcomes: [
      "Demonstrated feasibility of PTT-based measurement with acceptable error",
      "Algorithm selected based on RSME for diastolic and systolic pressure",
      "Functional prototype validated across diverse subjects",
      "Recognition at ITBA innovation fair"
    ]
  },
  {
    title: "Apnea Detection with ML",
    description: "EEG-based apnea classifier using machine learning.",
    fullDescription: `This project develops an automatic sleep apnea detection system using machine learning techniques. EEG signals (independent from EOG) are preprocessed and relevant parameters extracted to identify apnea events in patients.

Using Python and specialized libraries like Scikit-learn and Pandas, several ML algorithms were implemented to classify apnea episodes across patients. Wavelet transform and a custom sleep stage segmentation were used to calculate input features.`,
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Signal Processing", "Decision Tree", "SVM", "KNN", "Random Forest"],
    image: apnea,
    link: "https://colab.research.google.com/drive/1nrrgezh53GshPx-h4oPNqJVbGfiiM7uB?usp=sharing",
    features: [
      "EEG signal processing from public datasets",
      "Definition of sleep stages based on characteristic wave frequencies",
      "Filtering to remove noise and interfering signals",
      "Machine learning algorithms to classify apnea events",
      "Result visualization and statistics"
    ],
    challenges: [
      "Handling noisy signals and artifacts",
      "Avoiding overfitting",
      "Selection of relevant features"
    ],
    outcomes: [
      "80% accuracy in apnea detection",
      "Potential reduction in sleep apnea diagnosis time",
      "Viability of developing more comfortable single-channel devices",
      "Expert-independent classification technique",
      "Model validated against clinical expert annotations from datasets"
    ]
  },
  {
    title: "User Interface for IVUS",
    description: "Python-based software for intravascular ultrasound (IVUS) analysis.",
    fullDescription: `Development of a user interface for analyzing intravascular ultrasound (IVUS) images. The software enables cardiologists to view and analyze IVUS data to assess vascular characteristics and plan stent placement.

The app includes automated measurement tools, calcified plaque detection, and area coefficient calculation to assist in stent decisions. Developed using Python, PyQt5, OpenCV, and custom medical image processing functions.`,
    technologies: ["Python", "PyQt5", "OpenCV", "NumPy", "SciPy", "DICOM", "Region Growing"],
    image: ivus,
    github: "https://github.com/Floquicanale/TP-PIB",
    features: [
      "IVUS image visualization",
      "Tools to measure lumen diameter",
      "Automatic calcified plaque detection with alert system",
      "Area coefficient calculation to assess stent need"
    ],
    challenges: [
      "Precise segmentation of vascular structures",
      "Accurate area calculations",
      "Intuitive interface design"
    ],
    outcomes: [
      "Automatic segmentation without expert intervention",
      "Significant reduction in analysis time",
      "Recognition at ITBA fair"
    ]
  },
  {
    title: "Rehabilitation Platform with VR",
    description: "Unity-based simulator for physical rehabilitation.",
    fullDescription: `Virtual reality rehabilitation platform focused on hand recovery exercises. Built in Unity using C++, the platform creates a peaceful immersive environment for therapeutic exercises.

The system validates exercise completion using hand position tracking and audio cues. The gamified experience improves adherence to therapy.`,
    technologies: ["Unity", "C#", "Oculus Quest", "3D Modeling", "Game Development"],
    image: rehab,
    github: "https://github.com/Floquicanale/KineVirtual",
    link: "https://www.youtube.com/watch?v=7g30DdFGjEw",
    features: [
      "Immersive virtual environments for rehabilitation",
      "Exercises validated by hand tracking and positive feedback sounds",
      "3D motion tracking system",
      "Gamification to increase patient motivation"
    ],
    challenges: [
      "Designing realistic virtual environments",
      "Using AI-generated voice for instructions without additional player interaction",
      "Precise movement calibration in VR",
      "Transition from controller-based to hand-based exercises",
      "Performance optimization for Oculus Quest memory"
    ],
    outcomes: [
      "Prototype validated with patients",
      "Comfortable experience that reduces depersonalization"
    ]
  }
];

export const ProjectsSection = ({language}) => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = language === "es" ? projectsData : projectsDataEN;

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
          {language === "es" ? "Mis Proyectos" : "My projects"}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {language === "es" ? "Una selección de proyectos que demuestran mi experiencia en desarrollo de software y aplicaciones en el campo biomédico" 
          : "A selection of projects that demonstrate my experience in software and app development in the biomedical field"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((project, index) => (
          <ProjectCard
            language={language}
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
        language={language}
        project={selectedProject}
      />
    </section>
  );
};