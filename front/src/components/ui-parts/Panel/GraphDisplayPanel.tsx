import { ChangeEvent, FC, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'react-google-charts';
import PrefecturesCheckBox from '../../ui-elements/CheckBox/PrefecturesCheckBox';

type Prefectures = {
  id: string;
  name: string;
  isChecked: boolean;
};

export const GraphDisplayPanel: FC = memo(() => {
  const [prefecturesList, setPrefecturesList] = useState<Prefectures[]>([
    { id: '1', name: '東京都', isChecked: false },
    { id: '2', name: '千葉県', isChecked: false },
    { id: '3', name: '埼玉県', isChecked: false },
    { id: '4', name: '神奈川県', isChecked: false },
    { id: '5', name: '群馬県', isChecked: false },
  ]);

  const onChangePrefectures = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked }: { id: string; checked: boolean } = e.target;
    setPrefecturesList(
      prefecturesList.map((prefectures: Prefectures, index: number) => {
        return `${index + 1}` === id ? { ...prefectures, isChecked: checked } : prefectures;
      })
    );
  };

  const chartData = [
    [{ type: 'date', label: '年度' }, '東京都', '千葉県'],
    [new Date(2011, 1), 19000, 900],
    [new Date(2012, 1), 20000, 1000],
    [new Date(2013, 1), 31000, 1100],
    [new Date(2014, 1), 22000, 1200],
    [new Date(2015, 1), 23000, 1300],
    [new Date(2016, 1), 24000, 1400],
    [new Date(2017, 1), 35000, 1500],
    [new Date(2018, 1), 26000, 1600],
    [new Date(2019, 1), 27000, 1700],
    [new Date(2020, 1), 28000, 1800],
    [new Date(2021, 1), 29000, 1900],
    [new Date(2022, 1), 30000, 2000],
  ];

  const chartOptions = {
    chart: {
      title: '総人口推移グラフ',
    },
    hAxis: {
      title: '年度',
    },
    vAxis: {
      title: '人口数',
    },
  };

  return (
    <>
      <h4>都道府県</h4>
      <div>
        {prefecturesList.map((prefectures) => (
          <PrefecturesCheckBox
            key={prefectures.id}
            checked={prefectures.isChecked}
            id={prefectures.id}
            text={prefectures.name}
            onChange={onChangePrefectures}
          />
        ))}
      </div>
      <div>
        <Chart chartType="LineChart" width="80%" data={chartData} options={chartOptions} />
      </div>
      <div>
        <Link to="/">トップページへ戻る</Link>
      </div>
    </>
  );
});

export default GraphDisplayPanel;
