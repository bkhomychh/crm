import '@/assets/styles/globals.css';

import { Header, Sidebar } from '@/components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />

        <div className="wrapper">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
