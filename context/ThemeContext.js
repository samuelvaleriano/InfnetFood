import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('darkMode');
      if (savedTheme !== null) {
        setDarkMode(JSON.parse(savedTheme));
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const novoTema = !darkMode;
    setDarkMode(novoTema);
    await AsyncStorage.setItem('darkMode', JSON.stringify(novoTema));
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
