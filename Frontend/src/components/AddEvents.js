import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button, Card, CardItem, } from 'native-base';
import { TouchableOpacity, ActivityIndicator, View, TextInput, StyleSheet, Image } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import axios from 'axios';
import moment from 'moment';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import { addevent } from '../store/actions/users';
import { connect } from 'react-redux';

const options = {
  title: 'Select a photo',
  takePhotoButtonTitle: 'Take a photo',
  chooseFromLibraryButtonTitle: 'Choose from gallery',
  qality: 1
};

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: null,
      timeStart: 0,
      timeEnd: 0,
      isDateTimePickerVisible: false,
      datetime: null,
      location: null,
      title: null,
      imageSource: null,
      data: null,
      loading: false
    };
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (datetime) => {

    this.setState({
      chosenDate: moment(datetime).format('MMM, Do YYYY HH:mm'),
      datetime: datetime
    })
    this._hideDateTimePicker();
  };

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
          imageSource: source, //Phone Image Source
          data: response   //data.data is the photo image
        });


      }
    });
  }

  async uploadPhoto() {
    if (this.state.data != null && this.state.location != null && this.state.title != null && this.state.chosenDate != null) {
      this.setState({ loading: true });
      const resImage = await RNFetchBlob.fetch('POST', `http://10.0.2.2:3000/photos/${this.props.id}`, {
        Authorization: "Bearer access-token",
        otherHeader: "foo",
        'Content-Type': 'multipart/form-data',
      }, [
          { name: 'image', filename: this.state.data.fileName, type: this.state.data.type, data: this.state.data.data }
        ]);
      const res2 = await axios.post('http://10.0.2.2:3000/events', {
        hostId: 1,
        datetime: this.state.datetime,
        location: this.state.location,
        title: this.state.title,
        imgUrl: resImage.json()
      });
      this.setState({
        loading: false,
        imageSource: null,
        data: null,
        datetime: null,
        location: null,
        title: null
      })
      this.prop.addevent(dispatch({
        hostId: this.props.id,
        datetime: this.state.datetime,
        location: this.state.location,
        title: this.state.title,
        img_link: data.data}
      ));
    }
  }

  renderUpload() {
    if (this.state.loading === false) {
      return (
        <Button full info style={styles.button} onPress={() => this.uploadPhoto()}>
          <Text style={styles.text}>Submit</Text>
        </Button>)
    } else {
      return <ActivityIndicator size="large" color="#00ff00" />;
    }
  }
  render() {

    return (
      <Container style={{ backgroundColor: '#fff' }}>

        <View>
          <Text style={styles.logo}>Go Photer</Text>
        </View>
        <Content style={{ marginTop: 30 }}>
          <Card style={{ flex: 1 }} >

            <CardItem style={{ alignSelf: 'stretch', paddingRight: 50 }}>

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

            <CardItem style={{ alignSelf: 'stretch', paddingRight: 50 }}>

              <Icon name="ios-navigate" style={styles.icon} />

              <Body style={styles.body}>
                <TextInput style={styles.textinput} underlineColorAndroid={'rgba(0,0,0,0)'}
                  placeholder="Loction"
                  onChangeText={(location) => this.setState({ location: location })}
                />
              </Body>

            </CardItem>

            <CardItem style={{ alignSelf: 'stretch', paddingRight: 50 }}>

              <Icon name="ios-paper" style={styles.icon} />

              <Body>
                <TextInput style={styles.textinput} underlineColorAndroid={'rgba(0,0,0,0)'}
                  placeholder="Event's Title"
                  onChangeText={(title) => this.setState({ title: title })}
                />
              </Body>

            </CardItem>
            <CardItem>
              <TouchableOpacity onPress={() => this.selectPhoto()}>
                <Image style={styles.image}
                  source={this.state.imageSource == null ? require('../../assets/Images/upload2.png') : this.state.imageSource}
                />
              </TouchableOpacity>
            </CardItem>
            {this.renderUpload()}
          </Card>
        </Content>
      </Container >
    )
  }
};

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
    marginTop: 30,
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'center',
    paddingLeft: 145,
    paddingRight: 145
  },
  textinput: {
    color: "#ff8396",
    fontSize: 20,
    alignSelf: 'stretch',
    fontFamily: 'Montserrat-SemiBold',
    paddingRight: 20
  },

  submit: {
    fontFamily: 'Montserrat-SemiBold'
  },

  image: {
    width: 170,
    height: 170,
    alignSelf: 'center',
    marginLeft: 100

  }
});
const mapDispatchToProps = (dispatch) => ({
    addevent: (info) => dispatch(addevent(info))
  });
const mapStateToProps = (state) => ({
  id: state.numbers.id,
  event: state.numbers.info
});
export default connect(mapStateToProps, mapDispatchToProps)(Events)