import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Mantenimiento Autónomo',
  description: 'App para el Mantenimiento Autónomo de FIRPLAK',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
