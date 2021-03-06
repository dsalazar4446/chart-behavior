import { bigRadio, factor, smallRadio } from './tablero';
const bussinessDataFactor = 4.1;
export const drawPersonalMetrics = (ctx: CanvasRenderingContext2D, personalReport: Array<any>, width: number, height: number) => {
  let a = 22.5;
  personalReport.forEach((elem: any) => {
    elem.areas.map((area: any) => {
      // const percent = Math.floor(parseFloat(area.value) * (bigRadio(height)) - smallRadio(height)) / (bigRadio(height));

      const percent = Math.floor((parseFloat(area.value) * 100) / smallRadio(height));

      const radio = percent + bigRadio(height) - factor(height) * 4.3;

      personalReportArea(ctx, width / 2, height / 2, radio, a - 22.5, a, area.value);
      a += 22.5;
    });
  });
};
const personalReportArea = (ctx: CanvasRenderingContext2D, x: number, y: number, radio: number, anguloInicial: number, anguloFinal: number, percent: number) => {
  const rojo = '#FF0000';
  const naranja = '#E69138';
  const naranjaClaro = '#F9CB9C';
  const verdeClaro = '#D9EAD3';
  const verde = '#93C47D';

  ctx.save();
  const ap = (Math.PI / 180) * anguloInicial;
  const af = (Math.PI / 180) * anguloFinal;
  // calculo de coordenadas del punto de partida
  const Xap = x + radio * Math.cos(ap);
  const Yap = y + radio * Math.sin(ap);
  ctx.lineWidth = 2;
  ctx.beginPath();
  if (percent >= 0 && percent <= 20) {
    ctx.fillStyle = rojo;
  }
  if (percent >= 21 && percent <= 40) {
    ctx.fillStyle = naranja;
  }
  if (percent >= 41 && percent <= 60) {
    ctx.fillStyle = naranjaClaro;
  }
  if (percent >= 61 && percent <= 80) {
    ctx.fillStyle = verdeClaro;
  }
  if (percent >= 81 && percent <= 100) {
    ctx.fillStyle = verde;
  }

  ctx.moveTo(x, y);
  ctx.lineTo(Xap, Yap);
  ctx.arc(x, y, radio, ap, af);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

export const drawCompanyMetrics = (ctx: CanvasRenderingContext2D, companyReport: Array<any>, width: number, height: number) => {
  let af = 22.5;
  companyReport.forEach((elem: any) => {
    elem.areas.map((area: any) => {
      const percent = Math.floor((parseFloat(area.value) * 100) / smallRadio(height));

      const radio = percent + bigRadio(height) - factor(height) * 4.3;

      // this.nameArea(this.width/2, this.height/2,bigRadio(height),af-22.5,area.sufix)
      for (let i = 0; i <= radio; i += bussinessDataFactor) {
        companyReportAtrea(ctx, width / 2, height / 2, i, af - 22.5, af);
      }
      af += 22.5;
    });
  });
};

const companyReportAtrea = (ctx: CanvasRenderingContext2D, x: number, y: number, radio: number, anguloInicial: number, anguloFinal: number) => {
  if (ctx) {
    ctx.save();
    ctx.strokeStyle = '#00e4ab7a';
    const ap = (Math.PI / 180) * anguloInicial;
    const af = (Math.PI / 180) * anguloFinal;
    // calculo de coordenadas del punto de partida
    // const Xap = x + radio * Math.cos(ap);
    // const Yap = y + radio * Math.sin(ap);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, radio, ap, af);
    ctx.stroke();
    ctx.restore();
  }
};

export const drawLabels = (ctx: CanvasRenderingContext2D, width: number, height: number, companyReport: Array<any>, personalReport: Array<any>) => {
  // // console.log('drawLabels', companyReport);

  let ai = 22.5;
  if (companyReport && companyReport.length  > 0) {
    companyReport.forEach((elem: any) => {
      elem.areas.map((area: any) => {
        // // console.log(area.sufix);

        nameArea(ctx, width / 2, height / 2, bigRadio(height), ai, height, area.sufix);
        ai += 22.5;
      });
    });
  } else {
    // // console.log('entre');

    personalReport.forEach((elem: any) => {
      elem.areas.map((area: any) => {
        // // console.log(area.sufix);
        nameArea(ctx, width / 2, height / 2, bigRadio(height), ai, height, area.sufix);
        ai += 22.5;
      });
    });
  }
};

export const drawLabelPersonalChart = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  let ai = 22.5;
    labelPersonalChart(ctx, width / 2, height / 2, bigRadio(height), ai, height);
};

