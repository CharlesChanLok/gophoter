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
import { connect, dispatch } from 'react-redux';
import { userphotos } from '../store/actions/users';
class ProfileScreen extends Component {
  async componentWillMount() {
    axios.get(`http://159.65.133.33/photos/${this.props.id}`)
      .then((res) => {
        console.log(res.data)
        this.props.userspicture(res.data);
      })
      .catch((err)=>"Something went wrong " + err);
  }
  render() {
    return (
      <View style={{ flexGrow: 1 }}>
        <HeaderStatic/>
        <Container style={{ flex: 1 }}>
          <Tabs>
            <Tab heading={<TabHeading style={styles.heading}><Icon name="ios-camera" style={styles.icon} /><Text style={styles.text}>Photos</Text></TabHeading>}>
              <Photos/>
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

const styles = StyleSheet.create({
  heading: {
    backgroundColor: "#FFF"
  },
  icon: {
    color: "#ff8396"
  },
  text: {
    color: "#000000",
    fontFamily: 'Montserrat-SemiBold'
  }
});
const mapDispatchToProps = (dispatch) => ({
  userspicture: (photo) => dispatch(userphotos(photo)),
});
const mapStatetoProps = (state) => ({
  id: state.numbers.id
})
export default connect(mapStatetoProps, mapDispatchToProps)(ProfileScreen)