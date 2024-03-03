import { Plus_Jakarta_Sans } from 'next/font/google';

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

import '@/assets/styles/globals.css';

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
