import React, { Component } from 'react';
import axios from 'axios';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Icon } from 'native-base';
import Carousel from '../Carousel'


class HomeTab extends Component {
  state = {
    userInfo: {},
    cards: []
  }

  urls = [`http://10.0.2.2:3000/users/${1}`,
    `http://10.0.2.2:3000/events`
  ];

  componentWillMount() {
    Promise.all(this.urls.map(url => {
      return axios.get(url).then(res => res)
    })).then(res => {
      console.log(res[1].data)
      console.log(res[0].data)
      this.setState({
        userInfo: res[0].data,
        cards: res[1].data
      })
    })
  }
  static navigatorOptions = {

    tabBarIcon: ({ tintColor }) => (
      <icon name="ios-home" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <Carousel userInfo={this.state.userInfo} cards={this.state.cards}/>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
