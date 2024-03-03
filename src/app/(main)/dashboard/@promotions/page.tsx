import {
  DashboardCard,
  SummaryTable,
  SummaryTableCell,
  SummaryTableHeader,
} from '@/app/components';

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
          <SummaryTableCell>Costco Wholesale</SummaryTableCell>
          <SummaryTableCell>Norem ipsum dolor </SummaryTableCell>
          <SummaryTableCell align="center">-40%</SummaryTableCell>
        </tr>
        <tr>
          <SummaryTableCell>Costco Wholesale</SummaryTableCell>
          <SummaryTableCell>Norem ipsum dolor </SummaryTableCell>
          <SummaryTableCell align="center">-40%</SummaryTableCell>
        </tr>
        <tr>
          <SummaryTableCell>Costco Wholesale</SummaryTableCell>
          <SummaryTableCell>Norem ipsum dolor </SummaryTableCell>
          <SummaryTableCell align="center">-40%</SummaryTableCell>
        </tr>
        <tr>
          <SummaryTableCell>Costco Wholesale</SummaryTableCell>
          <SummaryTableCell>Norem ipsum dolor </SummaryTableCell>
          <SummaryTableCell align="center">-40%</SummaryTableCell>
        </tr>
        <tr>
          <SummaryTableCell>Costco Wholesale</SummaryTableCell>
          <SummaryTableCell>Norem ipsum dolor </SummaryTableCell>
          <SummaryTableCell align="center">-40%</SummaryTableCell>
        </tr>
        <tr>
          <SummaryTableCell>Costco Wholesale</SummaryTableCell>
          <SummaryTableCell>Norem ipsum dolor </SummaryTableCell>
          <SummaryTableCell align="center">-40%</SummaryTableCell>
        </tr>
        <tr>
          <SummaryTableCell>Costco Wholesale</SummaryTableCell>
          <SummaryTableCell>Norem ipsum dolor </SummaryTableCell>
          <SummaryTableCell align="center">-40%</SummaryTableCell>
        </tr>
      </SummaryTable>
    </DashboardCard>
  );
}
