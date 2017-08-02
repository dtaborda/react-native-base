# Yarn installation

```bash
$ brew install yarn
```

[yarn documentation](https://yarnpkg.com/lang/en/docs/install/)

# React Native architecture

An opinionated architecture with the following technical stack and configuration:

* node 8.x
* native-base 2.3.x
* react 16.0.0-alpha.12
* react-native 0.46.x
* react-native-fbsdk 0.6.x
* eslint 4.3.0
* eslint-config-airbnb 15.1.x

## NOTE
This architecture is based on [react-native](https://facebook.github.io/react-native/) framework. React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components. Be sure you are already familiar with these technologies before using it.

[facebook](https://developers.facebook.com/quickstarts) - Download and Install the Facebook SDK

[NativeBase](https://nativebase.io/)
Essential cross-platform UI components for React Native

## Getting started
To start hacking simply do:

### Installation
```bash
$ yarn global add react-native-cli  ||  npm install -g react-native-cli
$ yarn install  ||  npm install
$ react-native link
```

### Run IOS device
```bash
$ yarn ios  ||  react-native run-ios
```
