import React, { Component } from 'react';
import { Image, StyleSheet, Modal, ScrollView, TouchableHighlight } from 'react-native';
import { View, DeckSwiper, Container, Card, CardItem, Thumbnail, Text, Left, Right, Body, Button, List, ListItem, Icon } from 'native-base';
import getDirections from './ViewMap'
import axios from 'axios';
// const cards = [
//     {
//         text: 'Steve Divish',
//         description: 'Central Long Exposure',
//         name: 'One',
//         image: require('../../assets/Images/image4.jpg'),
//         latitude: 22.279453,
//         longitude: 114.166283
//     },
//     {
//         text: 'Virginia Nirgo',
//         description: 'East Shinjuku Shootout ',
//         name: 'Two',
//         image: require('../../assets/Images/image5.jpg'),
//         latitude: 35.695256,
//         longitude: 139.699706
//     },
//     {
//         text: 'Cloe Ferrnando',
//         description: 'Central Urban Shootout',
//         name: 'Three',
//         image: require('../../assets/Images/image6.jpg'),
//         latitude: 22.279626,
//         longitude: 114.160563
//     },
//     {
//         text: 'Jonathan Doku',
//         description: 'Victoria Habour Shootout',
//         name: 'Four',
//         image: require('../../assets/Images/image7.jpg'),
//         latitude: 22.282998,
//         longitude: 114.166177
//     },
//     {
//         text: 'Tommy Worden',
//         description: 'High West Peak Shootout',
//         name: 'Five',
//         image: require('../../assets/Images/image8.jpg'),
//         latitude: 22.269196,
//         longitude: 114.134274
//     },
//     {
//         text: 'Emily Boreel',
//         description: 'Roppongi Hills, Tokyo',
//         name: 'Six',
//         image: require('../../assets/Images/image9.jpg'),
//         latitude: 35.660464,
//         longitude: 139.729249
//     },

// ];
export default class DeckSwiperExample extends Component {
    state = {
        modalVisible: false,
        cards: [],
        userInfo: {}
    };

    // urls = [`http://10.0.2.2:3000/users/${1}`,
    //     `http://10.0.2.2:3000/events`
    // ];

    // componentWillMount() {
    //     Promise.all(this.urls.map(url => {
    //         return axios.get(url).then(res => res)
    //     })).then(res => {
    //         console.log(res[1].data)
    //         console.log(res[0].data)
    //         this.setState({
    //             userInfo: res[0].data,
    //             cards: res[1].data
    //         })
    //     })
    // }

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
        if (this.props.cards.length > 0) {
            return (this.props.cards.map(function (rec, i) {
                return (
                    <List>
                        <ListItem noBorder>
                            <Thumbnail source={{ uri: this.props.userInfo }} />
                            <Text style={styles.attenders} >{this.props.userInfo.first_name} {this.props.userInfo.last_name}</Text>
                        </ListItem>
                    </List>
                );
            }, this));
        } else {
            return;
        }
    }



    renderDeckSwiper = () => {
        if (this.props.cards.length > 0) {
            return (
                <DeckSwiper
                    dataSource={this.props.cards}
                    renderItem={item =>
                        <Card style={{ elevation: this.props.cards.length }}>
                            <CardItem cardBody>
                                <Image style={styles.carouselimage} source={{ uri: item.img_url }} />
                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Thumbnail source={{ uri: this.props.userInfo.profile_image }} />
                                    <Body>
                                        <Text style={styles.name}>{this.props.userInfo.first_name} {this.props.userInfo.last_name}</Text>
                                        <Text note style={styles.location}>{item.location}</Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <TouchableHighlight onPress={() => { this.handleGetDirections(item.latitude, item.longitude) }}>
                                        <Icon style={styles.icon} name="ios-navigate" />
                                    </TouchableHighlight>
                                    <Text note>{Date(item.date)}</Text>
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
        console.log(this.state.cards);


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
                                {/* <List>
                                    <ListItem noBorder>
                                        <Thumbnail source={{ uri: 'https://instagram.fhkg3-1.fna.fbcdn.net/vp/78e1ab9d6d35eebdd2cde891e3a03cef/5B4FBC70/t51.2885-19/s150x150/26865485_161280891185375_4097005467279032320_n.jpg' }} />
                                        <Text style={styles.attenders} >Erik Hendenfalk</Text>
                                    </ListItem>
                                </List>

                                <List>
                                    <ListItem noBorder>
                                        <Thumbnail source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/464b8db2133e3dac0b7dda9e93ee08c7/5B50E566/t51.2885-19/s150x150/12797989_244314302584259_967488229_a.jpg' }} />
                                        <Text style={styles.attenders} >Cloe Ferrando</Text>
                                    </ListItem>
                                </List>

                                <List>
                                    <ListItem noBorder>
                                        <Thumbnail source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/0ce050da9da06c9918816616e4ae1a83/5B5EBC9D/t51.2885-19/s150x150/28764392_175336276604502_8864108506559545344_n.jpg' }} />
                                        <Text style={styles.attenders} >Virgina Nigro</Text>
                                    </ListItem>
                                </List>

                                <List>
                                    <ListItem noBorder>
                                        <Thumbnail source={{ uri: 'https://instagram.fhkg3-1.fna.fbcdn.net/vp/a3e2f173acc623c0d281761abf692174/5B523277/t51.2885-19/s150x150/14031651_316214658727036_306004320_a.jpg' }} />
                                        <Text style={styles.attenders} >Alistair Lam</Text>
                                    </ListItem>
                                </List> */}
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
                    {/* <DeckSwiper
                        dataSource={this.state.cards}

                        renderItem={item =>


                            <Card style={{ elevation: this.state.cards.length }}>



                                <CardItem cardBody>
                                    <Image style={styles.carouselimage} source={{ uri: item.img_url }} />
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={{ uri: this.state.userInfo.profile_image }} />
                                        <Body>
                                            <Text style={styles.name}>{item.text}</Text>
                                            <Text note style={styles.location}>{item.description}</Text>
                                        </Body>
                                    </Left>
                                    <Right>
                                        <TouchableHighlight onPress={() => { this.handleGetDirections(item.latitude, item.longitude) }}>
                                            <Icon style={styles.icon} name="ios-navigate" />
                                        </TouchableHighlight>
                                        <Text note>15th May 21:15</Text>
                                    </Right>
                                </CardItem>

                                <Button full info style={styles.button} onPress={() => this.setModalVisible(true)}>
                                    <Text style={{ fontFamily: 'Montserrat-SemiBold' }}>Info</Text>
                                </Button>
                            </Card>
                        }
                    /> */}
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
