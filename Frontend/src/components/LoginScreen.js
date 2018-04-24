import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Alert,
  Linking,
  AsyncStorage 
} from 'react-native';
import { connect, dispatch } from 'react-redux';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import qs from 'qs';
import { StackNavigator } from 'react-navigation';
import { TabNavigator, TabView, TabBarTop } from 'react-navigation';
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';
import { setjwtToken } from '../store/actions/actionTypes';
import { setprofile, setid, setevent } from '../store/actions/users';
import configStore from '../store/configstore';
class LoginScreen extends Component {
  state = {
    jwtToken: undefined
  }
  componentDidMount() {
    Linking.addEventListener('url', this._handleURL);
    Linking.getInitialURL().then((url) => {
      if (url) {
        this._handleURL(url);
      }
    });
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleURL);
  }
  _handleURL = async (event) => {
    try {
      var [, query] = event.match(/\#(.*)/)
      const jsonQuery = qs.parse(query);
      const response = await axios.post('http://159.65.133.33/auth/verify/google', { accessToken: jsonQuery.access_token });
      const data = response.data;
      AsyncStorage.setItem('jwtToken', data.token);
      this.props.setprofile(data.profile);
      this.props.setid(data.id[0].id);
      this.props.navigation.navigate('Main');
      }
    catch (err) {
      alert("Error " + err.message);
    }
  }
  
  loginGoogle = () => {
    //change it and save it somewhere else.
    const CLIENT_ID = "606784332815-el05u272910hau6jlvnmnn4nul21enus.apps.googleusercontent.com";
    const REDIRECT_URL = "http%3A%2F%2Fandroid.googlelinker.com"; //https://lens.auth.com, must be the same as the data tag in AndroidManifest.xml
    const GOOGLE_AUTH_URL = [
      "https://accounts.google.com/o/oauth2/v2/auth?",
      "scope=email%20profile&", //email%20profile&
      "include_granted_scopes=true&state=state_parameter_passthrough_value&",
      "redirect_uri=http%3A%2F%2Fandroid.googlelinker.com&response_type=token&",
      "client_id=", CLIENT_ID
    ].join('')

    Linking.openURL(GOOGLE_AUTH_URL);
  }
  render() {
    return (<ImageBackground source={require('../../DSC06107.jpg')} style={styles.backgroundImage}>
      <View style={styles.top}>
        <Text style={styles.header}>GO Photer</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.context}> Explore and Create Contents</Text>
        <Icon.Button
          name="google"
          backgroundColor="#DD4B39"
          onPress={this.loginGoogle}
        >
          Google
         </Icon.Button>
      </View>
    </ImageBackground >
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  top: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontFamily: 'Pacifico',
    color: '#fff',
    fontSize: 40,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40
  },
  middle: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  context: {
    fontFamily: 'ShadowsIntoLight',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 80,
  },
  loginButton: {
    width: '40%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#E75480'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
});
const mapDispatchToProps = (dispatch) => ({
    setprofile: (data) => dispatch(setprofile(data)),
    setid: (num) => dispatch(setid(num))
});
export default connect(null, mapDispatchToProps)(LoginScreen);