import { Component, h, Watch, Element, Prop } from '@stencil/core';
import { drawScale,drawArea, drawCirculoInterior, drawLabelPersonalChart, drawPersonalMetrics, drawScore, drawTablero, getCompanyReportArray, getDiferenceValues, getPersonalReportArray, drawReportAreaPersonal } from '../utils';


@Component({
  tag: 'chart-personal',
  styleUrl: 'chart-personal.css',
  // shadow: true,
})
export class ChartPersonal {
  @Prop({ mutable: true, reflect: true }) data: any;
  @Prop({ mutable: true, reflect: true }) businessColors: { primary: string; secondary: string; tertiary: string; cuaternary: string; quintenary: string };

  @Element()
  el: HTMLElement;
  context: CanvasRenderingContext2D;
  canvas;
  width: number;
  height: number;

  personalReport: Array<any>;
  companyReport: Array<any>;

  // @Watch('width')
  // widthHandler(newValue: any) {
  //   this.height = newValue;
  // }

  // @Watch('height')
  // heightHandler(newValue: any) {
  //   this.width = newValue;
  // }

  @Watch('data')
  dataHandler(newValue: any) {
    if (typeof newValue === 'string') {
      this.data = JSON.parse(newValue);
    } else {
      this.data = newValue;
    }
  }

  @Watch('businessColors')
  businessColorsHandler(newValue: any) {
    this.businessColors = newValue;
    if (typeof newValue === 'string') {
      this.businessColors = JSON.parse(newValue);
    } else {
      this.businessColors = newValue;
    }
  }
  componentWillLoad() {
    if (this.data) {
      if (typeof this.data === 'string') {
        this.data = JSON.parse(this.data);
      }
      this.converterData();
    }
  }
  converterData() {
    this.personalReport = getPersonalReportArray(this.data);
    this.companyReport = getDiferenceValues(this.personalReport, getCompanyReportArray(this.data));

  }

  componentDidLoad() {
    // window.requestAnimationFrame(this.init)
    this.init();
  }

  init() {
    this.width = 800;
    this.height = 600;

    this.canvas.width = this.width;
    this.canvas.height = this.height;
    // // // console.log(this.width, ' x ', this.height);
    // // // console.log('center: ', this.width / 2, ' x ', this.height / 2);
    drawTablero(this.context, this.width, this.height);
    if (this.data) {
      drawPersonalMetrics(this.context, getPersonalReportArray(this.data), this.width, this.height);
      // drawCompanyMetrics(this.context, getCompanyReportArray(this.data), this.width, this.height);
      // drawLabels(this.context, this.width, this.height, getCompanyReportArray(this.data), getCompanyReportArray(this.data));
      drawLabelPersonalChart(this.context, this.width, this.height);
      getDiferenceValues(getCompanyReportArray(this.data), getPersonalReportArray(this.data));

      drawReportAreaPersonal(this.context, getPersonalReportArray(this.data), this.width, this.height);
    }
    drawArea(this.context, this.width, this.height);
    drawCirculoInterior(this.context, this.width, this.height);
    if (this.data) {
      drawScore(this.context, this.data, this.width, this.height);
      this.legend();
    }
    drawScale(this.context, this.width, this.height)
  }

  componentDidRender() {
    // // // console.log(document.getElementById('canvas'));
    this.canvas = document.getElementById('canvasPersonal');
    this.context = this.canvas.getContext('2d');
    console.log(this.canvas);

  }

  render() {
    return <canvas id="canvasPersonal" width="800" height="600"></canvas>;
  }

