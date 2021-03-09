import { Component, h, Element, Watch, Prop } from '@stencil/core';
import { drawReportArea, drawScore } from '../utils/report-charts';
import { drawCirculoInterior, drawScale, smallRadio } from '../utils/tablero';
import {
  drawArea,
  drawCompanyMetrics,
  drawPersonalMetrics,
  drawTablero,
  getCompanyReportArray,
  getDiferenceValues,
  getPersonalReportArray,
  drawLabels
} from '../utils';

@Component({
  tag: 'chart-behavior',
  styleUrl: 'chart-behavior.css',
  // shadow: true,
})
export class ChartBehavior {
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
    }
  }

  componentDidLoad() {
    // window.requestAnimationFrame(this.init)
    this.init();
  }

  componentDidRender() {
    // // // console.log(document.getElementById('canvas'));
    this.canvas = document.getElementById('canvasBehavior');
    this.context = this.canvas.getContext('2d');
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
      this.converterData()
      // // console.log('companyReport!!!!!', this.companyReport);
      drawPersonalMetrics(this.context, getPersonalReportArray(this.data), this.width, this.height);
      drawCompanyMetrics(this.context, getCompanyReportArray(this.data), this.width, this.height);
      getDiferenceValues(getCompanyReportArray(this.data), getPersonalReportArray(this.data));
      // const companyReport = getCompanyReportArray(this.data);
      // const personalRepport = getPersonalReportArray(this.data);
      // console.log('lalallaa', companyReport);
      // console.log('lalallaa', personalRepport);

      drawReportArea(this.context, getCompanyReportArray(this.data), getPersonalReportArray(this.data), this.width, this.height);
      drawLabels(this.context, this.width, this.height, getCompanyReportArray(this.data), getPersonalReportArray(this.data));
    }
    drawArea(this.context, this.width, this.height);
    drawCirculoInterior(this.context, this.width, this.height);
    if (this.data) {
      drawScore(this.context, this.data, this.width, this.height);
      this.legend1();
      this.legend2();
      this.legend3();
      this.Legend4();
    }
    drawScale(this.context,this.width,this.height);
  }

  converterData() {
    this.personalReport = getPersonalReportArray(this.data);
    this.companyReport = getCompanyReportArray(this.data);
    // // console.log('---------------- companyReport', this.companyReport);
    if (this.companyReport.length > 0) {
      this.companyReport = getDiferenceValues(this.personalReport, this.companyReport);
    }

  }

  render() {
    return <canvas id="canvasBehavior" width="800" height="600"></canvas>;
  }
  roundedRectStroke(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.stroke();
    ctx.restore();
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
  // M -> e
  Legend4() {
    if (this.context) {
      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#535e77';
      this.context.font = 'bold 10pt Verdana';
      if (this.data && this.data.company_report) {
        this.context.fillText(this.data.company_report.S.value + '%', 10, 45);
      } else {
        this.context.fillText('0%', 10, 45);
      }

      this.context.font = '7pt Verdana';
      this.context.fillText('Empresa', 10, smallRadio(this.height));
      this.context.fill();
      this.context.restore();

      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#535e77';
      this.context.font = 'bold 10pt Verdana';
      if (this.data && this.data.personal_report) {
        this.context.fillText(this.data.personal_report.S.value + '%', 95, 45);
      } else {
        this.context.fillText('0%', 95, 45);
      }
      this.context.font = '7pt Verdana';
      this.context.fillText('Yo', 95, smallRadio(this.height));
      this.context.fill();
      this.context.restore();

      this.barBusiness4();
      this.barPersonal4();

      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#ff6900';
      this.context.font = 'bold 15pt Verdana';
      this.context.fillText('S', smallRadio(this.height), 90);
      this.context.restore();
    }
  }
  // M -> e
  barBusiness4() {
    if (this.context) {
      this.context.save();

      // this.context.arcTo(55,11,14,48, 20)
      // this.context.rect(50, 100, 0, 0);
      // this.context.strokeRect(55,11,14,48);
      this.context.beginPath();
      this.context.strokeStyle = '#00e4ab';
      this.context.fillStyle = '#00e4ab';
      this.context.fillRect(55, 25, 15, 5);
      this.context.fill();
      this.context.fillRect(55, 33, 15, 5);
      this.context.fill();
      this.context.fillRect(55, 41, 15, 5);
      this.context.fill();
      this.context.fillRect(55, 33, 15, 5);
      this.context.fill();
      this.context.fillRect(55, 49, 15, 5);
      this.context.fill();

      this.roundedRectStroke(this.context, 55, 19, 14, 40, 5);
      this.context.restore();
    }
  }

  barPersonal4() {
    if (this.context) {
      this.context.save();
      // this.context.rect(50, 100, 0, 0);
      if (this.data && this.data.personal_report) {
        this.roundedRectFill(this.context, 75, 10, 15, 50, 5, this.getColor(this.data.personal_report.S));
      } else {
        this.roundedRectFill(this.context, 75, 10, 15, 50, 5, '#FF0000');
      }

      this.context.restore();
    }
  }
  // s -> m
  barPersonal3() {
    if (this.context) {
      this.context.save();
      if (this.data && this.data.personal_report) {
        this.roundedRectFill(this.context, 75, this.height - 84, 15, 50, 5, this.getColor(this.data.personal_report.E));
      } else {
        this.roundedRectFill(this.context, 75, this.height - 84, 15, 50, 5, '#FF0000');
      }
      this.context.restore();
    }
  }
  // s -> m
  barBusiness3() {
    if (this.context) {
      this.context.save();
      this.context.beginPath();
      this.context.strokeStyle = '#00e4ab';
      this.context.fillStyle = '#00e4ab';
      // this.context.arcTo(55,11,14,48, 20)
      // this.context.rect(50, 100, 0, 0);
      // this.context.strokeRect(55,11,14,48);
      this.context.fillRect(55, this.height - 68, 15, 5);
      this.context.fill();
      this.context.fillRect(55, this.height - 60, 15, 5);
      this.context.fill();
      this.context.fillRect(55, this.height - 52, 15, 5);
      this.context.fill();
      this.context.fillRect(55, this.height - 44, 15, 5);
      this.context.fill();
      // this.context.fillRect(55, 49, 15, 5)
      // this.context.fill()
      this.roundedRectStroke(this.context, 55, this.height - 75, 14, 40, 5);

      this.context.restore();
    }
  }
  // s -> m
  legend3() {
    if (this.context) {
      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#535e77';
      this.context.font = 'bold 10pt Verdana';
      if (this.data && this.data.company_report) {
        this.context.fillText(this.data.company_report.E.value + '%', 10, this.height - 50);
      } else {
        this.context.fillText('0%', 10, this.height - 50);
      }
      this.context.font = '7pt Verdana';
      this.context.fillText('Empresa', 10, this.height - 35);
      this.context.fill();
      this.context.restore();

      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#535e77';
      this.context.font = 'bold 10pt Verdana';
      if (this.data && this.data.personal_report) {
        this.context.fillText(this.data.personal_report.E.value + '%', 95, this.height - 50);
      } else {
        this.context.fillText('0%', 95, this.height - 50);
      }

      this.context.font = '7pt Verdana';
      this.context.fillText('Yo', 95, this.height - 35);
      this.context.fill();
      this.context.restore();

      this.barBusiness3();
      this.barPersonal3();

      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#ff6900';
      this.context.font = 'bold 15pt Verdana';

      this.context.fillText('E', smallRadio(this.height), this.height - 10);
      this.context.restore();
    }
  }

  barPersonal2() {
    if (this.context) {
      this.context.save();
      if (this.data && this.data.personal_report) {
        this.roundedRectFill(this.context, this.width - 57, this.height - 84, 15, 50, 5, this.getColor(this.data.personal_report.M));
      } else {
        this.roundedRectFill(this.context, this.width - 57, this.height - 84, 15, 50, 5, '#FF0000');
      }
      // this.roundedRectFill(this.context,this.width - 57, this.height - 84, 15, 50, 5, this.getColor(this.data.personal_report.M) );
      this.context.restore();
    }
  }

  barBusiness2() {
    if (this.context) {
      this.context.save();
      this.context.beginPath();
      this.context.strokeStyle = '#00e4ab';
      this.context.fillStyle = '#00e4ab';
      // this.context.arcTo(55,11,14,48, 20)
      // this.context.rect(50, 100, 0, 0);
      // this.context.strokeRect(55,11,14,48);
      this.context.fillRect(this.width - 75, this.height - 68, 15, 5);
      this.context.fill();
      this.context.fillRect(this.width - 75, this.height - 60, 15, 5);
      this.context.fill();
      this.context.fillRect(this.width - 75, this.height - 52, 15, 5);
      this.context.fill();
      this.context.fillRect(this.width - 75, this.height - 44, 15, 5);
      this.context.fill();
      // this.context.fillRect(55, 49, 15, 5)
      // this.context.fill()
      this.roundedRectStroke(this.context, this.width - 75, this.height - 75, 14, 40, 5);

      this.context.restore();
    }
  }

  legend2() {
    if (this.context) {
      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#535e77';
      this.context.font = 'bold 10pt Verdana';
      if (this.data && this.data.company_report) {
        this.context.fillText(this.data.company_report.M.value + '%', this.width - 120, this.height - 50);
      } else {
        this.context.fillText('0%', this.width - 120, this.height - 50);
      }
      this.context.font = '7pt Verdana';
      this.context.fillText('Empresa', this.width - 120, this.height - 35);
      this.context.fill();
      this.context.restore();

      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#535e77';
      this.context.font = 'bold 10pt Verdana';
      if (this.data && this.data.personal_report) {
        this.context.fillText(this.data.personal_report.M.value + '%', this.width - 40, this.height - 50);
      } else {
        this.context.fillText('0%', this.width - 40, this.height - 50);
      }
      this.context.font = '7pt Verdana';
      this.context.fillText('Yo', this.width - 40, this.height - 35);
      this.context.fill();
      this.context.restore();

      this.context.save();
      this.barBusiness2();
      this.barPersonal2();
      this.context.restore();

      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#ff6900';
      this.context.font = 'bold 15pt Verdana';

      this.context.fillText('M', this.width - smallRadio(this.height), this.height - 10);
      this.context.restore();
    }
  }
  legend1() {
    if (this.context) {
      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#535e77';
      this.context.font = 'bold 10pt Verdana';
      if (this.data && this.data.company_report) {
        this.context.fillText(this.data.company_report.F.value + '%', this.width - 120, 45);
      } else {
        this.context.fillText('0%', this.width - 120, 45);
      }
      this.context.font = '7pt Verdana';
      this.context.fillText('Empresa', this.width - 120, smallRadio(this.height));
      this.context.fill();
      this.context.restore();

      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#535e77';
      this.context.font = 'bold 10pt Verdana';
      if (this.data && this.data.personal_report) {
        this.context.fillText(this.data.personal_report.F.value + '%', this.width - 40, 45);
      } else {
        this.context.fillText('0%', this.width - 40, 45);
      }
      this.context.font = '7pt Verdana';
      this.context.fillText('Yo', this.width - 40, smallRadio(this.height));
      this.context.fill();
      this.context.restore();

      this.barBusiness1();
      this.barPersonal1();

      this.context.save();
      this.context.beginPath();
      this.context.fillStyle = '#ff6900';
      this.context.font = 'bold 15pt Verdana';

      this.context.fillText('F', this.width - 65, 90);
      this.context.restore();
    }
  }
  //e -> s
  barBusiness1() {
    if (this.context) {
      this.context.save();
      this.context.beginPath();
      this.context.strokeStyle = '#00e4ab';
      this.context.fillStyle = '#00e4ab';
      this.context.fillRect(this.width - 75, 25, 15, 5);
      this.context.fill();
      this.context.fillRect(this.width - 75, 33, 15, 5);
      this.context.fill();
      this.context.fillRect(this.width - 75, 41, 15, 5);
      this.context.fill();
      this.context.fillRect(this.width - 75, 33, 15, 5);
      this.context.fill();
      this.context.fillRect(this.width - 75, 49, 15, 5);
      this.context.fill();
      this.roundedRectStroke(this.context, this.width - 75, 19, 14, 40, 5);
      this.context.restore();
    }
  }
  //e -> s
  barPersonal1() {
    if (this.context) {
      this.context.save();
      // // // console.log('color',this.getColor(this.data.personal_report.F));
      if (this.data && this.data.personal_report) {
        this.roundedRectFill(this.context, this.width - 58, 10, 15, 50, 5, this.getColor(this.data.personal_report.F));
      } else {
        this.roundedRectFill(this.context, this.width - 58, 10, 15, 50, 5, '#FF0000');
      }

      this.context.restore();
    }
  }
  getColor(type: any) {
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
        // // console.log(type.sufix, type.value, 'color asignado', color);
      }
      if (type.value >= 21 && type.value <= 40) {
        color = '#E69138';
        // // console.log(type.sufix, type.value, 'color asignado', color);
      }
      if (type.value >= 41 && type.value <= 60) {
        color = '#F9CB9C';
        // // console.log(type.sufix, type.value, 'color asignado', color);
      }
      if (type.value >= 61 && type.value <= 80) {
        color = '#D9EAD3';
      }
      if (type.value >= 81 && type.value <= 100) {
        color = '#93C47D';
        // // console.log(type.sufix, type.value, 'color asignado', color);
      }
    }

    return color;
  }
}