export const labelPersonalChart = (ctx: CanvasRenderingContext2D, x: number, y: number, radio: number, anguloInicial: number = 22.5, height: number) => {
  let angleText = (Math.PI / 180) * anguloInicial + 50;
  let xTex;
  let yTex;
  // Mentalidad Innovadora
  if (anguloInicial == 22.5) {
    xTex = x + (radio - factor(height)) * Math.cos(angleText)+5;
    yTex = y + (radio + factor(height)) * Math.sin(angleText) + 35+5;
    ctx.save();
    ctx.translate(xTex, yTex);
    ctx.rotate(-1.35);
    ctx.beginPath();
    ctx.fillStyle = '#948e8e';
    ctx.font = 'bold 8pt Verdana';
    ctx.fillText('Mentalidad', 0, 0);
    ctx.restore();
    xTex = x + (radio - factor(height)) * Math.cos(angleText) + 15;
    yTex = y + (radio + factor(height)) * Math.sin(angleText) + 39+5;
    ctx.save();
    ctx.translate(xTex, yTex);
    ctx.rotate(-1.35);
    ctx.beginPath();
    ctx.fillStyle = '#948e8e';
    ctx.font = 'bold 8pt Verdana';
    ctx.fillText('Innovadora', 0, 0);
    ctx.restore();
  }
  anguloInicial = 22.5 *2;
  angleText = (Math.PI / 180) * anguloInicial + 50;
  if (anguloInicial == 22.5*2) {
    xTex = x + (radio - factor(height)) * Math.cos(angleText)-12;
    yTex = y + (radio + factor(height)) * Math.sin(angleText)+12;
    ctx.save();
    ctx.translate(xTex, yTex);
    ctx.rotate(-1);
    ctx.beginPath();
    ctx.fillStyle = '#948e8e';
    ctx.font = 'bold 8pt Verdana';
    ctx.fillText('Mentalidad', 0, 0);
    ctx.restore();
    xTex = x + (radio - factor(height)) * Math.cos(angleText);
    yTex = y + (radio + factor(height)) * Math.sin(angleText)+13 ;
    ctx.save();
    ctx.translate(xTex, yTex);
    ctx.rotate(-1);
    ctx.beginPath();
    ctx.fillStyle = '#948e8e';
    ctx.font = 'bold 8pt Verdana';
    ctx.fillText('Ganadora', 0, 0);
    ctx.restore();
  }

  anguloInicial = 22.5 * 3;
  angleText = (Math.PI / 180) * anguloInicial + 50;
  if (anguloInicial == 22.5 * 3) {
    xTex = x + (radio - factor(height)) * Math.cos(angleText) - factor(height) / 1.2;
    yTex = y + (radio + factor(height)) * Math.sin(angleText) - factor(height) / 1.7;
    ctx.save();
    ctx.translate(xTex, yTex);
    ctx.rotate(-0.60);
    ctx.beginPath();
    ctx.fillStyle = '#948e8e';
    ctx.font = 'bold 8pt Verdana';
    ctx.fillText('Resilencia', 0, 0);
    ctx.restore();
    xTex = x + (radio - factor(height)) * Math.cos(angleText) - factor(height) / 2.3;
    yTex = y + (radio + factor(height)) * Math.sin(angleText) - factor(height) / 2.3;
    ctx.save();
    ctx.translate(xTex, yTex);
    ctx.rotate(-0.60);
    ctx.beginPath();
    ctx.fillStyle = '#948e8e';
    ctx.font = 'bold 8pt Verdana';
    ctx.fillText('Mental', 0, 0);
    ctx.restore();
  }

  anguloInicial = 22.5 * 4;
  angleText = (Math.PI / 180) * anguloInicial + 50;
  if (anguloInicial == 22.5 * 4) {
    xTex = x + (radio - factor(height)) * Math.cos(angleText) - factor(height) / 0.7;
    yTex = y + (radio + factor(height)) * Math.sin(angleText) - factor(height) / 0.8;
    ctx.save();
    ctx.translate(xTex, yTex);
    ctx.rotate(-0.15);
    ctx.beginPath();
    ctx.fillStyle = '#948e8e';
    ctx.font = 'bold 8pt Verdana';
    ctx.fillText('Mentalidad de', 0, 0);
    ctx.restore();
    xTex = x + (radio - factor(height)) * Math.cos(angleText) - factor(height) / 0.85;
    yTex = y + (radio + factor(height)) * Math.sin(angleText) - factor(height) / 1;
    ctx.save();
    ctx.translate(xTex, yTex);
    ctx.rotate(-0.15);
    ctx.beginPath();
    ctx.fillStyle = '#948e8e';
    ctx.font = 'bold 8pt Verdana';
    ctx.fillText('crecimiento', 0, 0);
    ctx.restore();
  }

  anguloInicial = 22.5 * 5;
  angleText = (Math.PI / 180) * anguloInicial + 50;
  if (anguloInicial == 22.5 * 5) {
    xTex = x + (radio - factor(height)) * Math.cos(angleText) - factor(height) / 0.6;
    yTex = y + (radio + factor(height)) * Math.sin(angleText) - factor(height) / 0.55;
    ctx.save();
    ctx.translate(xTex, yTex);
    ctx.rotate(0.15);
    ctx.beginPath();
    ctx.fillStyle = '#948e8e';
    ctx.font = 'bold 8pt Verdana';
    ctx.fillText('Conectado con', 0, 0);
    ctx.restore();
    xTex = x + (radio - factor(height)) * Math.cos(angleText) - factor(height) / 0.57;
    yTex = y + (radio + factor(height)) * Math.sin(angleText) - factor(height) / 0.65;
    ctx.save();
    ctx.translate(xTex, yTex);
    ctx.rotate(0.15);
    ctx.beginPath();
    ctx.fillStyle = '#948e8e';
    ctx.font = 'bold 8pt Verdana';
    ctx.fillText('mis emociones', 0, 0);
    ctx.restore();
  }

  anguloInicial = 22.5 * 6;
  label(ctx, x, y, radio, height, anguloInicial, 0.65,'Trabajo en', 'equipo', {x:0.78,y:0.48}, {x:0.8,y:0.58}, 7.5);
  anguloInicial = 22.5 * 7;
  label(ctx, x, y, radio, height, anguloInicial, 0.99, 'Relacion', 'con colegas', { x: 1, y: 0.5 }, { x: 0.78, y: 0.53 }, 7.5);
  anguloInicial = 22.5 * 8;
  label(ctx, x, y, radio, height, anguloInicial, 1.4, 'Manejando la', 'presion', { x: 1.5, y: 0.5 }, { x: 1.1, y: 0.65 }, 7.5);
  anguloInicial = 22.5 * 9;
  label(ctx, x, y, radio, height, anguloInicial, -1.4, 'Identidad', '', { x: 2, y: -2 }, { x: 0, y: 0 }, 7.5);
  anguloInicial = 22.5 * 10;
  label(ctx, x, y, radio, height, anguloInicial, -1, 'Valores', '', { x: 2, y: -1 }, { x: 0, y: 0 }, 7.5);
  anguloInicial = 22.5 * 11;
  label(ctx, x, y, radio, height, anguloInicial, -0.6, 'Satisfaccion en', 'el trabajo', { x: 1.1, y: -0.7 }, { x: 1.5, y: -0.6 }, 7.5);
  anguloInicial = 22.5 * 12;
  label(ctx, x, y, radio, height, anguloInicial, -0.2, 'Busqueda', '', { x: 2.3, y: -0.63 }, { x: 0, y: 0 }, 7.5);
  anguloInicial = 22.5 * 13;
  label(ctx, x, y, radio, height, anguloInicial, 0.2, 'Salud Fisica', '', { x: 2.3, y: -0.66 }, { x: 0, y: 0 }, 7.5);
  anguloInicial = 22.5 * 14;
  label(ctx, x, y, radio, height, anguloInicial, 0.65, 'Sueño', '', { x: -5, y: -0.8 }, { x: 0, y: 0 }, 7.5);
  anguloInicial = 22.5 * 15;
  label(ctx, x, y, radio, height, anguloInicial, 1, 'Cuerpo en', 'movimiento', { x: -2.5, y: -2 }, { x: -8, y: -2 }, 7.5);
  anguloInicial = 22.5 * 16;
  label(ctx, x, y, radio, height, anguloInicial, 1.4, 'Nutricion e', 'Hidatacion', { x: -1.8, y: -8 }, { x: -3.5, y: -5 }, 7.5);

};

