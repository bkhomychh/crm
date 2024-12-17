'use client';

import { useQuery } from '@tanstack/react-query';

import { CompaniesTableRow, CompaniesTableHeader } from '@/components';
import { getCompanies } from '@/lib/api';
import styles from '@/styles/companies/companies-table.module.scss';
import companyImg from '@/assets/images/company.png';

export interface CompaniesTableProps {}

export default function CompaniesTable({}: CompaniesTableProps) {
  const { data } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies(),
    staleTime: 1000 * 10,
  });

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <CompaniesTableHeader>Category</CompaniesTableHeader>
            <CompaniesTableHeader>Company</CompaniesTableHeader>
            <CompaniesTableHeader align="center">Status</CompaniesTableHeader>
            <CompaniesTableHeader align="center">
              Promotion
            </CompaniesTableHeader>
            <CompaniesTableHeader align="center">Country</CompaniesTableHeader>
            <CompaniesTableHeader align="center">
              Joined data
            </CompaniesTableHeader>
          </tr>
        </thead>

        <tbody>
          {data?.map((company) => {
            const {
              id,
              title,
              categoryTitle,
              status,
              hasPromotions,
              countryTitle,
              joinedDate,
              avatar,
            } = company;

            return (
              <CompaniesTableRow
                key={id}
                id={id}
                category={categoryTitle}
                company={{ name: title, imgSrc: avatar }}
                status={status}
                promotion={hasPromotions}
                country={countryTitle}
                date={joinedDate}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
