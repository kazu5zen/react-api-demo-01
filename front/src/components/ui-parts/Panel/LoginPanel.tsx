import { ChangeEvent, FC, memo, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import PrimaryButton from '../../ui-elements/Button/PrimaryButton';
import UserNameInput from '../../ui-elements/Input/UserNameInput';
import UserPasswordInput from '../../ui-elements/Input/UserPasswordInput';

export const LoginPanel: FC = memo(() => {
  const { login } = useAuth();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const onClickLogin = () => login(userId, password);

  return (
    <div>
      <h3>ログイン</h3>
      <div>
        <UserNameInput value={userId} onChange={onChangeUserId} />
        <UserPasswordInput value={password} onChange={onChangePassword} />
        <PrimaryButton text="ログイン" onClick={onClickLogin} />
      </div>
    </div>
  );
});

export default LoginPanel;
