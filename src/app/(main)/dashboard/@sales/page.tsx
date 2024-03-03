import {
  DashboardCard,
  SummaryTable,
  SummaryTableCell,
  SummaryTableHeader,
} from '@/app/components';
import companyImg from '@/assets/images/company.png';

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

export interface PageProps {}

export default function Page({}: PageProps) {
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
        {data.map(({ id, name, sold, income }) => (
          <tr key={id}>
            <SummaryTableCell imgSrc={companyImg}>{name}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">${income}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
