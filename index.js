/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f44336',
    accent: '#4CAF50',
  },
};

const Main = () => {
	return (
		<PaperProvider theme={theme}>
			<App />
		</PaperProvider>
	)
};

AppRegistry.registerComponent(appName, () => Main);
