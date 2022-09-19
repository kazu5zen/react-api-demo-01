import { ChangeEvent, FC, memo, useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div>グラフ表示コンポーネントを追加予定</div>
      <div>
        <Link to="/">トップページへ戻る</Link>
      </div>
    </>
  );
});

export default GraphDisplayPanel;
