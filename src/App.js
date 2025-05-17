import React, { useState } from 'react';
import CameraCapture from './components/CameraCapture';
import ImageUploader from './components/ImageUploader';
import TextEditor from './components/TextEditor';
import { recognizeText } from './utils/ocr';

function App() {
  const [imageData, setImageData] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageInput = async (dataUrl) => {
    setImageData(dataUrl);
    setLoading(true);
    try {
      const text = await recognizeText(dataUrl);
      setExtractedText(text);
    } catch (err) {
      alert('OCR failed: ' + err.message);
    }
    setLoading(false);
  };

  return     
}

export default App;
