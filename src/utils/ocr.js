import Tesseract from 'tesseract.js';

export async function recognizeText(image) {
  const result = await Tesseract.recognize(image, 'eng', {
    logger: m => console.log(m),
  });
  return result.data.text;
}
