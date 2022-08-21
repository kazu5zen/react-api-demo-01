import { FC, memo } from 'react';

type Props = {
  text: string;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { text, onClick } = props;
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
});

export default PrimaryButton;
