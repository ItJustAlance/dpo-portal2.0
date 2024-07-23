export interface User {
  id: string;
  phone: string;
  password: string;
  roles: string[];
}

export type UserWithoutPassword = Omit<User, "password">;
