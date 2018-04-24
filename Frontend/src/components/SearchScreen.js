import React, { Component } from 'react';
import { StyleSheet, View,  } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, List, ListItem } from 'native-base';
import {connect, dispatch} from 'react-redux';
import { userlist } from '../store/actions/users';
import axios from 'axios';
class SearchScreen extends Component {
    state={
      text:'',
      filter:[]
    }
  componentWillMount() {
    url = `http://159.65.133.33/user/userlist`;
    axios.get(url)
    .then(res => {
      this.props.userlists(res.data);
      })
    .catch((err)=> {throw err})
  }
    setSearchText(event){
      var searchText = event.nativeEvent.text;
      var data  = this.props.userlist;
      console.log("DATA FROM userlist: " + data);
      var searchText = searchText.trim().toLowerCase();
      var filtered = data.filter(l => {
      return l.toLowerCase().match( searchText );
     });
      this.setState({
       filter: filtered
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
  userlists: (data) => dispatch(userlist(data)),
});
const mapStateToProps = (state) => ({
  userlist: state.numbers.userlist
});
export default connect(mapStateToProps,mapDispatchToProps)(SearchScreen);