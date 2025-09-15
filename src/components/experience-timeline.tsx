
'use client';

import { motion } from 'framer-motion';
import { Briefcase, List } from 'lucide-react';
import { experiences } from '@/lib/data';
import { ScrollReveal } from './scroll-reveal';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-9 top-0 h-full w-0.5 bg-border -ml-px" />
      {experiences.map((exp, index) => (
        <ScrollReveal key={exp.id} delay={index * 0.2}>
          <div className="relative mb-8 flex items-start pl-20">
            <div className="absolute left-0 top-1 flex h-16 items-center">
              <div className="absolute left-9 -ml-[11px] h-[calc(1.375rem+2px)] w-[calc(1.375rem+2px)]">
                <motion.div
                  className="flex h-full w-full items-center justify-center rounded-full bg-primary ring-8 ring-background"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, transition: { duration: 0.5, delay: 0.2 } }}
                  viewport={{ once: true }}
                >
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                </motion.div>
              </div>
            </div>
            <Card className="ml-4 w-full bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-primary">{exp.date}</p>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{exp.role}</CardTitle>
                <p className="text-md font-medium text-muted-foreground">{exp.company}</p>
              </CardHeader>
              <CardContent>
                {Array.isArray(exp.description) ? (
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <List className="h-4 w-4 mt-1 flex-shrink-0 text-primary/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-foreground/80">{exp.description}</p>
                )}
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
