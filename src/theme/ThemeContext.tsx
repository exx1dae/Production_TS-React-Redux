import { createContext } from "react";

export enum Theme { // перечесление всех тем
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  // форма пропсов передаваемых через контекст
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
