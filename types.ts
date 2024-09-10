export interface User {
  id: string;
  token: string;
  phone: string;
  password: string;
  roles: string[];
}

export type UserWithoutPassword = Omit<User, "password">;
