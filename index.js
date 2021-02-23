/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/core';

const Main = () => {
	return (
		<PaperProvider theme={theme}>
			<App />
		</PaperProvider>
	)
};

AppRegistry.registerComponent(appName, () => Main);
