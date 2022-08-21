import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export const useAuth = () => {
  const history = useHistory();

  const login = useCallback((id: string, pass: string) => {
    // FIXME:仮のログイン実装
    if (id === 'user' && pass === 'pass') {
      history.push('/graph-display');
    } else {
      alert('ユーザーIDかパスワードが間違っています。');
    }
  }, []);

  return { login };
};

export default useAuth;
