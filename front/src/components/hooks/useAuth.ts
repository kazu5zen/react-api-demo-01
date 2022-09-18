import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import useLoginUser from './useLoginUser';

export const useAuth = () => {
  const sha256 = async (text: string) => {
    const uint8 = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest('SHA-256', uint8);
    return Array.from(new Uint8Array(digest))
      .map((v) => v.toString(16).padStart(2, '0'))
      .join('');
  };

  const { setLoginUser } = useLoginUser();
  const history = useHistory();

  const login = useCallback((userId: string, pass: string) => {
    sha256(`${userId}`).then((hashId) => {
      sha256(`${pass}${userId}`).then((hashPass) => {
        if (hashId === process.env.REACT_APP_USER_ID && hashPass === process.env.REACT_APP_PASSWORD) {
          setLoginUser({ id: userId, isAuthenticated: true });
          history.push('/graph-display');
        } else {
          alert('ユーザーIDかパスワードが間違っています。');
        }
      });
    });
  }, []);

  return { login };
};

export default useAuth;
