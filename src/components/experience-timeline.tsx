'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '@/lib/data';
import { ScrollReveal } from './scroll-reveal';

export function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-9 top-0 h-full w-0.5 bg-border" />
      {experiences.map((exp, index) => (
        <ScrollReveal key={exp.id} delay={index * 0.2}>
          <div className="relative mb-8 flex items-start pl-20">
            <div className="absolute left-0 top-1 flex h-16 items-center">
              <span className="absolute left-9 -ml-px h-full w-0.5 bg-border" aria-hidden="true" />
              <div className="absolute left-9 -ml-[11px] h-[calc(1.375rem+2px)] w-[calc(1.375rem+2px)]">
                <motion.div
                  className="flex h-full w-full items-center justify-center rounded-full bg-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                >
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                </motion.div>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-semibold text-muted-foreground">{exp.date}</p>
              <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
              <p className="text-md font-medium text-primary">{exp.company}</p>
              <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
