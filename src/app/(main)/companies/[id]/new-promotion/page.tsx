import { NewPromotionForm } from '@/app/components';
import styles from '@/styles/companies/[id]/new-promotion/page.module.scss';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className={styles.wrapper}>
      <NewPromotionForm />
    </div>
  );
}
