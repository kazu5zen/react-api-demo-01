import { ChangeEvent, FC, memo, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, registerables } from 'chart.js';
import PrefecturesCheckBox from '../../ui-elements/CheckBox/PrefecturesCheckBox';
import useAllPrefectures, { Prefectures } from '../../hooks/useAllPrefectures';
import TotalPopulationLine from '../Chart/TotalPopulationLine';
import usePopulationComposition from '../../hooks/usePopulationComposition';

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
      <h4>都道府県</h4>
      <div>
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
      <div>
        <Link to="/">トップページへ戻る</Link>
      </div>
    </>
  );
});

export default GraphDisplayPanel;
