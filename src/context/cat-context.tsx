import { createContext, useContext, useState, useEffect } from 'react';

interface ICatContext {
  cat: string | undefined;
  fetchCat: () => Promise<void>;
  isEnabled: boolean;
  refresh: boolean;
  toggleEnabled: () => void;
  toggleRefresh: () => void;
  isLoading: boolean;
}

const CatContext = createContext<ICatContext | null>(null);

export const useCat = () => {
  const context = useContext(CatContext);
  if (!context) {
    throw new Error('useCat must be used within a CatProvider');
  }
  return context;
};

export const CatProvider = ({ children }: { children: React.ReactNode }) => {
  const [cat, setCat] = useState<string | undefined>(undefined);
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCat = async () => {
    if (!isEnabled) return;
    setIsLoading(true);
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      setCat(data[0].url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  useEffect(() => {
    if (refresh && isEnabled) {
      const interval = setInterval(fetchCat, 5000);
      return () => clearInterval(interval);
    }
  }, [refresh, isEnabled]);

  const toggleEnabled = () => {
    setIsEnabled((prev) => !prev);
  };

  const toggleRefresh = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <CatContext.Provider
      value={{ cat, fetchCat, isEnabled, refresh, toggleEnabled, toggleRefresh, isLoading }}>
      {children}
    </CatContext.Provider>
  );
};

export default CatContext;
