import React, { Component } from 'react';
import { Image, StyleSheet, Modal, ScrollView, TouchableHighlight } from 'react-native';
import { View, DeckSwiper, Container, Card, CardItem, Thumbnail, Text, Left, Right, Body, Button, List, ListItem, Icon } from 'native-base';
import getDirections from './ViewMap';
import axios from 'axios';
import {connect} from 'react-redux';
class DeckSwiperExample extends Component {
    state = {
        modalVisible: false
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    handleGetDirections = (latitude, longitude) => {
        const data = {
            destination: {
                latitude: latitude,
                longitude: longitude
            }
        }

        getDirections(data)
    }

    renderInfoList() {
        if (this.props.items.length > 0) {
            return (this.props.items.map(function (rec, i) {
                return (
                    <List>
                        <ListItem noBorder>
                            <Thumbnail source={this.props.profile.picture } />
                            <Text style={styles.attenders} >{this.props.profile.name}</Text>
                        </ListItem>
                    </List>
                );
            }, this));
        } else {
            return;
        }
    }
    renderDeckSwiper = () => {
        console.log("itmes information :" + this.props.items);
        if (this.props.items.length > 0) {
            return (
                <DeckSwiper
                    dataSource={this.props.items}
                    renderItem={items =>
                        <Card style={{ elevation: this.props.items.length }}>
                            <CardItem cardBody>
                                <Image style={styles.carouselimage} source={{ uri: items.imgUrl }} />
                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Thumbnail source={{ uri: this.props.profile.picture }} />
                                    <Body>
                                        <Text style={styles.name}>{this.props.profile.name}</Text>
                                        <Text note style={styles.location}>{items.location}</Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <TouchableHighlight onPress={() => { this.handleGetDirections(items.latitude, items.longitude) }}>
                                        <Icon style={styles.icon} name="ios-navigate" />
                                    </TouchableHighlight>
                                    <Text note>{Date(items.date)}</Text>
                                </Right>
                            </CardItem>

                            <Button full info style={styles.button} onPress={() => this.setModalVisible(true)}>
                                <Text style={{ fontFamily: 'Montserrat-SemiBold' }}>Info</Text>
                            </Button>
                        </Card>
                    }
                />
            )
        } else {
            return;
        }
    }
    render() {
        return (

            <Container>
                <View>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                    >
                        <ScrollView>

                            <Text style={styles.logo}>Go Photer</Text>
                            <Icon name="ios-navigate" style={{ alignSelf: 'center', color: '#ff8396' }} />
                            <Text style={styles.title}>
                                Central-Shootout
                             </Text>

                            <Text style={styles.secondline}>Attenders</Text>
                            <Text note style={styles.datetime}>15th May 21:15</Text>


                            <View style={{ marginTop: 40, alignSelf: 'center', }}>
                                {this.renderInfoList()}
                            </View>

                            <View style={{ flexDirection: "row", alignSelf: "center", paddingTop: 30, paddingBottom: 30, marginTop: 50 }}>

                                <Button block info style={{ width: 150 }}>
                                    <Text >Join</Text>
                                </Button>

                                <Button block danger onPress={() => { this.setModalVisible(false) }} style={{ width: 150 }}>
                                    <Text>Go Back</Text>
                                </Button>
                            </View>
                        </ScrollView>
                    </Modal>

                    {this.renderDeckSwiper()}
                   
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    modalbutton: {
        backgroundColor: '#ff8396',
        marginBottom: 0
    },

    logo: {
        textAlign: 'center',
        fontFamily: 'Pacifico',
        fontSize: 60,
        color: '#ff8396',
        paddingTop: 30,
        paddingBottom: 30,
        


    },
    carouselimage: {
        height: 500,
        flex: 1,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },


    title: {
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 10,
        fontFamily: 'Montserrat-SemiBold',
    },
    button: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#ff8396',
        padding: 5,
        fontFamily: 'Montserrat-SemiBold'
    },

    name: {
        fontFamily: 'Montserrat-SemiBold'
    },

    location: {
        fontFamily: 'Montserrat-Regular'
    },

    title: {
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 10
    },
    button:{
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#ff8396',
        padding: 5
    },


    attenders: {
        marginLeft: 10,
        width: 100,
        fontFamily: 'Montserrat-SemiBold',
    },
    icon: {
        color: '#ff8396',
        fontSize: 35,
        marginRight: 25
    },
    secondline: {
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
    },
    datetime: {
        alignSelf: 'center',
        marginTop: 10,
        fontFamily: 'Montserrat-SemiBold'
    },
    logo2: {
        textAlign: 'center',
        fontFamily: 'Pacifico',
        color: '#ff8396',
        fontSize: 50,
        paddingBottom: 10
    }
});

const mapStateToProps = state => ({
    profile: state.numbers.profile,
    items: state.numbers.items
  });
  export default connect(mapStateToProps)(DeckSwiperExample);
