import StatusLabel, { Status } from '../components/status-label';
import { headers } from 'next/headers';

export default function Home() {
  return (
    <div>
      <h1 className="text-xl">Home</h1>
      <StatusLabel status={Status.ACTIVE} />
      <StatusLabel status={Status.NOT_ACTIVE} />
      <StatusLabel status={Status.PENDING} />
      <StatusLabel status={Status.SUSPENDED} />
    </div>
  );
}
