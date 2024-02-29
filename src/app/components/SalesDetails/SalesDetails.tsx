import Image from 'next/image';

import styles from './SalesDetails.module.scss';
import mainStyles from '@/scss/main.module.scss';
import clsx from 'clsx';

const data = [
  {
    id: 1,
    name: 'Costco Wholesale',
    sold: 459,
    income: 600,
  },
  {
    id: 2,
    name: 'Costco Wholesale',
    sold: 459,
    income: 600,
  },
  {
    id: 3,
    name: 'Costco Wholesale',
    sold: 459,
    income: 600,
  },
  {
    id: 4,
    name: 'Costco Wholesale',
    sold: 459,
    income: 600,
  },
  {
    id: 5,
    name: 'Costco Wholesale',
    sold: 459,
    income: 600,
  },
  {
    id: 6,
    name: 'Costco Wholesale',
    sold: 459,
    income: 600,
  },
];

export default function SalesDetails() {
  return (
    <div className={styles.wrapper}>
      <h2 className={clsx(mainStyles.sectionTitle, styles.title)}>
        Sales details
      </h2>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Company</th>
            <th>Sold</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data.map(({ id, name, sold, income }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{sold}</td>
              <td>${income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
