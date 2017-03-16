import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <h1 className="hello-label">Hello, world!</h1>
      {children}
    </div>
  );
}
