import React from "react";

const defaultTheme = {
  primary: "#333",
  secondary: "rgba(0, 0, 0, 0.1)",
  spinnerSize: "50px",
  spinnerColor: "red",
  spinerBorderColor: "rgba(228, 9, 9, 0.1)",
  spinerMoverColor: "#fc0000",
};

const ThemeContext = React.createContext(defaultTheme);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
