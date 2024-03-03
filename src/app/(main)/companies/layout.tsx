import { ToolBar } from '@/app/components';

export interface LayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
}

export default function Layout({ header, children }: LayoutProps) {
  return (
    <>
      {header}
      <main>
        <ToolBar />
        {children}
      </main>
    </>
  );
}
