import {
  DashboardCard,
  SummaryTable,
  SummaryTableCell,
  SummaryTableHeader,
} from '@/app/components';
import companyImg from '@/assets/images/company.png';
import { getSummarySales } from '@/lib/api';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummarySales();

  return (
    <DashboardCard title="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.slice(0, 6).map(({ id, companyTitle, sold, income }) => (
          <tr key={id}>
            <SummaryTableCell imgSrc={companyImg}>
              {companyTitle}
            </SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">${income}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
