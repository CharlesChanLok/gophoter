import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default class SearchScreen extends Component {
  render() {
    return (
     
        <Container style={{ backgroundColor: "#FFF" }} >
          <Text style={styles.logo}>Go Photer</Text>
          <Header noBorder searchBar rounded style={{ backgroundColor: "#FFF", borderRadius: 2, marginTop: 10 }}>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
              <Icon name="ios-people" style={{ color: "#E75480" }} />
            </Item>
            <Button transparent>
              <Text style={{ color: "#E75480" }}>Search</Text>
            </Button>
          </Header>
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

