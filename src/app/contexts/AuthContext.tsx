import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  phone: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (userData: User & { password: string }) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // Simulación de login
    if (email && password) {
      setUser({
        name: 'Usuario Demo',
        email,
        phone: '555-1234',
      });
      return true;
    }
    return false;
  };

  const register = (userData: User & { password: string }) => {
    // Simulación de registro
    if (userData.email && userData.password && userData.name) {
      setUser({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    // Return a default context for preview/development purposes
    return {
      user: null,
      login: () => false,
      register: () => false,
      logout: () => {},
      isAuthenticated: false,
    };
  }
  return context;
}
