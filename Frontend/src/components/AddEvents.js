import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button } from 'native-base';
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
    datetime: datetime})
    //alert('A date has been picked: ' + datetime);
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
      <Container style={{ backgroundColor: '#fff', paddingTop: 70 }}>
        <Content>
          <List>
            <ListItem icon noBorder>
              <Left>
                <Icon name="ios-time" style={styles.icon} />
              </Left>
              <Body style={styles.body}>
                <TouchableOpacity onPress={this._showDateTimePicker}>
                  <View>
                    <Text style={styles.text}>Date And Time Picker</Text>
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
              <Right style={styles.body}>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>

        <Content>
          <List>
            <ListItem icon noBorder>
              <Left>
                <Icon name="ios-navigate" style={styles.icon} />
              </Left>
              <Body style={styles.body}>
                <Text style={styles.text}>Add A Location</Text>
                <TextInput style={styles.textinput}
                  placeholder="type your location here!"
                  onChangeText={(location) => this.setState({ location: location })}
                />
              </Body>
              <Right style={{ borderBottomWidth: 0 }}>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>

        <Content>
          <List>
            <ListItem icon noBorder>
              <Left>
                <Icon name="ios-paper" style={styles.icon} />
              </Left>
              <Body style={styles.body}>
                <Text style={styles.text}>Add Event's Title</Text>

                <TextInput style={styles.textinput}
                  placeholder="Type your event's title here!"
                  onChangeText={(title) => this.setState({ title: title })}
                />
              </Body>
              <Right style={styles.body}>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>

        <Button full info style={styles.button} onPress={() => this.handleSubmit()}>
          <Text>Submit</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 20,
  },
  body: {
    borderBottomWidth: 0
  },
  icon: {
    color: '#ff8396'
  },
  button: {
    backgroundColor: "#ff8396",
    marginBottom: 40
  },
  textinput: {
    alignSelf: 'center',
    color: "#ff8396",
    fontSize: 20
  },
  


});