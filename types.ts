export interface User {
  id: string;
  token: string;
  phone: string;
  password: string;
  roles: string[];
}
export interface Filters {
  title: string;
  name: string;
  filters: string[];
}

export type UserWithoutPassword = Omit<User, "password">;
