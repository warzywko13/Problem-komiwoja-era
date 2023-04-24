import React, { useRef, useEffect } from 'react';

export const Canvas = ({ points, startPoint }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const draw = (ctx, startPoint, scale) => {
      ctx.beginPath();
      ctx.moveTo(startPoint.x + points[0].x * scale, startPoint.y - points[0].y * scale);
      points.slice(1).forEach(point => { 
        ctx.lineTo(startPoint.x + point.x * scale, startPoint.y - point.y * scale);
      });
      ctx.stroke();
      ctx.closePath();
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    const scale = Math.min(width / 12, height / 9);
    const scaleStartPoint = { x: (width - scale * 12) / 2, y: (height + scale * 9) / 2 };
    
    ctx.lineWidth = 15;
    ctx.strokeStyle = "#ffffff";
    ctx.strokeRect(50, 50, 200, 150);

    ctx.beginPath();
    for (let y = 0.5; y < height; y += 10) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
  
    for (let x = 0.5; x < width; x += 10) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }

    ctx.strokeStyle = '#000000';
    ctx.stroke();
    
    draw(ctx, scaleStartPoint, scale);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.stroke();

  }, [points]);
    
  return <canvas ref={canvasRef} width={400} height={400} />;
};