import { ChangeEvent, FC, memo } from 'react';

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const UserNameInput: FC<Props> = memo((props) => {
  const { value, onChange } = props;
  return <input type="text" placeholder="ユーザーID" value={value} onChange={onChange} />;
});

export default UserNameInput;
