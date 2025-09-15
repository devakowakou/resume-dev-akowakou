import { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { ContactForm } from '@/components/contact-form';
import { ScrollReveal } from '@/components/scroll-reveal';
import { author } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me for collaborations, questions, or just to say hi.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <ScrollReveal>
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-center">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-center">
          Have a project in mind, a question, or just want to connect? Feel free to reach out.
        </p>
      </ScrollReveal>
      
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ScrollReveal delay={0.1}>
          <ContactForm />
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="space-y-8">
          <h3 className="text-2xl font-bold">Other Ways to Connect</h3>
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <a href={`mailto:${author.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                {author.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
               <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
            </div>
            <div>
              <h4 className="font-semibold">WhatsApp</h4>
              <a href={`https://wa.me/22958186569`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                +229 58 18 65 69
              </a>
            </div>
          </div>
           <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-muted-foreground">Worldwide (Remote)</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
