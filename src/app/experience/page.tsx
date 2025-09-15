import { Metadata } from 'next';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { ScrollReveal } from '@/components/scroll-reveal';

export const metadata: Metadata = {
  title: 'My Experience',
  description: 'A timeline of my professional journey as a developer.',
};

export default function ExperiencePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <ScrollReveal>
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-center">
          Work Experience
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-center">
          My professional journey and key accomplishments in the tech industry.
        </p>
      </ScrollReveal>
      
      <div className="mt-16">
        <ExperienceTimeline />
      </div>
    </div>
  );
}
