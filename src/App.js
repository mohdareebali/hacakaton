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

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: 20 }}>
      <h2>Smart Capture & Editable Text</h2>

      <div>
        <h3>Capture from Camera</h3>
        <CameraCapture onCapture={handleImageInput} />
      </div>

      <div style={{ margin: '20px 0' }}>
        <h3>Or Upload an Image</h3>
        <ImageUploader onUpload={handleImageInput} />
      </div>

      {loading && <p>Processing image, please wait...</p>}

      {imageData && (
        <div>
          <h3>Captured Image</h3>
          <img src={imageData} alt="Captured" style={{ maxWidth: '100%' }} />
        </div>
      )}

      {extractedText && (
        <div style={{ marginTop: 20 }}>
          <h3>Extracted Text (Editable)</h3>
          <TextEditor text={extractedText} onChange={setExtractedText} />
        </div>
      )}
    </div>
  );
}

export default App;
