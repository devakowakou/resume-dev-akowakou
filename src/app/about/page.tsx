import Image from 'next/image';
import { Metadata } from 'next';
import { about } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { ScrollReveal } from '@/components/scroll-reveal';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const metadata: Metadata = {
  title: 'About Me',
  description: `Learn more about ${about.intro}`,
};

const aboutImage = placeholderImages.find(img => img.id === 'about-me')!;

const skillIcons: Record<string, string> = {
  JavaScript: '/icons/javascript.svg',
  TypeScript: '/icons/typescript.svg',
  Python: '/icons/python.svg',
  PHP: '/icons/php.svg',
  'C#': '/icons/csharp.svg',
  Go: '/icons/go.svg',
  React: '/icons/react.svg',
  'Next.js': '/icons/nextjs.svg',
  'Node.js': '/icons/nodejs.svg',
  Express: '/icons/express.svg',
  Django: '/icons/django.svg',
  Laravel: '/icons/laravel.svg',
  'ASP.NET': '/icons/dotnet.svg',
  PostgreSQL: '/icons/postgresql.svg',
  MongoDB: '/icons/mongodb.svg',
  MySQL: '/icons/mysql.svg',
  Redis: '/icons/redis.svg',
  'Tailwind CSS': '/icons/tailwindcss.svg',
  'Framer Motion': '/icons/framer.svg',
  Docker: '/icons/docker.svg',
  Kubernetes: '/icons/kubernetes.svg',
  'Google Cloud': '/icons/google-cloud.svg',
  AWS: '/icons/aws.svg',
  Git: '/icons/git.svg',
  Terraform: '/icons/terraform.svg',
  Jenkins: '/icons/jenkins.svg',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <ScrollReveal>
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Passion Fuels Purpose
        </h1>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-muted-foreground">{about.intro}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-base text-foreground/80">{about.bio}</p>
          </ScrollReveal>
        </div>
        <ScrollReveal className="flex justify-center" delay={0.3}>
          <div className="relative h-64 w-64 lg:h-80 lg:w-80">
            <Image
              src={aboutImage.imageUrl}
              alt="Amour Akowakou"
              width={500}
              height={500}
              className="rounded-full object-cover shadow-lg"
              data-ai-hint={aboutImage.imageHint}
              priority
            />
            <div className="absolute inset-0 rounded-full border-2 border-primary" />
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal className="mt-20" delay={0.4}>
        <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground text-center">
          My Tech Stack
        </h2>
        <p className="mt-2 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          A collection of technologies I use to build modern, scalable, and
          performant web applications.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(about.skills).map(
            ([category, skills], categoryIndex) => (
              <ScrollReveal
                key={category}
                delay={0.5 + categoryIndex * 0.1}
                className="h-full"
              >
                <Card className="h-full bg-card/50 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                    <CardDescription>
                      Tools and technologies for {category.toLowerCase()}.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TooltipProvider>
                      <div className="flex flex-wrap gap-4">
                        {skills.map((skill, skillIndex) => (
                          <Tooltip key={skill}>
                            <TooltipTrigger>
                              <ScrollReveal
                                delay={
                                  0.6 +
                                  categoryIndex * 0.1 +
                                  skillIndex * 0.05
                                }
                              >
                                <div className="group relative flex h-14 w-14 items-center justify-center rounded-lg bg-background/50 p-2 transition-all duration-300 hover:scale-110 hover:bg-primary/10">
                                  {skillIcons[skill] ? (
                                    <Image
                                      src={skillIcons[skill]}
                                      alt={`${skill} icon`}
                                      width={32}
                                      height={32}
                                      className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                  ) : (
                                    <span className="text-xs text-center font-bold">
                                      {skill}
                                    </span>
                                  )}
                                </div>
                              </ScrollReveal>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </TooltipProvider>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )
          )}
        </div>
      </ScrollReveal>
    </div>
  );
}
