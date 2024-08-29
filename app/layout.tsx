import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Paksi's learning project</title>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}