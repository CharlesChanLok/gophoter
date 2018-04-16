import React, { Component } from 'react';
import axios from 'axios';

import {
  Platform,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Text, Icon } from 'native-base';
import Photos from './ProfilePageElements/Photos';
import Events from './ProfilePageElements/Events';
import HeaderStatic from './ProfilePageElements/HeaderStatic';
import Spots from './ProfilePageElements/Spots';

class ProfileScreen extends Component {
  state = { userInfo : {} };
  componentWillMount() {
    axios.get(`http://10.0.2.2:3000/users/${1}`)
      .then(res => {
        this.setState({ userInfo: res.data})}
    );
  }
  render() {
    return (
      <View style={{ flexGrow: 1 }}>
        <HeaderStatic userInfo = {this.state.userInfo}/>
        <Container style={{ flex: 1 }}>
          <Tabs>
            <Tab heading={<TabHeading style={styles.heading}><Icon name="ios-camera" style={styles.icon} /><Text style={styles.text}>Photos</Text></TabHeading>}>
              <Photos userInfo={this.state.userInfo}/>
            </Tab>
            <Tab heading={<TabHeading style={styles.heading}><Icon name="ios-bookmarks" style={styles.icon} /><Text style={styles.text}>Events</Text></TabHeading>}>
              <Events />
            </Tab>
            <Tab heading={<TabHeading style={styles.heading}><Icon name="ios-navigate" style={styles.icon} /><Text style={styles.text}>Spots</Text></TabHeading>}>
              <Spots />
            </Tab>
          </Tabs>
        </Container>
      </View>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  heading: {
    backgroundColor: "#FFF"
  },
  icon: {
    color: "#ff8396"
  },
  text: {
    color: "#000000",
  }
});
