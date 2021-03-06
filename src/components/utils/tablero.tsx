export const BIG_RADIO = 180;
export const SMALL_RADIO = 60;
export const FACTOR = 20;

export const bigRadio = (height: number) => {
  return height / 2 - height / 64;
};
export const smallRadio = (height: number) => {
  return height / 2 - Math.ceil(height / 2.75);
};

export const factor = height => {
  return height / 2 / Math.pow(2, 3);
};

export const drawTablero = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  ctx.strokeStyle = '#d3d3d3';
  ctx.fillStyle = '#ffffff';
  drawCirculoExterior(ctx, width, height);
  for (let i = bigRadio(height) - factor(height); i >= smallRadio(height); i -= factor(height)) {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.arc(width / 2, height / 2, i, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }
};

export const drawCirculoInterior = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#d3d3d3';
  ctx.fillStyle = '#ffffff';
  ctx.arc(width / 2, height / 2, smallRadio(height), 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
};

export const drawCirculoExterior = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#d3d3d3';
  ctx.fillStyle = '#f5f8fb';
  ctx.arc(width / 2, height / 2, bigRadio(height), 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
};

export const drawArea = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  let ai = 22.5;
  for (let i = 0; i <= 360; i += 22.5) {
    area(ctx, width / 2, height / 2, bigRadio(height), i, i + ai);
  }

};

export const drawScale = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  scale(ctx, width / 2,height);
};

 const scale = (ctx: CanvasRenderingContext2D, x, height: number) => {
   let scale = 20;
   for (let i = bigRadio(height) - factor(height); i >= smallRadio(height); i -= factor(height)) {
     ctx.save();
     ctx.beginPath();
     ctx.fillStyle = '#736b6a';
     ctx.font = '10px Verdana';
     ctx.fillText(scale + '', x, i - smallRadio(height) + factor(height));
     ctx.restore();
     scale += 20;
   }
 };


export const area = (ctx: CanvasRenderingContext2D, x: number, y: number, radio: number, anguloInicial: number, anguloFinal: number) => {
  const ap = (Math.PI / 180) * anguloInicial;
  const af = (Math.PI / 180) * anguloFinal;

  // calculo de coordenadas del punto de partida
  const Xap = x + radio * Math.cos(ap);
  const Yap = y + radio * Math.sin(ap);

  ctx.save();

  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.strokeStyle = '#d3d3d3';
  ctx.fillStyle = '#ffffff';
  ctx.moveTo(x, y);
  ctx.lineTo(Xap, Yap);
  ctx.arc(x, y, radio, ap, af);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

// export const nameArea();
