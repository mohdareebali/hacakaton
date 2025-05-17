import React, { useRef, useState } from 'react';

export default function CameraCapture({ onCapture }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraOn, setCameraOn] = useState(false);

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        setCameraOn(true);
      })
      .catch(err => alert('Camera error: ' + err.message));
  };

  const capturePhoto = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, 320, 240);
    const dataUrl = canvasRef.current.toDataURL('image/png');
    onCapture(dataUrl);
  };

  return (
    <div>
      {!cameraOn && <button onClick={startCamera}>Start Camera</button>}
      <video ref={videoRef} autoPlay width="320" height="240" style={{ display: cameraOn ? 'block' : 'none' }} />
      <canvas ref={canvasRef} width="320" height="240" style={{ display: 'none' }} />
      {cameraOn && <button onClick={capturePhoto}>Capture Photo</button>}
    </div>
  );
}
