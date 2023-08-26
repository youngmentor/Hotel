import React, { createContext, useState, useContext,} from 'react';


interface ThemeContextProps {
  verifyAlert: boolean;
  login_alert: () => void;
  selectedRoomId: string | number;
  setSelectedRoomId: (roomId: string | number) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  verifyAlert: false,
  login_alert: () => {},
  selectedRoomId: '',
  setSelectedRoomId: () => {},
});
interface ThemeProviderProps {
    children: React.ReactNode;
  }
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string | number>('');
  const [verifyAlert, setVerifyAlert] = useState<boolean>(false);


  const login_alert = () => {
    setVerifyAlert(true);
    setTimeout(() => {
      setVerifyAlert(false);
    }, 10000);
  };

  return (
    <ThemeContext.Provider value={{ verifyAlert, login_alert, selectedRoomId, setSelectedRoomId }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
