import { Dispatch, SetStateAction } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}