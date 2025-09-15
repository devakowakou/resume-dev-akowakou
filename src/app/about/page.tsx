import Image from 'next/image';
import { Metadata } from 'next';
import { about } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { ScrollReveal } from '@/components/scroll-reveal';
import {
  Card,
  CardContent,
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
  Java: '/icons/java.svg',
  'C#': '/icons/csharp.svg',
  Go: '/icons/go.svg',
  Ruby: '/icons/ruby.svg',
  Swift: '/icons/swift.svg',
  Kotlin: '/icons/kotlin.svg',
  Rust: '/icons/rust.svg',
  'C++': '/icons/cplusplus.svg',
  Scala: '/icons/scala.svg',
  Elixir: '/icons/elixir.svg',
  Dart: '/icons/dart.svg',
  PHP: '/icons/php.svg',
  React: '/icons/react.svg',
  'Next.js': '/icons/nextjs.svg',
  'Node.js': '/icons/nodejs.svg',
  Express: '/icons/express.svg',
  Django: '/icons/django.svg',
  'Ruby on Rails': '/icons/rails.svg',
  Laravel: '/icons/laravel.svg',
  'ASP.NET': '/icons/dotnet.svg',
  Vue: '/icons/vue.svg',
  Angular: '/icons/angular.svg',
  Svelte: '/icons/svelte.svg',
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
  Ansible: '/icons/ansible.svg',
  GraphQL: '/icons/graphql.svg',
  Firebase: '/icons/firebase.svg',
  Vite: '/icons/vite.svg',
  Lua: '/icons/lua.svg',
  Perl: '/icons/perl.svg',
  MATLAB: '/icons/matlab.svg',
  Groovy: '/icons/groovy.svg',
  R: '/icons/r.svg',
  Flask: '/icons/flask.svg',
  FastAPI: '/icons/fastapi.svg',
  Symfony: '/icons/symfony.svg',
  Spring: '/icons/spring.svg',
  jQuery: '/icons/jquery.svg',
  SQLite: '/icons/sqlite.svg',
  Oracle: '/icons/oracle.svg',
  MariaDB: '/icons/mariadb.svg',
  'VS Code': '/icons/vscode.svg',
  'IntelliJ IDEA': '/icons/intellij-idea.svg',
  PyCharm: '/icons/pycharm.svg',
  WebStorm: '/icons/webstorm.svg',
  Vim: '/icons/vim.svg',
  Webflow: '/icons/webflow.svg',
  Bubble: '/icons/bubble.svg',
  Zapier: '/icons/zapier.svg',
  Airtable: '/icons/airtable.svg',
  Notion: '/icons/notion.svg',
  Make: '/icons/make.svg',
  Figma: '/icons/figma.svg',
  Adalo: '/icons/adalo.svg',
  Glide: '/icons/glide.svg',
  Softr: '/icons/softr.svg',
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

        <div className="mt-12 space-y-12">
          {Object.entries(about.skills).map(
            ([category, skills], categoryIndex) => (
              <div key={category}>
                <ScrollReveal delay={0.5 + categoryIndex * 0.1}>
                  <h3 className="text-2xl font-bold text-center text-foreground mb-8">{category}</h3>
                </ScrollReveal>
                <Card className="bg-card/50">
                  <CardContent className="p-6">
                    <TooltipProvider>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                        {(skills as string[]).map((skill, skillIndex) => (
                          <Tooltip key={skill}>
                            <TooltipTrigger>
                              <ScrollReveal
                                delay={
                                  0.6 +
                                  categoryIndex * 0.1 +
                                  skillIndex * 0.05
                                }
                              >
                                <div className="group relative flex flex-col items-center justify-center gap-2 rounded-lg bg-background/50 p-4 transition-all duration-300 hover:scale-110 hover:bg-primary/10">
                                  {skillIcons[skill] ? (
                                    <Image
                                      src={skillIcons[skill]}
                                      alt={`${skill} icon`}
                                      width={40}
                                      height={40}
                                      className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                  ) : (
                                    <div className="h-10 w-10 flex items-center justify-center">
                                      <span className="text-3xl font-bold">?</span>
                                    </div>
                                  )}
                                  <span className="text-xs text-center font-semibold mt-1">{skill}</span>
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
              </div>
            )
          )}
        </div>
      </ScrollReveal>
    </div>
  );
}
