import React, { memo } from 'react';

import {
	ImageBackground,
	StyleSheet,
	KeyboardAvoidView,
} from 'react-native';

const Background = ({ children }) => {
	
	<ImageBackground
		source={require('../assets/background_dot.png')}
		resizeMode='repeat'
		style={styles.background}
	>
		<KeyboardAvoidView style={styles.container} behavior="padding">
			{children}
		</KeyboardAvoidView>
	</ImageBackground>

};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);