import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Canduman Community Alliance Church',
    template: '%s | Canduman Community Alliance Church',
  },
  description:
    'Canduman Community Alliance Church is a Christ-centered church in Mandaue City committed to worship, prayer, discipleship, and community outreach.',
  keywords: [
    'Canduman Community Alliance Church',
    'CCAC',
    'Mandaue church',
    'Christian church Cebu',
    'Sunday sermons',
    'church events',
  ],
  applicationName: 'Canduman Community Alliance Church',
  openGraph: {
    title: 'Canduman Community Alliance Church',
    description:
      'Join Canduman Community Alliance Church for worship, biblical teaching, discipleship, and fellowship in Mandaue City.',
    siteName: 'Canduman Community Alliance Church',
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canduman Community Alliance Church',
    description:
      'A Christ-centered church family in Mandaue City focused on worship, prayer, and discipleship.',
  },
  category: 'religion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-PH"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
