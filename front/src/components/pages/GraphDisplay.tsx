import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import PrefecturesCheckBox from '../ui-elements/CheckBox/PrefecturesCheckBox';
import Footer from '../ui-parts/Footer/Footer';
import Header from '../ui-parts/Header/Header';

export const Login: FC = memo(() => {
  const prefecturesList = [
    { id: '1', name: '東京都' },
    { id: '2', name: '千葉県' },
    { id: '3', name: '埼玉県' },
    { id: '4', name: '神奈川県' },
    { id: '5', name: '群馬県' },
  ];

  return (
    <>
      <Header />
      <main>
        <h4>都道府県</h4>
        <div>
          {prefecturesList.map((value) => (
            <PrefecturesCheckBox id={value.id} text={value.name} />
          ))}
        </div>
        <div>グラフ表示コンポーネントを追加予定</div>
        <div>
          <Link to="/">トップページへ戻る</Link>
        </div>
      </main>
      <Footer />
    </>
  );
});

export default Login;
