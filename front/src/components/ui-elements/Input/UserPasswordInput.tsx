import { ChangeEvent, FC, memo } from 'react';

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const UserPasswordInput: FC<Props> = memo((props) => {
  const { value, onChange } = props;
  return <input type="password" placeholder="パスワード" value={value} onChange={onChange} />;
});

export default UserPasswordInput;
