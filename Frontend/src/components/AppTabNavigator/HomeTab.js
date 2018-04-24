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
import Carousel from '../Carousel';
import { connect, dispatch } from 'react-redux';
import { serverevent } from '../../store/actions/users';

class HomeTab extends Component {
  componentWillMount() {
    axios.get("http://159.65.133.33/events")
      .then(res => {
        console.log("EVENT DATA", res.data) // current new events
        this.props.item(res.data);
      })
      .catch((err) => { alert("Something Went wrong "+ err) });
  }
  static navigatorOptions = {

    tabBarIcon: ({ tintColor }) => (
      <icon name="ios-home" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <Carousel/>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const mapDispatchToProps = (dispatch) => ({
  item: (items) => dispatch(serverevent(items))
});

export default connect(state => ({
  profile: state.numbers.profile,
  id: state.numbers.id,
}), mapDispatchToProps)(HomeTab)