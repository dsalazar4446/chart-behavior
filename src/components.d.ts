/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ChartBehavior {
        "businessColors": { primary: string; secondary: string; tertiary: string; cuaternary: string; quintenary: string };
        "data": any;
    }
    interface ChartPersonal {
        "businessColors": { primary: string; secondary: string; tertiary: string; cuaternary: string; quintenary: string };
        "data": any;
    }
}
declare global {
    interface HTMLChartBehaviorElement extends Components.ChartBehavior, HTMLStencilElement {
    }
    var HTMLChartBehaviorElement: {
        prototype: HTMLChartBehaviorElement;
        new (): HTMLChartBehaviorElement;
    };
    interface HTMLChartPersonalElement extends Components.ChartPersonal, HTMLStencilElement {
    }
    var HTMLChartPersonalElement: {
        prototype: HTMLChartPersonalElement;
        new (): HTMLChartPersonalElement;
    };
    interface HTMLElementTagNameMap {
        "chart-behavior": HTMLChartBehaviorElement;
        "chart-personal": HTMLChartPersonalElement;
    }
}
declare namespace LocalJSX {
    interface ChartBehavior {
        "businessColors"?: { primary: string; secondary: string; tertiary: string; cuaternary: string; quintenary: string };
        "data"?: any;
    }
    interface ChartPersonal {
        "businessColors"?: { primary: string; secondary: string; tertiary: string; cuaternary: string; quintenary: string };
        "data"?: any;
    }
    interface IntrinsicElements {
        "chart-behavior": ChartBehavior;
        "chart-personal": ChartPersonal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "chart-behavior": LocalJSX.ChartBehavior & JSXBase.HTMLAttributes<HTMLChartBehaviorElement>;
            "chart-personal": LocalJSX.ChartPersonal & JSXBase.HTMLAttributes<HTMLChartPersonalElement>;
        }
    }
}