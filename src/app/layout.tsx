import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          'selection:bg-primary selection:text-primary-foreground'
        )}
      >
        <Providers>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
