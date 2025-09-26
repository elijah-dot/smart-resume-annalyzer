import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'employer';
  avatar?: string;
  skills?: string[];
  experience?: string;
  education?: string;
  resumeAnalysis?: {
    skills: string[];
    experience: string;
    strengths: string[];
    suggestions: string[];
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'student' | 'employer') => Promise<void>;
  signup: (name: string, email: string, password: string, role: 'student' | 'employer') => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('jobFinderUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, role: 'student' | 'employer') => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: email.split('@')[0],
      email,
      role,
      avatar: `https://images.unsplash.com/photo-${role === 'student' ? '1507003211169-0a1dd7228f2d' : '1560250097-0b93528c311a'}?w=100&h=100&fit=crop&crop=face`,
    };
    
    setUser(newUser);
    localStorage.setItem('jobFinderUser', JSON.stringify(newUser));
  };

  const signup = async (name: string, email: string, password: string, role: 'student' | 'employer') => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      role,
      avatar: `https://images.unsplash.com/photo-${role === 'student' ? '1507003211169-0a1dd7228f2d' : '1560250097-0b93528c311a'}?w=100&h=100&fit=crop&crop=face`,
    };
    
    setUser(newUser);
    localStorage.setItem('jobFinderUser', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('jobFinderUser');
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('jobFinderUser', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}