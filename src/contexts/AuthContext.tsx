import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { User, AuthError, Session } from '@supabase/supabase-js';
import logger from '../utils/logger';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<{ confirmationRequired: boolean }>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for changes on auth state (signed in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event: string, session: Session | null) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string): Promise<{ confirmationRequired: boolean }> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
        }
      });

      if (error) {
        logger.error('Error signing up', { error, message: error.message });
        throw error;
      }

      // Check if email confirmation is required
      const confirmationRequired = data.session === null;
      
      if (confirmationRequired) {
        logger.info('User signup initiated, confirmation email sent', { email });
      } else {
        logger.info('User signed up and logged in successfully', { email });
        setSession(data.session);
        setUser(data.user);
      }

      return { confirmationRequired };
    } catch (error) {
      const authError = error as AuthError;
      logger.error('Error signing up', { error: authError, message: authError.message });
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { data: { session }, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        logger.error('Error signing in', { error, message: error.message });
        throw error;
      }

      setSession(session);
      setUser(session?.user ?? null);
      logger.info('User signed in successfully', { email });
    } catch (error) {
      const authError = error as AuthError;
      logger.error('Error signing in', { error: authError, message: authError.message });
      throw error;
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        logger.error('Error signing out', { error, message: error.message });
        throw error;
      }

      setSession(null);
      setUser(null);
      logger.info('User signed out successfully');
    } catch (error) {
      const authError = error as AuthError;
      logger.error('Error signing out', { error: authError, message: authError.message });
      
      // Even if there's an error, clear the local state to ensure the user is logged out
      setSession(null);
      setUser(null);
      throw error;
    }
  };

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; 