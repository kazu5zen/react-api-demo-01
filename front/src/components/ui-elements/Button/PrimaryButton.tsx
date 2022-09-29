import { FC, memo } from 'react';
import './PrimaryButton.css';

type Props = {
  text: string;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { text, onClick } = props;
  return (
    <button type="button" onClick={onClick} className="button-primary">
      {text}
    </button>
  );
});

export default PrimaryButton;
