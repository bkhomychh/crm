import {
  DashboardCard,
  SummaryTable,
  SummaryTableCell,
  SummaryTableHeader,
} from '@/app/components';
import { getPromotions } from '@/lib/api';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getPromotions();

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
        {data
          .slice(0, 7)
          .map(({ id, companyTitle, discount, title, avatar }) => (
            <tr key={id}>
              <SummaryTableCell imgSrc={avatar}>
                {companyTitle}
              </SummaryTableCell>
              <SummaryTableCell>{title}</SummaryTableCell>
              <SummaryTableCell align="center">-{discount}%</SummaryTableCell>
            </tr>
          ))}
      </SummaryTable>
    </DashboardCard>
  );
}
