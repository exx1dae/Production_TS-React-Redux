import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";
import { useContext } from "react";

/*
 * Реализуем кастомный хук useTheme()
 *
 * для начала создадим интерфейс, чтобы описать возвращаемые данные хука
 * в хуке получим состояние темы используя контекст
 * дополним хук функционалом "toggleTheme" и экспортируем его
 * */

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