const label = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radio,
  height,
  anguloInicial,
  rotation: number,
  label1,
  label2,
  factor1: { x: number; y: number },
  factor2: { x: number; y: number },
  fontSize: number = 8
) => {
  let xTex;
  let yTex;
  const angleText = (Math.PI / 180) * anguloInicial + 50;
  xTex = x + (radio - factor(height)) * Math.cos(angleText) - factor(height) / factor1.x;
  yTex = y + (radio + factor(height)) * Math.sin(angleText) - factor(height) / factor1.y;
  ctx.save();
  ctx.translate(xTex, yTex);
  ctx.rotate(rotation);
  ctx.beginPath();
  ctx.fillStyle = '#948e8e';
  ctx.font = 'bold ' + fontSize + 'pt Verdana';
  ctx.fillText(label1, 0, 0);
  ctx.restore();
  xTex = x + (radio - factor(height)) * Math.cos(angleText) - factor(height) / factor2.x;
  yTex = y + (radio + factor(height)) * Math.sin(angleText) - factor(height) / factor2.y;
  ctx.save();
  ctx.translate(xTex, yTex);
  ctx.rotate(rotation);
  ctx.beginPath();
  ctx.fillStyle = '#948e8e';
  ctx.font = 'bold '+fontSize+'pt Verdana';
  ctx.fillText(label2, 0, 0);
  ctx.restore();
};


