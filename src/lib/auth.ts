// Mock authentication for demonstration
export type UserRole = 'super_admin' | 'admin' | 'customer' | 'transporter';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

// Mock users for demonstration
const mockUsers: AuthUser[] = [
  {
    id: '1',
    name: 'Super Admin',
    email: 'superadmin@melyno.com',
    role: 'super_admin',
    avatar: 'SA',
  },
  {
    id: '2',
    name: 'Jane Mwangi',
    email: 'customer@melyno.com',
    role: 'customer',
    avatar: 'JM',
  },
  {
    id: '3',
    name: 'John Otieno',
    email: 'transporter@melyno.com',
    role: 'transporter',
    avatar: 'JO',
  },
];

export const login = (email: string, password: string): AuthUser | null => {
  // For demonstration, any password works
  const user = mockUsers.find(u => u.email === email);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
    return user;
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('isLoggedIn');
};

export const getCurrentUser = (): AuthUser | null => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

export const hasRole = (roles: UserRole[]): boolean => {
  const user = getCurrentUser();
  return user ? roles.includes(user.role) : false;
};
