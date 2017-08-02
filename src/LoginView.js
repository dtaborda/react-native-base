/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FBSDK, {
  LoginButton,
  AccessToken,
} from 'react-native-fbsdk';

import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Login: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
});

class LoginView extends Component {
  handleLoginFinished = (error, result) => {
    if (error) {
      console.error(error);
    } else if (result.isCancelled) {
      alert('login is cancelled.');
    } else {
      AccessToken.getCurrentAccessToken().then(
        () => { Actions.home(); },
      );
    }
  }

  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.Login}>Login</Text>
        <LoginButton
          readPermissions={['public_profile', 'email']}
          onLoginFinished={this.handleLoginFinished}
          onLogoutFinished={() => alert('logout.')}
        />
      </View>
    );
  }
}

export default LoginView;
