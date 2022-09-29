import { ChangeEvent, FC, memo, useEffect } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import PrefecturesCheckBox from '../../ui-elements/CheckBox/PrefecturesCheckBox';
import useAllPrefectures, { Prefectures } from '../../hooks/useAllPrefectures';
import TotalPopulationLine from '../Chart/TotalPopulationLine';
import usePopulationComposition from '../../hooks/usePopulationComposition';
import './GraphDisplayPanel.css';

ChartJS.register(...registerables);

export const GraphDisplayPanel: FC = memo(() => {
  const { fetchPrefectures, updatePrefectures, prefecturesList } = useAllPrefectures();
  const { fetchTotalPopulationList, removeTotalPopulationList, totalPopulationList, loading } =
    usePopulationComposition();
  useEffect(() => {
    fetchPrefectures();
  }, []);

  const onChangePrefectures = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked }: { id: string; checked: boolean } = e.target;
    const changedPrefectures: Prefectures | undefined = prefecturesList.find((prefectures) => {
      return `${prefectures.code}` === id;
    });
    if (changedPrefectures === undefined) return;
    updatePrefectures(changedPrefectures, checked);

    if (checked) {
      fetchTotalPopulationList(changedPrefectures);
    } else {
      removeTotalPopulationList(changedPrefectures);
    }
  };

  return (
    <>
      <h2>総人口推移</h2>
      <h3>都道府県</h3>
      <div className="panel__prefectures">
        {prefecturesList.map((prefectures) => (
          <PrefecturesCheckBox
            key={prefectures.code}
            checked={prefectures.isChecked}
            id={prefectures.code}
            text={prefectures.name}
            onChange={onChangePrefectures}
          />
        ))}
      </div>
      <div>{loading ? <div /> : <TotalPopulationLine totalPopulationList={totalPopulationList} />}</div>
    </>
  );
});

export default GraphDisplayPanel;
