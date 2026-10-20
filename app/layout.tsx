import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Mumbai Elite Real Estate | Open Land & Outright Building Deals',
  description: 'Mumbai Elite Real Estate specializes in open land and outright building deals in Mumbai. Explore property investment opportunities, land transactions, and building purchase options with professional real estate assistance.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Mumbai Elite Real Estate | Open Land & Outright Building Deals',
    description: 'Mumbai Elite Real Estate specializes in open land and outright building deals in Mumbai. Explore property investment opportunities, land transactions, and building purchase options with professional real estate assistance.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mumbai Elite Real Estate | Open Land & Outright Building Deals',
    description: 'Mumbai Elite Real Estate specializes in open land and outright building deals in Mumbai. Explore property investment opportunities, land transactions, and building purchase options with professional real estate assistance.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
