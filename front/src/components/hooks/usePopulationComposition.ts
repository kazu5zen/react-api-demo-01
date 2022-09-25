import { useCallback, useState } from 'react';
import fetchWrapper from '../utils/fetchWrapper';
import { Prefectures } from './useAllPrefectures';

export type TotalPopulation = {
  code: string;
  name: string;
  years: number[];
  values: number[];
};

export type PopulationCompositionResponses = {
  message: string | null;
  result: {
    boundaryYear: number;
    data: [
      {
        label: string;
        data: [
          {
            year: number;
            value: number;
          }
        ];
      }
    ];
  };
};

export const usePopulationComposition = () => {
  const [totalPopulationList, setTotalPopulationList] = useState<TotalPopulation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTotalPopulationList = useCallback(
    (prefectures: Prefectures) => {
      setLoading(true);
      const years: number[] = [];
      const values: number[] = [];
      fetchWrapper
        .get<PopulationCompositionResponses>(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefectures.code}`
        )
        .then((res) => {
          // 0番目に必ず'総人口'のデータが入っている
          const { data } = res.result.data[0];
          data.forEach((e) => {
            years.push(e.year);
            values.push(e.value);
          });
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
      const newTotalPopulationList = [
        ...totalPopulationList,
        { code: prefectures.code, name: prefectures.name, years, values } as TotalPopulation,
      ];
      newTotalPopulationList.sort((a, b) => {
        const codeA = Number(a.code);
        const codeB = Number(b.code);
        if (codeA < codeB) return -1;
        if (codeA > codeB) return 1;
        return 0;
      });
      setTotalPopulationList(newTotalPopulationList);
    },
    [totalPopulationList]
  );

  const removeTotalPopulationList = useCallback(
    (prefectures: Prefectures) => {
      const tmpTotalPopulationList = totalPopulationList.slice();
      const delIndex = tmpTotalPopulationList.findIndex((val) => prefectures.code === val.code);
      tmpTotalPopulationList.splice(delIndex, 1);
      setTotalPopulationList(tmpTotalPopulationList);
    },
    [totalPopulationList]
  );

  return { fetchTotalPopulationList, removeTotalPopulationList, totalPopulationList, loading };
};

export default usePopulationComposition;
