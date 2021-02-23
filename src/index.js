import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
	HomeScreen,
	// LoginScreen,
	// RegisterScreen,
	// ForgotPasswordScreen,
	// DashboardScreen,
} from './screens';

const Router = createStackNavigator(
	{
		Home: HomeScreen,
		// Login: LoginScreen,
		// Regiseter: RegisterScreen,
		// ForgotPassword: ForgotPasswordScreen,
		// Dashboard: DashboardScreen,
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none',
	},
);

export default createAppContainer(Router);