import { useRef, useEffect } from 'react'

const Canvas = props => {
    const {points} = props
  
    const canvasRef = useRef(null)
  
    const draw = (ctx, start_point, scale) => {
      points.forEach( item => { 
        ctx.lineTo(item.x * scale + start_point[0], item.y * -1 * scale + start_point[1]);
      })
    }
      
    useEffect(() => {
      const canvas = canvasRef.current
      ,ctx = canvas.getContext('2d')
  
      const w = canvas.width, 
      h = canvas.height
      const start_point = [0, h]
      const scale = 30
      
      ctx.lineWidth=15;
      ctx.strokeStyle = "#ffffff";
      ctx.rect(50,50,200,150);
      ctx.stroke();
  
      ctx.beginPath()
      for (var y = 0.5; y < h; y += 10) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
   
      for (var x = 0.5; x < w; x += 10) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
  
      ctx.strokeStyle = '#000000'
      ctx.stroke()
      ctx.closePath()
  
      ctx.beginPath()
      draw(ctx, start_point, scale)
      ctx.strokeStyle = 'blue'
      ctx.lineWidth = 3
      ctx.stroke()
      ctx.closePath()
  
    }, [draw])
      
    return <canvas ref={canvasRef} width={400} height={400} />
}

export default Canvas