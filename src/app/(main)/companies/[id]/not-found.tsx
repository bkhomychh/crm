import Link from 'next/link';

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div>
      <p>Could not found the company</p>
      <Link href="/companies">Back to companies</Link>
    </div>
  );
}
