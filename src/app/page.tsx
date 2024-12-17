import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-xl">Home</h1>
      <Link href="/companies">Companies</Link>
      <br />
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
