import Image from 'next/image';
import { Metadata } from 'next';
import { about } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'About Me',
  description: `Learn more about ${about.intro}`,
};

const aboutImage = placeholderImages.find(img => img.id === 'about-me')!;

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
        <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground">
          My Skills
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {about.skills.map((skill, index) => (
             <ScrollReveal key={skill} delay={0.5 + index * 0.05}>
              <Badge variant="default" className="text-base px-4 py-2 rounded-full">
                {skill}
              </Badge>
             </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
