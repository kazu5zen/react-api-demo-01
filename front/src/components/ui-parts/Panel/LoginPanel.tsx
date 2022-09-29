import { ChangeEvent, FC, memo, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import PrimaryButton from '../../ui-elements/Button/PrimaryButton';
import UserNameInput from '../../ui-elements/Input/UserNameInput';
import UserPasswordInput from '../../ui-elements/Input/UserPasswordInput';
import './LoginPanel.css';

export const LoginPanel: FC = memo(() => {
  const { login } = useAuth();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const onClickLogin = () => login(userId, password);

  return (
    <div className="panel">
      <h3 className="panel__title">ログイン</h3>
      <div className="panel__item">
        <UserNameInput value={userId} onChange={onChangeUserId} />
      </div>
      <div className="panel__item">
        <UserPasswordInput value={password} onChange={onChangePassword} />
      </div>
      <div className="panel__button">
        <PrimaryButton text="ログイン" onClick={onClickLogin} />
      </div>
    </div>
  );
});

export default LoginPanel;
