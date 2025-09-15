import { Hero } from '@/components/hero';
import { ProjectCard } from '@/components/project-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { projects } from '@/lib/data';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col">
      <Hero />
      <section id="projects" className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              A selection of my work, from web applications to creative experiments.
            </p>
          </ScrollReveal>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
