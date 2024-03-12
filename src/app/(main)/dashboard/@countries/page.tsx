import Image from 'next/image';

import { DashboardCard } from '@/app/components';
import styles from '@/styles/dashboard/countries.module.scss';
import WorldMap from '@/assets/images/world.png';
import { getCompanies, getCountries } from '@/lib/api';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const countries = await getCountries();
  const companies = await getCompanies();

  // const counts = getCountById(companies, 'countryId');
  console.log(countries);
  console.log(companies);

  return (
    <DashboardCard title="Countries of companies">
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {countries.map(({ id, title }) => (
            <li className={styles.listItem} key={id}>
              {title} - {id}
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
