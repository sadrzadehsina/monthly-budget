import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input, ThemeContext } from "react-native-elements";
import { useForm, Controller } from "react-hook-form";

const Home = ({ navigation }) => {

	const { theme } = useContext(ThemeContext);

	const { handleSubmit, control, errors } = useForm();

	const signIn = state => console.log(state);

  return (
    <View 
			style={[
				styles.container, 
				{ 
					backgroundColor: theme.colors.black
				}
			]}
		>
      <View style={styles.header}>
				<Text h1 style={{ color: theme.colors.white }}>Track Your Budget</Text>
				<Text h6 style={{ color: theme.colors.white }}>just like the way a calculator works</Text>
			</View>
			<View style={styles.form}>
				<Controller
					name="email"
					control={control}
					defaultValue=""
					rules={{ required: true }}
					render={({ onChange, value }) => (
						<Input
							placeholder="Email"
							value={value}
							onChange={onChange}
							errorMessage={errors.email ? 'Email is required' : ''}
							containerStyle={styles.inputContainer}
							inputContainerStyle={{ borderColor: theme.colors.white }}
							inputStyle={{ color: theme.colors.white, outline: 0 }}
							errorStyle={{ marginTop: 10, fontSize: 14 }}
						/>
					)}
				/>
				<Controller
					name="password"
					control={control}
					defaultValue=""
					rules={{ required: true }}
					render={({ onChange, value }) => (
						<Input
							placeholder="Password"
							value={value}
							onChange={onChange}
							errorMessage={errors.password ? 'Password is required' : ''}
							containerStyle={styles.inputContainer}
							inputContainerStyle={{ borderColor: theme.colors.white }}
							inputStyle={{ color: theme.colors.white, outline: 0 }}
							errorStyle={{ marginTop: 10, fontSize: 14 }}
						/>
					)}
				/>
			</View>
			<View style={styles.actions}>
				<Button 
					title="Login"
					buttonStyle={styles.button}
					titleStyle={[styles.buttonTitle, {color: theme.colors.black}]}
					onPress={handleSubmit(signIn)}
				/>
			</View>
    </View>
  );
};

export { Home };

const styles = StyleSheet.create({
  container: {
		flex: 1,
		paddingLeft: 40,
		paddingRight: 40,
	},
	header: {
		flex: 0.2,
		alignContent: "flex-start",
		justifyContent: "flex-start",
		alignItems: 'flex-start',
		marginTop: 30,
	},
	form: {
		flex: 0.7,
		justifyContent: 'center'
	},
	inputContainer: {
		marginBottom: 20,
	},
	actions: {
		alignContent: "flex-start",
		justifyContent: "flex-start",
		flex: 0.1,
	},
	button: {
		padding: 20,
		marginBottom: 5
	},
	buttonTitle: {
		fontSize: 20,
	}
});
