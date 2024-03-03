import Image from 'next/image';

import { DashboardCard } from '@/app/components';
import styles from '@/styles/dashboard/countries.module.scss';
import WorldMap from '@/assets/images/world.png';

const data = [
  {
    id: 1,
    name: 'Canada',
    number: 4,
  },
  {
    id: 2,
    name: 'USA',
    number: 4,
  },
  {
    id: 3,
    name: 'Italy',
    number: 2,
  },
  {
    id: 4,
    name: 'Ukraine',
    number: 2,
  },
  {
    id: 5,
    name: 'Spain',
    number: 2,
  },
];

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <DashboardCard title="Countries of companies">
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {data.map(({ id, name, number }) => (
            <li className={styles.listItem} key={id}>
              {name} - {number}
            </li>
          ))}
        </ul>
        <Image
          className={styles.img}
          src={WorldMap}
          width={395}
          height={260}
          alt="World map"
        />
      </div>
    </DashboardCard>
  );
}
