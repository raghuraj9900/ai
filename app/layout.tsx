import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DocGen - Revolutionary Documentation for Developers',
  description: 'Generate stunning, AI-powered README files and documentation for your GitHub repositories in seconds.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1e1e1e',
              color: '#e0e0e0',
              border: '1px solid rgba(0, 246, 255, 0.2)',
            },
          }}
        />
      </body>
    </html>
  );
}
