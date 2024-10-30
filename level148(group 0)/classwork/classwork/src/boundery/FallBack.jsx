import React from 'react';

export default function FallBack({ resetErrorBoundary }) {
  return (
    <div>
      <p>error</p>
      <button onClick={resetErrorBoundary}>reset</button> 
    </div>
  )
}
