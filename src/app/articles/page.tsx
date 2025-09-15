import { Metadata } from 'next';
import Link from 'next/link';
import { PenSquare, Calendar } from 'lucide-react';
import { articles } from '@/lib/data';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Thoughts and tutorials on web development, design, and technology.',
};

export default function ArticlesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <ScrollReveal>
        <div className="text-center">
          <PenSquare className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl">
            Articles & Writings
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            I'm currently drafting some articles. Stay tuned for insights on web development, design, and more!
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-16 space-y-8">
        <h2 className="text-2xl font-bold text-center text-foreground">Coming Soon...</h2>
        {articles.map((article, index) => (
          <ScrollReveal key={article.id} delay={index * 0.1}>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{article.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar className="h-4 w-4"/>
                  {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{article.description}</p>
              </CardContent>
              <CardFooter>
                 <Button variant="outline" disabled>Read More (Soon)</Button>
              </CardFooter>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
