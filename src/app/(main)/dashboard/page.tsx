import { Header } from '@/app/components';
import styles from '@/styles/dashboard/page.module.scss';
import clsx from 'clsx';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header title="Dashboard" />
    </>
  );
}
