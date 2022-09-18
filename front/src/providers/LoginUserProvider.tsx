import { createContext, Dispatch, FC, memo, SetStateAction, useMemo, useState } from 'react';

type Props = {
  children?: React.ReactNode;
};

export type User = {
  id: string;
  isAuthenticated: boolean;
};

export type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider: FC<Props> = memo((props) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);
  const value = useMemo(
    () => ({
      loginUser,
      setLoginUser,
    }),
    [loginUser]
  );
  return <LoginUserContext.Provider value={value}>{children}</LoginUserContext.Provider>;
});