const nameArea = (ctx: CanvasRenderingContext2D, x: number, y: number, radio: number, anguloInicial: number, height: number, name?: string) => {
  if (ctx) {
    const angleText = (Math.PI / 180) * anguloInicial + 50;
    if (name) {
      let xTex;
      let yTex;

      // M1
      if (anguloInicial == 22.5) {
        xTex = x + (radio - factor(height)) * Math.cos(angleText);
        yTex = y + (radio + factor(height)) * Math.sin(angleText) + 15;
      }
      //M2
      if (anguloInicial == 45) {
        xTex = x + (radio - factor(height)) * Math.cos(angleText) - 15;
        yTex = y + (radio + factor(height)) * Math.sin(angleText);
      }
      //M3
      if (anguloInicial == 67.5) {
        xTex = x + (radio - factor(height)) * Math.cos(angleText) - 15;
        yTex = y + (radio - factor(height)) * Math.sin(angleText) + 30;
      }
      // M4
      if (anguloInicial == 90) {
        xTex = x + (radio - factor(height)) * Math.cos(angleText) - 30;
        yTex = y + (radio - factor(height)) * Math.sin(angleText) + 30;
      }
      // E1
      if (anguloInicial == 112.5) {
        xTex = x + (radio - factor(height)) * Math.cos(angleText) - 30;
        yTex = y + (radio - factor(height)) * Math.sin(angleText) + 25;
      }
      // E2
      if (anguloInicial == 135) {
        xTex = x + (radio - factor(height)) * Math.cos(angleText) - 40;
        yTex = y + (radio - factor(height)) * Math.sin(angleText) + 15;
      }
      // E3
      if (anguloInicial == 157.5) {
        xTex = x + (radio + 7) * Math.cos(angleText);
        yTex = y + (radio - 20) * Math.sin(angleText);
      }
      // E4
      if (anguloInicial == 180) {
        xTex = x + radio * Math.cos(angleText);
        yTex = y + (radio - 40) * Math.sin(angleText);
      }
      // S1
      if (anguloInicial == 202.5) {
        xTex = x + (radio - 5) * Math.cos(angleText);
        yTex = y + (radio + 30) * Math.sin(angleText);
      }
      // S2
      if (anguloInicial == 225) {
        xTex = x + (radio - 10) * Math.cos(angleText);
        yTex = y + (radio - 5) * Math.sin(angleText);
      }
      // S3
      if (anguloInicial == 247.5) {
        xTex = x + (radio - 20) * Math.cos(angleText);
        yTex = y + (radio - 15) * Math.sin(angleText);
      }
      // S4
      if (anguloInicial == 270) {
        xTex = x + (radio - 25) * Math.cos(angleText);
        yTex = y + (radio - 20) * Math.sin(angleText);
      }
      //  f1
      if (anguloInicial == 292.5) {
        xTex = x + radio * Math.cos(angleText);
        yTex = y + (radio - 30) * Math.sin(angleText);
      }
      //  f2
      if (anguloInicial == 315) {
        xTex = x + (radio - 5) * Math.cos(angleText);
        yTex = y + (radio - 40) * Math.sin(angleText);
      }
      //  f3
      if (anguloInicial == 337.5) {
        xTex = x + (radio - 25) * Math.cos(angleText);
        yTex = y + (radio - 50) * Math.sin(angleText);
      }
      //  f4
      if (anguloInicial == 360) {
        xTex = x + (radio - 30) * Math.cos(angleText);
        yTex = y + (radio - smallRadio(height)) * Math.sin(angleText) + 10;
      }

      if (xTex && yTex) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = '#948e8e';
        ctx.font = 'bold  15pt Verdana';
        ctx.fillText(name, xTex, yTex);
        ctx.restore();
      }
    }
  }
};

