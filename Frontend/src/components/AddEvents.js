import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button, Card, CardItem, } from 'native-base';
import { TouchableOpacity, ActivityIndicator, View, TextInput, StyleSheet, Image } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import axios from 'axios';
import moment from 'moment'
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';

const options = {
  title: 'Select a photo',
  takePhotoButtonTitle: 'Take a photo',
  chooseFromLibraryButtonTitle: 'Choose from gallery',
  qality: 1

};

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: '',
      timeStart: 0,
      timeEnd: 0,
      isDateTimePickerVisible: false,
      datetime: '',
      location: '',
      title: '',
      imageSource: null,
      data: null,
      loading: false
    };
  }
  selectPhoto() {
    this.setState({ loading: false })
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          imageSource: source,
          data: response
        });
      }
    });
  }

  uploadPhoto() {
    if (this.state.data != null) {
      this.setState({ loading: true });
      RNFetchBlob.fetch('POST', `http://10.0.2.2:3000/photos/${1}`, {
        Authorization: "Bearer access-token",
        otherHeader: "foo",
        'Content-Type': 'multipart/form-data',
      }, [
          { name: 'image', filename: this.state.data.fileName, type: this.state.data.type, data: this.state.data.data }
        ]).then((resp) => {
    
          this.setState({
            loading: false,
            imageSource: null,
            data: null
          })
        }).catch((err) => {
         
        })
    }
  }

  renderUpload() {
    if (this.state.loading === false) {
      return (
        <Button style={styles.button} full info onPress={() => this.uploadPhoto()}>
          <Text style={styles.text}>Upload</Text>
        </Button>)
    }
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (datetime) => {

    this.setState({
      chosenDate: moment(datetime).format('MMM, Do YYYY HH:mm'),
      datetime: datetime
    })
    alert('A date has been picked: ' + datetime);
    this._hideDateTimePicker();
  };

  handleSubmit = () => {
    axios.post('http://10.0.2.2:3000/events', {
      hostId: 1,
      datetime: this.state.datetime,
      location: this.state.location,
      title: this.state.title
    })
      .then((response) => {
        console.log(response)
        alert('Event created')
        this.setState({
          datetime: '',
          location: '',
          title: ''
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
      
        <View>
          <Text style={styles.logo}>Go Photer</Text>
        </View>
        <Content style={{ marginTop: 50 }}>
          <Card style={{ flex: 1 }} >

            <CardItem style={{ alignSelf: 'stretch' }}>

              <Icon name="ios-time" style={styles.icon} />

              <Body style={styles.body}>
                <TouchableOpacity onPress={this._showDateTimePicker}>
                  <View>
                    <Text style={styles.text}>DateTimePicker</Text>
                    <Text note style={styles.textinput}>{this.state.chosenDate}</Text>
                  </View>
                </TouchableOpacity>

                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  mode='datetime'
                  onConfirm={this._handleDatePicked}
                  onCancel={this._hideDateTimePicker}
                  is24Hour={false}
                />
              </Body>

            </CardItem>

            <CardItem style={{ alignSelf: 'stretch' }}>

              <Icon name="ios-navigate" style={styles.icon} />

              <Body style={styles.body}>
                <TextInput style={styles.textinput} underlineColorAndroid={'rgba(0,0,0,0)'}
                  placeholder="Loction"
                  onChangeText={(location) => this.setState({ location: location })}
                />
              </Body>

            </CardItem>

            <CardItem style={{ alignSelf: 'stretch' }}>

              <Icon name="ios-paper" style={styles.icon} />

              <Body>
                <TextInput style={styles.textinput} underlineColorAndroid={'rgba(0,0,0,0)'}
                  placeholder="Event's Title"
                  onChangeText={(title) => this.setState({ title: title })}
                />
              </Body>

            </CardItem>
          </Card>



        </Content>
        <TouchableOpacity onPress={() => this.selectPhoto()}>
            <Image style={styles.image}
              source={this.state.imageSource == null ? require('../../assets/Images/upload2.png') : this.state.imageSource}
            />
          </TouchableOpacity>
         {this.renderUpload()}
        <Button full info style={styles.button} onPress={() => this.handleSubmit()}>
          <Text style={styles.submit}>Submit</Text>
        </Button>
  
         
      

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    textAlign: 'center',
    fontFamily: 'Pacifico',
    fontSize: 50,
    color: '#ff8396',
    paddingTop: 10
  },

  text: {
    alignSelf: 'stretch',
    fontSize: 20,
    marginTop: 10,
    fontFamily: 'Montserrat-SemiBold'
  },
  body: {
    borderBottomWidth: 0,
    margin: 0,
    padding: 0,
    alignSelf: 'stretch'
  },
  icon: {
    color: '#ff8396',
    marginLeft: 80

  },
  button: {
    backgroundColor: "#ff8396",
    marginBottom: 0,
    fontFamily: 'Montserrat-SemiBold'
  },
  textinput: {
    color: "#ff8396",
    fontSize: 20,
    alignSelf: 'stretch',
    fontFamily: 'Montserrat-SemiBold'
  },

  submit: {
    fontFamily: 'Montserrat-SemiBold'
  },

  image: {
    width: 170,
    height: 170,
    alignSelf: 'center'

  }
});