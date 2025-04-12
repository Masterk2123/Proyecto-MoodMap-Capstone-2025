import { useEffect } from 'react';
import { Slot } from 'expo-router';

export default function RootLayoutWeb() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      html, body, #root {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return <Slot />;
}