  roundedRectFill(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number, color: string) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.fill();
    ctx.restore();
  }
  getColor(type: any) {
    // // console.log('type', type.value);

    // // // console.log('data.personal_report', type.value);
    let color;
    if (this.businessColors) {
      if (this.businessColors.primary) {
        if (type.value >= 0 && type.value >= 20) {
          color = this.businessColors.primary;
        }
      }
      if (this.businessColors.secondary) {
        if (type.value >= 40 && type.value >= 21) {
          color = this.businessColors.secondary;
        }
      }
      if (this.businessColors.tertiary) {
        if (type.value >= 41 && type.value >= 60) {
          color = this.businessColors.tertiary;
        }
      }
      if (this.businessColors.cuaternary) {
        if (type.value >= 61 && type.value >= 80) {
          color = this.businessColors.cuaternary;
        }
      }

      if (this.businessColors.cuaternary) {
        if (type.value >= 61 && type.value >= 80) {
          color = this.businessColors.cuaternary;
        }
      }

      if (this.businessColors.quintenary) {
        if (type.value >= 81 && type.value >= 100) {
          color = this.businessColors.quintenary;
        }
      }
    } else {
      if (type.value >= 0 && type.value <= 20) {
        color = '#FF0000';
      }
      if (type.value >= 21 && type.value <= 40) {
        color = '#E69138';
      }
      if (type.value >= 41 && type.value <= 60) {
        color = '#F9CB9C';
      }
      if (type.value >= 61 && type.value <= 80) {
        color = '#D9EAD3';
      }
      if (type.value >= 81 && type.value <= 100) {
        color = '#93C47D';
      }
    }

    return color;
  }
  legend() {
    if (this.context) {
      //S
      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#349bab';
      this.context.font = 'bold 17px Verdana';
      this.context.fillText('Energia Espiritual', 10, 25);
      this.context.fill();
      this.context.restore();

      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#f66b00';
      this.context.font = 'bold 25px Verdana';
      this.context.fillText('S - ' + this.data.personal_report.S.value + '%', 10+30, 25+35);
      this.context.fill();
      this.context.restore();

      this.context.save()
      this.roundedRectFill(this.context, 45, 75, 100, 15, 5, '#f3f6f9');
      this.context.restore()
      // // console.log('S value', this.data.personal_report.S.value);
      this.context.save();
      if (this.data && this.data.personal_report) {
        this.roundedRectFill(this.context, 45, 75, parseInt(this.data.personal_report.S.value), 15, 5, this.getColor(this.data.personal_report.S));
      } else {
        this.roundedRectFill(this.context, 45, 75, 0, 15, 5, '#FF0000');
      }

      this.context.restore();

      // F
      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#349bab';
      this.context.font = 'bold 17px Verdana';
      this.context.fillText('Energia Fisica', 630, 25);
      this.context.fill();
      this.context.restore();
      this.context.save();

      this.context.beginPath();
      this.context.fillStyle = '#f66b00';
      this.context.font = 'bold 25px Verdana';
      this.context.fillText('F - ' + this.data.personal_report.F.value + '%', 630 + 15, 25 + 35);
      this.context.fill();
      this.context.restore();
      this.roundedRectFill(this.context, 650,75, 100, 15, 5, '#f3f6f9');
       if (this.data && this.data.personal_report) {
         this.roundedRectFill(this.context, 650,75, parseInt(this.data.personal_report.F.value), 15, 5, this.getColor(this.data.personal_report.F));
       } else {
         this.roundedRectFill(this.context, 650, 75, 0, 15, 5, '#FF0000');
       }
      // M
      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#349bab';
      this.context.font = 'bold 17px Verdana';
      this.context.fillText('Energia Mental', 630, 520);
      this.context.fill();
      this.context.restore();

      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#f66b00';
      this.context.font = 'bold 25px Verdana';
      this.context.fillText('M - ' + this.data.personal_report.M.value + '%', 630 + 15, 520 + 35);
      this.context.fill();
      this.context.restore();
      this.roundedRectFill(this.context, 650, 570, 100, 15, 5, '#f3f6f9');
      if (this.data && this.data.personal_report) {
        this.roundedRectFill(this.context, 650, 570, parseInt(this.data.personal_report.M.value), 15, 5, this.getColor(this.data.personal_report.M));
      } else {
        this.roundedRectFill(this.context, 650, 570, 0, 15, 5, '#FF0000');
      }
      // E
      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#349bab';
      this.context.font = 'bold 17px Verdana';
      this.context.fillText('Energia Emocional', 10, 520);
      this.context.fill();
      this.context.restore();

      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#f66b00';
      this.context.font = 'bold 25px Verdana';
      this.context.fillText('E - ' + this.data.personal_report.E.value + '%', 10 + 15, 520 + 35);
      this.context.fill();
      this.context.restore();
      this.roundedRectFill(this.context, 30, 570, 100, 15, 5, '#f3f6f9');
      if (this.data && this.data.personal_report) {
        this.roundedRectFill(this.context, 30, 570, parseInt(this.data.personal_report.E.value), 15, 5, this.getColor(this.data.personal_report.E));
      } else {
        this.roundedRectFill(this.context, 30, 570, 0, 15, 5, '#FF0000');
      }
    }
  }

  barPersonal() {
    if (this.context) {
      this.context.save();
      // this.context.rect(50, 100, 0, 0);

    }
  }
}
