'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedText, AnimatedCharacters } from './animated-text';

const heroTitle = ['Turning Vision Into', 'Reality With Code', 'And Design.'];
const heroSubtext = "As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my expertise in Django, Node.js, Laravel, React.js and web development.";

export function Hero() {
  const buttonVariants = {
    initial: { scale: 1, boxShadow: '0 0 0 rgba(0, 0, 0, 0)' },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <AnimatedText
              el="h1"
              text={heroTitle}
              className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              staggerChildren={0.1}
            />
            <AnimatedCharacters
              el="p"
              text={heroSubtext}
              className="mt-6 text-lg max-w-xl mx-auto lg:mx-0 text-muted-foreground"
              stagger={0.01}
            />
            <motion.div
              className="mt-10 flex items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  <Briefcase className="mr-2 h-4 w-4" />
                  My Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </motion.div>
          </div>
          <div className="hidden lg:block">
            <motion.div
              className="relative w-full h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              <div className="absolute w-64 h-64 bg-primary/20 rounded-full -top-10 -left-10 blur-2xl animate-[pulse_8s_ease-in-out_infinite]"></div>
              <div className="absolute w-72 h-72 bg-accent/20 rounded-full -bottom-20 -right-10 blur-2xl animate-[pulse_10s_ease-in-out_infinite_2s]"></div>
              <div className="absolute w-48 h-48 bg-secondary rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
