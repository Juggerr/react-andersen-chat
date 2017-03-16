import React from 'react';
import { PageHeader } from 'react-bootstrap';


export default function Layout({ children }) {
  return (
    <div style={{margin: '0 auto', width: '700px'}}>
      <PageHeader className="chat-label">The Chat</PageHeader>
      {children}
    </div>
  );
}
