export interface LineChartProps {
  datasets?: {
    label: string;
    color: string;
    data: {
      x: Date;
      y: number;
    }[];
  }[];
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  width?: number;
  height?: number;
  axesColor?: string;
  addAxesLabel?: boolean;
  axesFontSize?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  axesLabelColor?: string;
  axesLabelSize?: string;
  animation?: boolean;
  animationDuration?: number;
  addTooltip?: boolean;
  fontFamily?: string;
  addTitle?: boolean;
  setTitle?: string;
  setTitleSize?: string;
  setTitleColor?: string;
  addLegend?: boolean;
}
