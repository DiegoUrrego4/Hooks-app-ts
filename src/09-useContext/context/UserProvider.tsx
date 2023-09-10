import React, { useMemo, useState } from 'react';
import { UserContext } from './UserContext';
import { User } from './interfaces';

interface Props {
  children: React.JSX.Element | React.JSX.Element[];
}

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>({} as User);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
