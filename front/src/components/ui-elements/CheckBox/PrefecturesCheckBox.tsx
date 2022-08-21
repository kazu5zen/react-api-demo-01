import { ChangeEvent, FC } from 'react';

type Props = {
  id: string;
  value?: boolean;
  text: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const PrefecturesCheckBox: FC<Props> = (props) => {
  const { id, value = false, text, onChange } = props;
  return (
    <label htmlFor={id}>
      <input type="checkbox" checked={value} id={id} onChange={onChange} />
      {text}
    </label>
  );
};

export default PrefecturesCheckBox;
