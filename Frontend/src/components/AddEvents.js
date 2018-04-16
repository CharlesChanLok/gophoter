import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button, Card, CardItem, } from 'native-base';
import { TouchableOpacity, View, TextInput, StyleSheet } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import axios from 'axios';
import moment from 'moment'
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
      title: ''
    };
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
                <TextInput style={styles.textinput}
                  placeholder="type your location here!"
                  onChangeText={(location) => this.setState({ location: location })}
                />
              </Body>
             
            </CardItem>


            <CardItem style={{ alignSelf: 'stretch' }}>
         
                <Icon name="ios-paper" style={styles.icon} />
             
              <Body>
                <TextInput style={styles.textinput}
                  placeholder="Event's Title"
                  onChangeText={(title) => this.setState({ title: title })}
                />
              </Body>
             
            </CardItem>
          </Card>
        </Content>


        <Button full info style={styles.button} onPress={() => this.handleSubmit()}>
          <Text>Submit</Text>
        </Button>

      </Container>
    );
  }
}

const styles = StyleSheet.create({


  logo: {
    textAlign: 'center',
    fontFamily: 'Pacifico',
    fontSize: 60,
    color: '#ff8396',


  },

  text: {
    alignSelf: 'stretch',
    fontSize: 20,
    marginTop: 10
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
    marginBottom: 0
  },
  textinput: {
    color: "#ff8396",
    fontSize: 20,
    alignSelf: 'stretch'
  },



});