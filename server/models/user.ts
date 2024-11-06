import type { User } from '~~/types';

// Fake users data
const users: User[] = [
  // старый
  // {
  //   id: "41dbc5f7-9a4e-42e6-832b-1d3dd8c7c4b6",
  //   token: "41dbc5f7-9a4e-42e6-832b-1d3dd8c7c4b6",
  //   email: "admin@gmail.com",
  //   password: "$2y$10$hXPea83sKsVsuf95mtEZZeIYtcFl1vLJ1BXVTEqcgKArf6/5.Zksm",
  //   roles: ["ADMIN"],
  // },
  // {
  //   id: "d0065700-1707-4ad9-811b-8bbed0364318",
  //   token: "d0065700-1707-4ad9-811b-8bbed0364318",
  //   email: "71111111111",
  //   password: "$2y$10$hXPea83sKsVsuf95mtEZZeIYtcFl1vLJ1BXVTEqcgKArf6/5.Zksm",
  //   roles: ["USER"],
  // },

  /// ///////
  {
    id: '41dbc5f7-9a4e-42e6-832b-1d3dd8c7c4b6',
    token: '41dbc5f7-9a4e-42e6-832b-1d3dd8c7c4b6',
    phone: 'admin@gmail.com',
    password: '$2y$10$hXPea83sKsVsuf95mtEZZeIYtcFl1vLJ1BXVTEqcgKArf6/5.Zksm',
    roles: ['ADMIN'],
  },
  {
    id: 'd0065700-1707-4ad9-811b-8bbed0364318',
    token: 'd0065700-1707-4ad9-811b-8bbed0364318',
    phone: '71111111111',
    password: '$2y$10$hXPea83sKsVsuf95mtEZZeIYtcFl1vLJ1BXVTEqcgKArf6/5.Zksm',
    roles: ['USER'],
  },
];

export function getUsers() {
  return users;
}

export function getUserByPhone(phone: string) {
  return users.find((user) => user.phone === phone);
}

export function getUserById(id: string) {
  return users.find((user) => user.id === id);
}

export function isAdmin(user?: User) {
  return user && user.roles.includes('ADMIN');
}
