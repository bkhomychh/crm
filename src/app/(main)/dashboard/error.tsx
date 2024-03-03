'use client';

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <p>Something went wrong. {error.message}</p>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
