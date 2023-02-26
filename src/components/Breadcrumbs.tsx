'use client';

import { useSelectedLayoutSegments } from 'next/navigation';

export default function Breadcrumbs() {
  const segments = useSelectedLayoutSegments();

  return (
    <ul>
      {segments.map((segment, index) => (
        <li key={index}>{segment}</li>
      ))}
    </ul>
  );
}
