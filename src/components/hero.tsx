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
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2022/07/21/123849-734799793_large.mp4"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
            <AnimatedText
              el="h1"
              text={heroTitle}
              className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              staggerChildren={0.1}
            />
            <AnimatedCharacters
              el="p"
              text={heroSubtext}
              className="mt-6 text-lg max-w-3xl mx-auto text-muted-foreground"
              stagger={0.01}
            />
            <motion.div
              className="mt-10 flex items-center justify-center gap-4"
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
      </div>
    </section>
  );
}
