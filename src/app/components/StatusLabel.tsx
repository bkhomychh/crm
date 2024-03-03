import clsx from 'clsx';

import styles from '@/styles/companies/status-label.module.scss';

export enum Status {
  ACTIVE = 'active',
  NOT_ACTIVE = 'not active',
  PENDING = 'pending',
  SUSPENDED = 'suspended',
}

export interface ActiveLabelProps {
  status: Status;
}

export default function StatusLabel({ status }: ActiveLabelProps) {
  const getLabelText = () => {
    switch (status) {
      case Status.ACTIVE:
        return 'Active';
      case Status.NOT_ACTIVE:
        return 'Not active';
      case Status.PENDING:
        return 'Pending';
      case Status.SUSPENDED:
        return 'Suspended';
    }
  };

  return (
    <div
      className={clsx(
        styles.wrapper,
        status === Status.ACTIVE && styles.success,
        status === Status.NOT_ACTIVE && styles.error,
        status === Status.PENDING && styles.warning,
        status === Status.SUSPENDED && styles.info,
      )}
    >
      <div className={styles.dot} />
      {getLabelText()}
    </div>
  );
}
