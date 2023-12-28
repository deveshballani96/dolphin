import '@/app/ui/global.css';
import { barlowSemiCondensed } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlowSemiCondensed.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
