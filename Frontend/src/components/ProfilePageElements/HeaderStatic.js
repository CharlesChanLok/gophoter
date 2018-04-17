import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

class HeaderStatic extends Component {

  render() {
    return (
      <ImageBackground style={styles.headerBackground} source={require('../../../assets/Images/choihung.jpg')}>

        <View style={styles.header}>

          <View style={styles.propicContainer}>
            <Image style={styles.propic} source={{ uri: this.props.url }} />
          </View>

          <Text style={styles.myname}>
            {this.props.name}
          </Text>

          <Text style={styles.mydescribe}>
            {this.props.email}
          </Text>

        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    height: 250
  },
  header: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  propicContainer: {
    marginTop: 60,
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  propic: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2
  },
  myname: {
    marginTop: 20,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  mydescribe: {
    fontSize: 15,
    color: '#0394c0',
    fontWeight: '300'
  }
});
const mapStateToProps = state => ({
  name: state.numbers.name,
  email: state.numbers.email,
  url: state.numbers.url,
  id: state.numbers.id
});
export default connect(mapStateToProps)(HeaderStatic)