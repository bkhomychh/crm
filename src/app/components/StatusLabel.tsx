import clsx from 'clsx';

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
  return;
  return (
    <div
      className={clsx(
        'inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium capitalize',
        status === Status.ACTIVE && 'text-green-700 bg-green-100',
        status === Status.NOT_ACTIVE && 'text-red-700 bg-red-100',
        status === Status.PENDING && 'text-orange-700 bg-orange-100',
        status === Status.SUSPENDED && 'text-blue-700 bg-blue-100',
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {status}
    </div>
  );
}
