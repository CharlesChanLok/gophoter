import React, { Component } from 'react';
import { StyleSheet, View,  } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, List, ListItem } from 'native-base';
import {connect} from 'react-redux';
import { userlist } from '../store/actions/users';
import axios from 'axios';
class SearchScreen extends Component {
    urls = [`http://10.0.2.2:3000/events`];
    state={
      text:'',
      filter:[]
    }
  componentWillMount() {
    axios.get(url)
    .then(res => {
      this.props.userlist(res.data);
      });
  }
    setSearchText(event){
      var searchText = event.nativeEvent.text;
      var data  = this.props.userlist;
      var searchText = searchText.trim().toLowerCase();
      data = data.filter(l => {
      return l.toLowerCase().match( searchText );
     });
      this.setState({
       filter : data
      // var list = this.state.initial.slice();
      // this.setState({ filter: list });
      // var filter = this.state.filter.slice();
      // var filtered = filter.filter(function (items) {
      // return items.toLowerCase().search(event.nativeEvent.value.toString().toLowerCase()) !== -1;
    });
    // this.setState({ filter: filtered });
    }
    list(){
    return this.state.filter.map((data) => {
      return (
        <ListItem><Text>{data}</Text></ListItem>
      )
    })
  }
    render(){
    return (
        <Container style={{ backgroundColor: "#FFF" }} >
          <Text style={styles.logo}>Go Photer</Text>
          <Header noBorder searchBar rounded style={{ backgroundColor: "#FFF", borderRadius: 2, marginTop: 10 }}>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" onChange={this.setSearchText.bind(this)}></Input>
              <Icon name="ios-people" style={{ color: "#E75480" }} />
            </Item>
            <Button transparent>
              <Text style={{ color: "#E75480" }}>Search</Text>
            </Button>
          </Header>
          <List>
            {this.list()}
          </List>
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
  },
});

const mapDispatchToProps = (dispatch) => ({
  userlist: (data) => dispatch(userlist(data)),
});
const mapStateToProps = (state) => ({
  userlist: state.numbers.userlist
});
export default connect(mapStateToProps,mapDispatchToProps)(SearchScreen);