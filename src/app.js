/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import HomeView from './homeView';
import LoginView from './LoginView';
import ArtistDetailView from './ArtistDetailView';

const NativeBase = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={LoginView} hideNavBar />
      <Scene key="home" component={HomeView} />
      <Scene key="artistDetail" component={ArtistDetailView} />
    </Scene>
  </Router>
);

export default NativeBase;

AppRegistry.registerComponent('nativeBase', () => NativeBase);
