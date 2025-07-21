import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
  onViewDetails: () => void;
}

export const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image, 
  link, 
  github, 
  onViewDetails 
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card border-neutral/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action buttons overlay */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {github && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(github, '_blank');
              }}
              className="p-2 bg-card/90 hover:bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Github className="w-4 h-4 text-foreground" />
            </button>
          )}
          {link && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(link, '_blank');
              }}
              className="p-2 bg-card/90 hover:bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4 text-foreground" />
            </button>
          )}
        </div>

        {/* View details button */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={onViewDetails}
            className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-200"
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium">Ver detalles</span>
          </button>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge 
              key={index}
              variant="secondary"
              className="text-xs px-2 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};