export const drawReportArea = (ctx: CanvasRenderingContext2D, companyReport: Array<any>, personalReport: Array<any>, width: number, height: number) => {
  let ai = 22.5;
  // console.log('drawReportArea', companyReport);

  if (companyReport.length > 0) {
    companyReport.forEach((elem: any) => {
      elem.areas.map((area: any) => {
        const percent = Math.floor((parseFloat(area.value) * 100) / smallRadio(height));

        const radio = percent + bigRadio(height) - factor(height) * 4.3;
        // this.area(this.width / 2, this.height / 2, bigRadio(height), i, ai)
        // console.log(area.diference);

        reportArea(ctx, width / 2, height / 2, radio, ai, height, area.diference, 'company');
        // this.nameArea(this.width / 2, this.height / 2, bigRadio(height), ai, area.sufix)
        ai += 22.5;
      });
    });
  } else {
    // console.log('personalReport', personalReport);

    personalReport.forEach((elem: any) => {
      elem.areas.map((area: any) => {
        // // console.log(area);
        const percent = Math.floor((parseFloat(area.value) * 100) / smallRadio(height));

        const radio = percent + bigRadio(height) - factor(height) * 4.3;
        // this.area(this.width / 2, this.height / 2, bigRadio(height), i, ai)
        // console.log(area.value);
        reportArea(ctx, width / 2, height / 2, radio, ai, height, area.value, 'personal');
        // this.nameArea(this.width / 2, this.height / 2, bigRadio(height), ai, area.sufix)
        ai += 22.5;
      });
    });
  }
};

