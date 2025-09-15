'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Eye, Github } from 'lucide-react';
import type { Project } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function ProjectCard({ project }: { project: Project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative h-full w-full"
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className="group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-lg"
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-4">
          <p className="flex-1 text-sm text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 border-t p-4">
          {project.demoUrl && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">
                  <Eye className="mr-2 h-4 w-4" /> View Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0">
                <DialogHeader className="p-4 pb-0">
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>Live demo of the project.</DialogDescription>
                </DialogHeader>
                <div className="aspect-video w-full">
                  <iframe
                    src={project.demoUrl}
                    title={project.title}
                    className="h-full w-full"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
                </div>
              </DialogContent>
            </Dialog>
          )}
          {project.repoUrl && (
            <Button asChild variant="outline" className={cn(!project.demoUrl && 'w-full')}>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Source
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
