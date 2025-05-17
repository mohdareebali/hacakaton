import React from 'react';

export default function ImageUploader({ onUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onUpload(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <input type="file" accept="image/*" onChange={handleFileChange} />
  );
}
