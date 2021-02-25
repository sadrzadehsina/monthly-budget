import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f44336',
    accent: '#4CAF50',
		secondary: '#414757',
    error: '#f13a59',
  },
};

export { theme };