import { ChangeEvent, FC } from 'react';
import './PrefecturesCheckBox.css';

type Props = {
  id: string;
  checked?: boolean;
  text: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const PrefecturesCheckBox: FC<Props> = (props) => {
  const { id, checked = false, text, onChange } = props;
  return (
    <label htmlFor={id} className="prefectures__label">
      <input type="checkbox" checked={checked} id={id} onChange={onChange} />
      {text}
    </label>
  );
};

export default PrefecturesCheckBox;
