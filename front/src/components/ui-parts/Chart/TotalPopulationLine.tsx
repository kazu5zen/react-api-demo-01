import { Chart as ChartJS, registerables, ChartData, ChartOptions, ChartConfiguration } from 'chart.js';
import { FC, memo, useEffect, useRef } from 'react';
import { TotalPopulation } from '../../hooks/usePopulationComposition';

type Props = {
  totalPopulationList: TotalPopulation[];
};

export const TotalPopulationLine: FC<Props> = memo((props) => {
  const { totalPopulationList } = props;

  const labels: string[] = [];
  for (let year = 1980; year <= 2045; year += 5) {
    labels.push(`${year}`);
  }

  const datasets = totalPopulationList.map((e) => {
    return { label: e.name, data: e.values, borderColor: 'rgb(75, 192, 192)' };
  });
  const chartData: ChartData<'line'> = {
    labels,
    datasets,
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: '総人口推移グラフ',
      },
    },
    scales: {
      yAxis: {
        title: {
          display: true,
          text: '人口数',
          font: {
            size: 16,
          },
        },
      },
      xAxis: {
        title: {
          display: true,
          text: '年度',
          font: {
            size: 16,
          },
        },
      },
    },
  };

  const config: ChartConfiguration = {
    type: 'line',
    data: chartData,
    options: chartOptions,
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const element = canvasRef.current;
    if (!element) return;
    ChartJS.register(...registerables);
    const chart = new ChartJS(element, config);
    chart.clear();
    // eslint-disable-next-line consistent-return
    return () => chart.destroy();
  });

  return <canvas width="100%" height="500" ref={canvasRef} />;
});

export default TotalPopulationLine;
