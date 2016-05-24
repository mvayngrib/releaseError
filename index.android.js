/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

require('./shim')
process.env.NODE_ENV = 'development';

import React, {
  Component,
} from 'react';

import {
  TabBarIOS,
  NavigatorIOS,
  StyleSheet,
  AppRegistry,
  View,
  Text
} from 'react-native';

class releaseError extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          process.env.NODE_ENV = {process.env.NODE_ENV}
        </Text>
        <Text style={styles.welcome}>
          {new Buffer('blah').toString()}
        </Text>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('releaseError', () => releaseError);
