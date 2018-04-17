import React, { Component } from 'react';
// import { Container, Content, List, ListItem, Thumbnail, Text, Body, Right, Button } from 'native-base';
import { Image, StyleSheet, Modal, ScrollView } from 'react-native';
import { View, DeckSwiper, Container, Content, Card, CardItem, Thumbnail, Text, Left, Right, Body, Button, List, ListItem, Icon } from 'native-base';

export default class Events extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <Container>
        <Content>
          <View>

            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
            >
              <ScrollView>
                <Text style={styles.logo}>Go Photer</Text>
                <Icon name="ios-navigate" style={{ alignSelf: 'center', color: '#ff8396' }} />
                <Text style={styles.location}>
                  Central-Shootout
               </Text>
                <Text style={{ alignSelf: 'center', fontSize: 20, fontFamily: 'Montserrat-SemiBold' }}>Attenders</Text>
                <Text note style={styles.datetime}>15th May 21:15</Text>

                <View style={{ marginTop: 40, alignSelf: 'center', }}>
                  <List>
                    <ListItem noBorder>
                      <Thumbnail style={styles.thumbnail} source={{ uri: 'https://instagram.fhkg3-1.fna.fbcdn.net/vp/78e1ab9d6d35eebdd2cde891e3a03cef/5B4FBC70/t51.2885-19/s150x150/26865485_161280891185375_4097005467279032320_n.jpg' }} />
                      <Text style={styles.attenders} >Erik Hendenfalk</Text>
                    </ListItem>
                  </List>

                  <List>
                    <ListItem noBorder>
                      <Thumbnail style={styles.thumbnail} source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/464b8db2133e3dac0b7dda9e93ee08c7/5B50E566/t51.2885-19/s150x150/12797989_244314302584259_967488229_a.jpg' }} />
                      <Text style={styles.attenders} >Cloe Ferrando</Text>
                    </ListItem>
                  </List>

                  <List>
                    <ListItem noBorder>
                      <Thumbnail style={styles.thumbnail} source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/0ce050da9da06c9918816616e4ae1a83/5B5EBC9D/t51.2885-19/s150x150/28764392_175336276604502_8864108506559545344_n.jpg' }} />
                      <Text style={styles.attenders} >Virgina Nigro</Text>
                    </ListItem>
                  </List>

                  <List>
                    <ListItem noBorder>
                      <Thumbnail style={styles.thumbnail} source={{ uri: 'https://instagram.fhkg3-1.fna.fbcdn.net/vp/c0abd48aa5ba098f00d9299b9d73acfc/5B5C8E6B/t51.2885-19/s150x150/25011150_168512277078212_8245775920518922240_n.jpg' }} />
                      <Text style={styles.attenders} >Tim Ching</Text>
                    </ListItem>
                  </List>

                  <List>
                    <ListItem noBorder>
                      <Thumbnail style={styles.thumbnail} source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/b37d75acf4787debe4847ae76b622756/5B63B70D/t51.2885-19/s150x150/23416395_152436502033835_6553802966195765248_n.jpg' }} />
                      <Text style={styles.attenders} > Steve Divish</Text>
                    </ListItem>
                  </List>
                </View>


                <Button style={styles.modalbutton} full info onPress={() => { this.setModalVisible(false) }}>
                  <Icon name="arrow-back" />
                  <Text style={styles.returnbutton}>My Profile</Text>
                </Button>
              </ScrollView>
            </Modal>


            <List>
              <ListItem>
                <Thumbnail source={{ uri: 'https://instagram.fhkg3-1.fna.fbcdn.net/vp/78e1ab9d6d35eebdd2cde891e3a03cef/5B4FBC70/t51.2885-19/s150x150/26865485_161280891185375_4097005467279032320_n.jpg' }} />
                <Body>
                  <Text style={styles.attenders}>Erik Hendenfalk</Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => this.setModalVisible(true)}>
                    <Text note style={{ color: '#ff8396' }}>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem>
                <Thumbnail source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/464b8db2133e3dac0b7dda9e93ee08c7/5B50E566/t51.2885-19/s150x150/12797989_244314302584259_967488229_a.jpg' }} />
                <Body>
                  <Text style={styles.attenders}>Cloe Ferrando</Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => this.setModalVisible(true)}>
                    <Text note style={styles.viewbutton}>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem>
                <Thumbnail source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/0ce050da9da06c9918816616e4ae1a83/5B5EBC9D/t51.2885-19/s150x150/28764392_175336276604502_8864108506559545344_n.jpg' }} />
                <Body>
                  <Text style={styles.attenders}>Virgina Nigro</Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => this.setModalVisible(true)}>
                    <Text note style={styles.viewbutton}>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <Thumbnail source={{ uri: 'https://instagram.fhkg3-1.fna.fbcdn.net/vp/a3e2f173acc623c0d281761abf692174/5B523277/t51.2885-19/s150x150/14031651_316214658727036_306004320_a.jpg' }} />
                <Body>
                  <Text style={styles.attenders}>Alistair Lam</Text>

                </Body>
                <Right>
                  <Button transparent onPress={() => this.setModalVisible(true)}>
                    <Text note style={styles.viewbutton}>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem>
                <Thumbnail source={{ uri: 'https://instagram.fhkg3-1.fna.fbcdn.net/vp/b37d75acf4787debe4847ae76b622756/5B63B70D/t51.2885-19/s150x150/23416395_152436502033835_6553802966195765248_n.jpg' }} />
                <Body>
                  <Text style={styles.attenders}>Steve Divish</Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => this.setModalVisible(true)}>
                    <Text note style={styles.viewbutton}>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem>
                <Thumbnail source={{ uri: 'https://instagram.fhkg3-1.fna.fbcdn.net/vp/ca75e7c9e0471c5ca6a6d1182670e19d/5B5CD445/t51.2885-19/s150x150/14262883_301061306925458_1843307609_a.jpg' }} />
                <Body>
                  <Text style={styles.attenders}>Tommy Worden</Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => this.setModalVisible(true)}>
                    <Text note style={styles.viewbutton}>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  modalbutton: {
    backgroundColor: '#ff8396',
    marginTop: 20

  },

  logo: {
    textAlign: 'center',
    fontFamily: 'Pacifico',
    fontSize: 60,
    color: '#ff8396',
    paddingTop: 30,
    paddingBottom: 30,
  },

  attenders: {
    marginLeft: 10,
    width: 100,
    fontFamily: 'Montserrat-SemiBold'
  },

  thumbnail: {
    marginRight: 10
  },
  datetime: {
    alignSelf: 'center',
    marginTop: 10,
    fontFamily: 'Montserrat-SemiBold'
  },

  location: {
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold'
  },
  returnbutton: {
    fontFamily: 'Montserrat-SemiBold'
  },
  viewbutton: {
    color: '#ff8396',
  }


});