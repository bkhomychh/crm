import clsx from 'clsx';

import styles from '@/styles/companies/status-label.module.scss';
import { CompanyStatus } from '@/lib/api';

export interface ActiveLabelProps {
  status: CompanyStatus;
}

export default function StatusLabel({ status }: ActiveLabelProps) {
  const getLabelText = () => {
    switch (status) {
      case CompanyStatus.ACTIVE:
        return 'Active';
      case CompanyStatus.NOT_ACTIVE:
        return 'Not active';
      case CompanyStatus.PENDING:
        return 'Pending';
      case CompanyStatus.SUSPENDED:
        return 'Suspended';
    }
  };

  return (
    <div
      className={clsx(
        styles.wrapper,
        status === CompanyStatus.ACTIVE && styles.success,
        status === CompanyStatus.NOT_ACTIVE && styles.error,
        status === CompanyStatus.PENDING && styles.warning,
        status === CompanyStatus.SUSPENDED && styles.info,
      )}
    >
      <div className={styles.dot} />
      {getLabelText()}
    </div>
  );
}
