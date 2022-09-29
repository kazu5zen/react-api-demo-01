import { useCallback, useState } from 'react';
import fetchWrapper from '../utils/fetchWrapper';

export type Prefectures = {
  code: string;
  name: string;
  isChecked: boolean;
};

type PrefecturesResponses = {
  message: string | null;
  result: [
    {
      prefCode: number;
      prefName: string;
    }
  ];
};

export const useAllPrefectures = () => {
  const [prefecturesList, setPrefecturesList] = useState<Prefectures[]>([]);

  const fetchPrefectures = useCallback(() => {
    fetchWrapper
      .get<PrefecturesResponses>('https://opendata.resas-portal.go.jp/api/v1/prefectures')
      .then((res) => {
        setPrefecturesList(
          res.result.map((result) => {
            return { code: `${result.prefCode}`, name: result.prefName, isChecked: false } as Prefectures;
          })
        );
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  const updatePrefectures = useCallback(
    (changedPrefectures: Prefectures, checked: boolean) => {
      const tmpPrefecturesList = prefecturesList.slice();
      const updateIndex = tmpPrefecturesList.findIndex((val) => `${val.code}` === changedPrefectures.code);
      tmpPrefecturesList.splice(updateIndex, 1, {
        code: changedPrefectures.code,
        name: changedPrefectures.name,
        isChecked: checked,
      });
      setPrefecturesList(tmpPrefecturesList);
    },
    [prefecturesList]
  );

  return { fetchPrefectures, updatePrefectures, prefecturesList };
};

export default useAllPrefectures;
