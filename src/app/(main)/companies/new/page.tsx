import { NewCompanyForm } from '@/app/components';
import styles from '@/styles/companies/new/page.module.scss';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className={styles.wrapper}>
      <NewCompanyForm />
    </div>
  );
}
