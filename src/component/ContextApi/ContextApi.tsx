import React, { createContext, useState,} from 'react';


interface ThemeContextProps {
  verifyAlert: boolean;
  login_alert: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  verifyAlert: false,
  login_alert: () => {},
});
interface ThemeProviderProps {
    children: React.ReactNode;
  }
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [verifyAlert, setVerifyAlert] = useState<boolean>(false);


  const login_alert = () => {
    setVerifyAlert(true);
    setTimeout(() => {
      setVerifyAlert(false);
    }, 10000);
  };

  return (
    <ThemeContext.Provider value={{ verifyAlert, login_alert }}>
      {children}
    </ThemeContext.Provider>
  );
};
