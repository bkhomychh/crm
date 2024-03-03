import {
  DashboardCard,
  SummaryTable,
  SummaryTableCell,
  SummaryTableHeader,
} from '@/app/components';
import companyImg from '@/assets/images/company.png';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <DashboardCard title="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        <tr>
          <SummaryTableCell imgSrc={companyImg}>
            Costco Wholesale
          </SummaryTableCell>
          <SummaryTableCell>Norem ipsum dolor </SummaryTableCell>
          <SummaryTableCell align="center">-40%</SummaryTableCell>
        </tr>
        <tr>
          <SummaryTableCell imgSrc={companyImg}>
            Costco Wholesale
          </SummaryTableCell>
          <SummaryTableCell>Norem ipsum dolor </SummaryTableCell>
          <SummaryTableCell align="center">-40%</SummaryTableCell>
        </tr>
        <tr>
          <SummaryTableCell imgSrc={companyImg}>
            Costco Wholesale
          </SummaryTableCell>
          <SummaryTableCell>Norem ipsum dolor </SummaryTableCell>
          <SummaryTableCell align="center">-40%</SummaryTableCell>
        </tr>
        <tr>
          <SummaryTableCell imgSrc={companyImg}>
            Costco Wholesale
          </SummaryTableCell>
          <SummaryTableCell>Norem ipsum dolor </SummaryTableCell>
          <SummaryTableCell align="center">-40%</SummaryTableCell>
        </tr>
        <tr>
          <SummaryTableCell imgSrc={companyImg}>
            Costco Wholesale
          </SummaryTableCell>
          <SummaryTableCell>Norem ipsum dolor </SummaryTableCell>
          <SummaryTableCell align="center">-40%</SummaryTableCell>
        </tr>
        <tr>
          <SummaryTableCell imgSrc={companyImg}>
            Costco Wholesale
          </SummaryTableCell>
          <SummaryTableCell>Norem ipsum dolor </SummaryTableCell>
          <SummaryTableCell align="center">-40%</SummaryTableCell>
        </tr>
        <tr>
          <SummaryTableCell imgSrc={companyImg}>
            Costco Wholesale
          </SummaryTableCell>
          <SummaryTableCell>Norem ipsum dolor </SummaryTableCell>
          <SummaryTableCell align="center">-40%</SummaryTableCell>
        </tr>
      </SummaryTable>
    </DashboardCard>
  );
}
