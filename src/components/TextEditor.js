import React from 'react';

export default function TextEditor({ text, onChange }) {
  return (
    <textarea
      style={{ width: '100%', height: '200px', fontSize: '1rem' }}
      value={text}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
