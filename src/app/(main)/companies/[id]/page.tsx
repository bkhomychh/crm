'use client';

import { useEffect } from 'react';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { id: string };
}

// export function generateStaticParams() {
// return [{ id: '1' }, { id: '2' }, { id: '3' }];
// }

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);

  return (
    <>
      <h1>Company ({params.id})</h1>
      <p>{new Date().toLocaleTimeString()}</p>
    </>
  );
}
