import React from 'react';

export default function Home() {
  // Access the public variable directly from `process.env`
  const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <div>
      <h1>Environment Variable Showcase</h1>
      <p>
        <strong>Public API URL:</strong> {publicApiUrl}
      </p>
      <p>
        This variable is prefixed with <code>NEXT_PUBLIC_</code>, so it is
        accessible from the client-side code.
      </p>
    </div>
  );
}
