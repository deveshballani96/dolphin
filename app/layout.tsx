import '@/app/ui/global.css';
import { barlowSemiCondensed } from '@/app/ui/fonts';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlowSemiCondensed.className} antialiased`}>
        {children}

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
