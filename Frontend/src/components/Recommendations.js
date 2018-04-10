import React, { Component } from 'react';
import { ImageBackground, Image, ScrollView, View, StyleSheet, TouchableHighlight, Modal } from 'react-native';
import { Content, Card, CardItem, Body, Text, Left, Right, Thumbnail, Icon, Button } from 'native-base';



export default class Recommendations extends Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    render() {
        return (
            <View>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >

                    <Card >

                        <CardItem cardBody>
                            <Image style={styles.modalimage} source={require('../../assets/Images/test.jpg')} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/04697c22c18a6b9911e1789414581bf4/5B63C1A3/t51.2885-19/s150x150/20479307_259226047906088_8664596465227661312_a.jpg' }} />
                                <Body>
                                    <Text style={styles.modaltext}>Braemar Hill</Text>
                                    <Text note> By Ashley Grait</Text>
                                </Body>
                            </Left>
                            <Right>

                                <Text style={styles.direction}>Directions</Text>
                                <Text note>2.6K</Text>
                            </Right>

                        </CardItem>
                    </Card>


                    <Button style={styles.modalbutton} full info onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                        <Icon name="arrow-back" />
                        <Text>Recommendations</Text>
                    </Button>

                </Modal>

                <ScrollView style={{ flexGrow: 1 }}>

                    <Content style={{ flex: 1 }}>
                        <Card>
                            <CardItem cardBody button button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Braemar Hill</Text>

                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/instagrampeir.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Instagram Pier</Text>
                                        <Text note>10th May, Thursday</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Hopewell Center Elavator</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/mansion.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Montane Mansion</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Dragon's Back</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/mongkok.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Mong Kok Streets</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/templestreet.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Temple Street</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/central.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Central District</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/chinacity.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>China City Building</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/choihung.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Choi Hung Estates</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/image1.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Jockey Club Innovation Tower</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/midlevel.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Mid-Level Escalator </Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/swimmingshed.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Sai Wan Swimming Shed</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/replusebay.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Repulse Bay</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/lugardroad.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Lugard Road</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                    </Content>

                </ScrollView>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    context: {
        fontFamily: 'Pacifico',
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        padding: 80
    },
    middle: {

        alignItems: 'center',
        justifyContent: 'center'
    },

    imagebackground: {
        height: 200,
        flex: 1
    },
    modalimage: {
        height: 500,
        flex: 1
    },
    modaltext: {
        fontSize: 20
    },
    direction: {
        fontSize: 20,
        color: "#ff8396"
    },
    modalbutton: {
        backgroundColor: '#ff8396',
        marginBottom: 16
    }

});