import React from 'react';
import {Colors, Red, Green, Blue, yellow} from './Color';

export type Theme = {
  mode: String;
  colors: Colors;
  setTheme: (val: 'red' | 'blue' | 'green' | 'yellow') => void;
} | null;

export const ThemeContext = React.createContext<Theme>({
  mode: 'red',
  colors: Red,
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{}> = (props) => {
  const [color, setColor] = React.useState<Colors>(Red);

  const defaultTheme: Theme = {
    mode: 'red',
    colors: color,
    setTheme: (val: string) => {
      switch (val) {
        case 'red': {
          setColor(Red);
          break;
        }
        case 'green': {
          setColor(Green);
          break;
        }
        case 'blue': {
          setColor(Blue);
          break;
        }
        case 'yellow': {
          setColor(yellow);
          break;
        }
        default: {
          console.log('No such day exists!');
          break;
        }
      }
    },
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