export const drawReportAreaPersonal = (ctx: CanvasRenderingContext2D, personalReport: Array<any>, width: number, height: number) => {
  let ai = 22.5;
  // console.log('drawReportArea', companyReport);

   if (personalReport && personalReport.length > 0) {
     // console.log('personalReport', personalReport);

     personalReport.forEach((elem: any) => {
       elem.areas.map((area: any) => {
         // // console.log(area);
         const percent = Math.floor((parseFloat(area.value) * 100) / smallRadio(height));

         const radio = percent + bigRadio(height) - factor(height) * 4.3;
         // this.area(this.width / 2, this.height / 2, bigRadio(height), i, ai)
         // console.log(area.value);
         reportArea(ctx, width / 2, height / 2, radio, ai, height, area.value, 'personal');
         // this.nameArea(this.width / 2, this.height / 2, bigRadio(height), ai, area.sufix)
         ai += 22.5;
       });
     });
   }
};


const reportArea = (ctx: CanvasRenderingContext2D, x: number, y: number, radio: number, anguloInicial: number, height: number, diference: number, type: string) => {
  if (ctx) {
    const angleText = (Math.PI / 180) * anguloInicial + 50;
    if (diference) {
      let xTex;
      let yTex;
      // M1
      if (anguloInicial == 22.5) {
        ctx.save();
        if (type === 'company') {
          xTex = x + (radio - factor(height)) * Math.cos(angleText);
          yTex = y + (radio - factor(height)) * Math.sin(angleText);
        } else {
          xTex = x + (radio - factor(height)) * Math.cos(angleText);
          yTex = y + (radio - factor(height)) * Math.sin(angleText);
        }
        ctx.translate(xTex, yTex);
        ctx.rotate(1.7);
      }
      //M2
      if (anguloInicial == 45) {
        ctx.save();
        xTex = x + (radio - factor(height)) * Math.cos(angleText);
        yTex = y + (radio - factor(height)) * Math.sin(angleText);
        ctx.translate(xTex, yTex);
        ctx.rotate(2.2);
      }
      //M3
      if (anguloInicial == 67.5) {
        ctx.save();
        xTex = x + (radio - factor(height)) * Math.cos(angleText);
        yTex = y + (radio - factor(height)) * Math.sin(angleText);
        ctx.translate(xTex, yTex);
        ctx.rotate(2.6);
      }
      // M4
      if (anguloInicial == 90) {
        ctx.save();
        xTex = x + (radio - factor(height)) * Math.cos(angleText);
        yTex = y + (radio - factor(height)) * Math.sin(angleText);
        ctx.translate(xTex, yTex);
        ctx.rotate(3);
      }
      // E1
      if (anguloInicial == 112.5) {
        ctx.save();
        xTex = x + (radio - factor(height)) * Math.cos(angleText);
        yTex = y + (radio - factor(height)) * Math.sin(angleText);
        ctx.translate(xTex, yTex);
        ctx.rotate(3.3);
      }
      // E2
      if (anguloInicial == 135) {
        ctx.save();
        xTex = x + (radio - factor(height)) * Math.cos(angleText);
        yTex = y + (radio - factor(height)) * Math.sin(angleText);
        ctx.translate(xTex, yTex);
        ctx.rotate(3.8);
      }
      // E3
      if (anguloInicial == 157.5) {
        ctx.save();
        xTex = x + (radio - factor(height)) * Math.cos(angleText);
        yTex = y + (radio - factor(height)) * Math.sin(angleText);
        ctx.translate(xTex, yTex);
        ctx.rotate(4.1);
      }
      // E4
      if (anguloInicial == 180) {
        ctx.save();
        xTex = x + (radio - factor(height)) * Math.cos(angleText);
        yTex = y + (radio - factor(height)) * Math.sin(angleText);
        ctx.translate(xTex, yTex);
        ctx.rotate(4.6);
      }
      // S1
      if (anguloInicial == 202.5) {
        ctx.save();
        xTex = x + (radio - factor(height)) * Math.cos(angleText);
        yTex = y + (radio - factor(height)) * Math.sin(angleText);
        ctx.translate(xTex, yTex);
        ctx.rotate(5);
      }
      // S2
      if (anguloInicial == 225) {
        ctx.save();
        if (type === 'company') {
          xTex = x + (radio - factor(height)) * Math.cos(angleText);
          yTex = y + (radio - factor(height)) * Math.sin(angleText);
        } else {
          xTex = x + (radio - factor(height)) * Math.cos(angleText);
          yTex = y + (radio - factor(height)) * Math.sin(angleText);
        }
        ctx.translate(xTex, yTex);
        ctx.rotate(5.2);
      }
      // S3
      if (anguloInicial == 247.5) {
        ctx.save();
        xTex = x + (radio - factor(height)) * Math.cos(angleText);
        yTex = y + (radio - factor(height)) * Math.sin(angleText);
        ctx.translate(xTex, yTex);
        ctx.rotate(5.8);
      }
      // S4
      if (anguloInicial == 270) {
        ctx.save();
        xTex = x + (radio - factor(height)) * Math.cos(angleText) - 10;
        yTex = y + (radio - factor(height)) * Math.sin(angleText);
        ctx.translate(xTex, yTex);
        ctx.rotate(6.2);
      }
      //  F1
      if (anguloInicial == 292.5) {
        ctx.save();
        if (type === 'company') {
          xTex = x + (radio - factor(height)) * Math.cos(angleText) - 10;
          yTex = y + (radio - factor(height)) * Math.sin(angleText);
        } else {
          xTex = x + (radio - factor(height)) * Math.cos(angleText);
          yTex = y + (radio - factor(height)) * Math.sin(angleText);
        }

        ctx.translate(xTex, yTex);
        ctx.rotate(6.5);
      }
      //  F2
      if (anguloInicial == 315) {
        ctx.save();
        xTex = x + (radio - factor(height)) * Math.cos(angleText) - 5;
        yTex = y + (radio - factor(height)) * Math.sin(angleText);
        ctx.translate(xTex, yTex);
        ctx.rotate(6.9);
      }
      //  F3
      if (anguloInicial == 337.5) {
        ctx.save();
        xTex = x + (radio - factor(height)) * Math.cos(angleText);
        yTex = y + (radio - factor(height)) * Math.sin(angleText);
        ctx.translate(xTex, yTex);
        ctx.rotate(7.3);
      }
      //  F4
      if (anguloInicial == 360) {
        ctx.save();
        xTex = x + (radio - factor(height)) * Math.cos(angleText);
        yTex = y + (radio - factor(height)) * Math.sin(angleText);
        ctx.translate(xTex, yTex);
        ctx.rotate(7.7);
      }

      if (xTex && yTex) {
        ctx.beginPath();
        ctx.fillStyle = '#736a6a';
        ctx.font = 'bold 12pt Verdana';
        if (type === 'company') {
          ctx.fillText(diference > 0 ? `+${diference}` : `${diference}`, 0, 0);
        } else {
          ctx.fillText(`${diference}`, 0, 0);
        }

        ctx.restore();
      }
    }
  }
};
export const drawScore = (ctx: CanvasRenderingContext2D, data: any, width: number, height: number) => {
  if (data) {
    ctx.save();
    ctx.fillStyle = '#349bab';
    ctx.font = 'Bold 20pt Verdana';
    ctx.fillText(data.score ? data.score.value + '%' : '0%', width / 2 - 32, height / 2);
    ctx.restore();
    ctx.save();
    ctx.fillStyle = '#bcc1c9';
    ctx.font = '10pt Verdana';
    ctx.fillText(data.score ? data.score.name : 'Indice Global', width / 2 - 40, height / 2 + 20);
    ctx.restore();
  } else {
    ctx.save();
    ctx.fillStyle = '#349bab';
    ctx.font = 'Bold 20pt Verdana';
    ctx.fillText('0%', width / 2 - 32, height / 2);
    ctx.restore();
    ctx.save();
    ctx.fillStyle = '#bcc1c9';
    ctx.font = '10pt Verdana';
    ctx.fillText('Indice Global', width / 2 - 40, height / 2 + 20);
    ctx.restore();
  }
};
