import { useContext } from 'react';
import { LoginUserContext, LoginUserContextType } from '../../providers/LoginUserProvider';

export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext);
export default useLoginUser;
