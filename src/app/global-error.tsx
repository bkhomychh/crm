'use client';

export interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <p>Something globally went wrong :(</p>
      </body>
    </html>
  );
}
