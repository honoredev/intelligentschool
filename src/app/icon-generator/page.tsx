"use client";
import { useEffect } from 'react';

export default function IconGenerator() {
  useEffect(() => {
    const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
    const iconGrid = document.getElementById('iconGrid');
    
    sizes.forEach(size => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      
      ctx!.fillStyle = '#eab308';
      ctx!.fillRect(0, 0, size, size);
      
      ctx!.fillStyle = 'white';
      ctx!.font = `bold ${size/4}px Arial`;
      ctx!.textAlign = 'center';
      ctx!.textBaseline = 'middle';
      ctx!.fillText('BS', size/2, size/2);
      
      const container = document.createElement('div');
      container.className = 'text-center p-4 border rounded';
      container.innerHTML = `<h3 class="font-bold mb-2">${size}x${size}</h3>`;
      container.appendChild(canvas);
      
      const link = document.createElement('a');
      link.download = `icon-${size}x${size}.png`;
      link.href = canvas.toDataURL();
      link.textContent = 'Download';
      link.className = 'inline-block mt-2 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600';
      
      container.appendChild(link);
      iconGrid?.appendChild(container);
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">BizSmart PWA Icon Generator</h1>
      <p className="mb-6 text-gray-600">Generate placeholder icons. Replace with actual BizSmart logo.</p>
      <div id="iconGrid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"></div>
    </div>
  );
}