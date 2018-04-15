
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { connect } from 'react-redux';
import Testing from './src/components/test';



export default class App extends Component {

  render() {
    return (
      <Testing/>
      // <AppStackNavigator/>
      // <LoginScreen/>
      // <View>
      // <Text>{this.props.displaynumber}</Text>
      // <Button title="Add" onPress={this.props.OnAdd} />
      // <Button title="Min" onPress={this.props.OnMin} />
      // </View>
    );
  }
}

// const AppStackNavigator = StackNavigator ({
//   Main: {
//     screen: MainScreen
//   }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

