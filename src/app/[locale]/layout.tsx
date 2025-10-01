
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import '../globals.css';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: {
    default: 'Amour Akowakou | Fullstack Developer',
    template: '%s | Amour Akowakou',
  },
  description:
    'Fullstack developer — Django, Node.js, Laravel, React/Next.js. Transforming visions into reality with code & design.',
  openGraph: {
    title: 'Amour Akowakou | Fullstack Developer',
    description:
      'Fullstack developer — Django, Node.js, Laravel, React/Next.js. Transforming visions into reality with code & design.',
    url: 'https://your-domain.com', // To be updated with actual domain
    siteName: 'Amour Akowakou Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amour Akowakou | Fullstack Developer',
    description:
      'Fullstack developer — Django, Node.js, Laravel, React/Next.js. Transforming visions into reality with code & design.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const locales = ['en', 'fr'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}


export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head />
      <body
        suppressHydrationWarning={true}
        className="min-h-screen bg-background font-body antialiased selection:bg-primary selection:text-primary-foreground"
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <div className="relative flex min-h-dvh flex-col bg-background">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
