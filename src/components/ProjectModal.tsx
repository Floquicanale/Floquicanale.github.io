import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    fullDescription?: string;
    technologies: string[];
    image: string;
    link?: string;
    github?: string;
    features?: string[];
    challenges?: string[];
    outcomes?: string[];
  } | null;
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">
                {project.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Herramienteas Utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  className="bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Full Description */}
          {project.fullDescription && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Descripción Detallada</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Características Principales</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Desafíos Técnicos</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Resultados</h3>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-border">
            {project.github && (
              <Button
                onClick={() => window.open(project.github, '_blank')}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                Ver Código
              </Button>
            )}
            {project.link && (
              <Button
                onClick={() => window.open(project.link, '_blank')}
                className="flex items-center gap-2 bg-gradient-primary hover:opacity-90"
              >
                <ExternalLink className="w-4 h-4" />
                Ver Proyecto
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};