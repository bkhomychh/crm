'use client';

import { useRouter } from 'next/navigation';

import {
  Button,
  CompaniesTable,
  CompaniesTableHeader,
  CompaniesTableRow,
  ToolBar,
} from '@/app/components';
import { Status } from '@/app/components/StatusLabel';
import companyImg from '@/assets/images/company.png';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();

  return (
    <>
      <ToolBar>
        <Button onClick={() => router.push('/companies/new')}>
          Add company
        </Button>
      </ToolBar>
      <CompaniesTable
        headers={
          <>
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
          </>
        }
      >
        <CompaniesTableRow
          category="Products"
          company={{ name: 'Costco Wholesale', imgSrc: companyImg }}
          status={Status.ACTIVE}
          promotion={true}
          country="USA"
          data="01.03.2024"
        />
        <CompaniesTableRow
          category="Products"
          company={{ name: 'Costco Wholesale', imgSrc: companyImg }}
          status={Status.NOT_ACTIVE}
          promotion={false}
          country="USA"
          data="01.03.2024"
        />
        <CompaniesTableRow
          category="Products"
          company={{ name: 'Costco Wholesale', imgSrc: companyImg }}
          status={Status.PENDING}
          promotion={true}
          country="USA"
          data="01.03.2024"
        />
        <CompaniesTableRow
          category="Products"
          company={{ name: 'Costco Wholesale', imgSrc: companyImg }}
          status={Status.SUSPENDED}
          promotion={false}
          country="USA"
          data="01.03.2024"
        />
      </CompaniesTable>
    </>
  );
}
