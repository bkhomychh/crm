import { Sidebar } from '@/components';
import mainStyles from '@/styles/main.module.scss';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={mainStyles.wrapper}>
      <Sidebar />

      <div className={mainStyles.container}>{children}</div>
    </div>
  );
}
