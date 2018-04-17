import React, { Component } from 'react';
import { ImageBackground, Image, ScrollView, View, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { Content, Card, CardItem, Text, Left, Right, Body, Thumbnail, Icon, Button } from 'native-base';
import getDirections from './ViewMap'

const RecommendArray = [
    {
        Photo: require('../../assets/Images/lugardroad.jpg'),
        Location: 'Lugard Road',
        Photographer: ' By Ammr Eltilib',
        Distance: '3.1K',
        Description: ' A breath-taking view of Hong Kong city, try to stay there until it gets dark, you wont regret it!',
        latitude: 22.275660,
        longitude: 114.141750
    },
    {
        Photo: require('../../assets/Images/instagrampeir.jpg'),
        Location: 'Instagram Pier',
        Photographer: 'By Hugo Cheng',
        Distance: '1.5K',
        Description: 'If you want to take a break off the busy city, Instagram Pier is a great place to chill out after school or work. You will meet a lot of instagrammers there, best to shoot during golden hour',
        latitude: 22.288866,
        longitude: 114.134460
    },
    {
        Photo: require('../../assets/Images/dragonsback.jpg'),
        Location: 'Dragon\'s Back',
        Photographer: 'By Erik Hendenfalk',
        Distance: '8.6K',
        Description: 'A relatively easy hike, the view is sensational on top of the hill, seriosuly bring a drone!',
        latitude: 22.236929,
        longitude: 114.243225

    },
    {
        Photo: require('../../assets/Images/mansion.jpg'),
        Location: 'Montane Mansion',
        Photographer: 'By Thomas Lee',
        Distance: '4.6K',
        Description: 'Also known as the monster buidling, one of the most iconic photography shootout spot in Hong kong, best to shoot during night. ',
        latitude: 22.284210,
        longitude: 114.211976
    },
    {
        Photo: require('../../assets/Images/hopewell.jpg'),
        Location: 'Hopewell Center',
        Photographer: 'By Gordan Chung',
        Distance: '7.6K',
        Description: 'The elvator will take you from the 17th floor to the 64th floor, you will be able to get some awesome footage of the Hong Kong Island, best to bring a wide angle lens',
        latitude: 22.274633,
        longitude: 114.171759
    },
    {
        Photo: require('../../assets/Images/mongkok.jpg'),
        Location: 'Mong Kok Streets',
        Photographer: 'By Rex Wong',
        Distance: '3.6K',
        Description: 'The heart of urban streets, you will able to find a lot of local culture and one of the best place for street photography',
        latitude: 22.320365,
        longitude: 114.169773

    },
    {
        Photo: require('../../assets/Images/templestreets.jpg'),
        Location: 'Temple Street',
        Photographer: 'By Alistair Lam',
        Distance: '1.6K',
        Description: 'There are a couple of rooftops,carpark opposite the temple street allow you to capture some beautiful street photography',
        latitude: 22.306518,
        longitude: 114.169981
    },
    {
        Photo: require('../../assets/Images/central.jpg'),
        Location: 'Central District',
        Photographer: 'By Hugo Cheng',
        Distance: '2.6K',
        Description: 'There are so many places that you can shoot in Central District, we highly recommend you to go to Tamar Park during sunset and night hour',
        latitude: 22.281597,
        longitude: 114.165765
    },
    {
        Photo: require('../../assets/Images/chinacitybuilding.jpg'),
        Location: 'China City Building',
        Photographer: 'By Jessica Chen',
        Distance: '1.8K',
        Description: 'If you are into symmetrical photography, this is a place where you can go to point your camera upwards and capture that majestic moment ',
        latitude: 22.300873,
        longitude: 114.167901
    },
    {
        Photo: require('../../assets/Images/jockey.jpg'),
        Location: 'Innovation Tower',
        Photographer: 'By Rex Wong',
        Distance: '3.2K',
        Description: 'A great place for interior and portriat photography, the architecture of the buidling is simply amazing. ',
        latitude: 22.305556,
        longitude: 114.179167
    },
    {
        Photo: require('../../assets/Images/midlevel.jpg'),
        Location: 'Mid-Level Escalator',
        Photographer: 'By Hugo Cheng',
        Distance: '5.6K',
        Description: 'Head up to the Mid-Levels Escalators and shoot your vertical horizons there.',
        latitude: 22.283822,
        longitude: 114.155142

    },
    {
        Photo: require('../../assets/Images/choihung.jpg'),
        Location: 'Choi Hung Estates',
        Photographer: 'By Hugo Cheng',
        Distance: '6.6K',
        Description: 'Choi Hung Estates are surrounded with a lot of colorful buildings and basketball court, make it one of the most popular place for photography  .',
        latitude: 22.274633,
        longitude: 114.171759
    },
    {
        Photo: require('../../assets/Images/swimmingshed.jpg'),
        Location: 'Swimming Shed',
        Photographer: 'By Alistair Tam',
        Distance: '1.6K',
        Description: 'A sunset spot hidden in Sai Wan, it required a 15 mins walk to reach there from Kennedy Town.',
        latitude: 22.335481,
        longitude: 114.203821
    },
    {
        Photo: require('../../assets/Images/replusebay.jpg'),
        Location: 'Repluse Bay',
        Photographer: 'By Denise Cheng',
        Distance: '4.6K',
        Description: 'A great place for relexation and portrait photography, best to bring a portriat lens',
        latitude: 22.236766,
        longitude: 114.196325
    },
    {
        Photo: require('../../assets/Images/highwest.jpg'),
        Location: 'High West Peak',
        Photographer: 'By Ammr Eltilib',
        Distance: '2.6K',
        Description: 'To photograph the splendid sunset scene of Hong Kong, High West is a nice place where you can take sunset photos, remember to bring a tripod.',
        latitude: 22.269196,
        longitude: 114.134274
    },
]

export default class Recommendations extends Component {

    state = {
        modalVisible: false,
        Objnumber: 0
    };

    setModalVisible(visible, i) {
        this.setState({ modalVisible: visible });
        this.state.Objnumber = i
    }

    render_Recommendation() {
        return RecommendArray.map(function (rec, i) {
            return (
                <Card key={i} style={styles.card}>
                    <CardItem cardBody button onPress={() => this.setModalVisible(true, i)}>
                        <ImageBackground source={rec.Photo} style={styles.imagebackground}>
                            <View style={styles.middle}>
                                <Text style={styles.context}>{rec.Location}</Text>

                            </View>
                        </ImageBackground>
                    </CardItem>
                </Card>
            );
        }, this);
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

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <ScrollView>
                        <Card >
                            <CardItem cardBody>
                                <Image style={styles.modalimage} source={RecommendArray[this.state.Objnumber].Photo} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Text style={styles.modaltext}>{RecommendArray[this.state.Objnumber].Location}</Text>
                                        <Text note style={{ fontFamily: 'Montserrat-Regular' }}>  {RecommendArray[this.state.Objnumber].Photographer}</Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <TouchableHighlight onPress={() => { this.handleGetDirections(RecommendArray[this.state.Objnumber].latitude, RecommendArray[this.state.Objnumber].longitude) }}>
                                        <Icon style={styles.icon} name="ios-navigate" />
                                    </TouchableHighlight>
                                </Right>
                            </CardItem>

                            <CardItem>
                                <Text style={{ textAlign: 'center', fontFamily: 'Montserrat-Regular', }}>{RecommendArray[this.state.Objnumber].Description}</Text>
                            </CardItem>

                        </Card>
                    </ScrollView>
                    <Button style={styles.modalbutton} full info onPress={() => {
                        this.setModalVisible(false, 0);
                    }}>
                        <Icon name="arrow-back" />
                        <Text style={{ fontFamily: 'Montserrat-Regular' }} >Recommendations</Text>
                    </Button>

                </Modal>

                <ScrollView style={{ flexGrow: 1 }}>

                    <Content style={{ flex: 1 }}>

                        {this.render_Recommendation()}


                    </Content>
                    {/* </Container> */}
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
        flex: 1,
        opacity: 0.9,

    },
    modalimage: {
        height: 450,
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    modaltext: {
        paddingTop: 20,
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
    },
    direction: {
        fontSize: 20,
        color: "#ff8396",
        paddingTop: 20,
        fontFamily: 'Montserrat-Regular',
    },
    modalbutton: {
        backgroundColor: '#ff8396',
        marginBottom: 40
    },
    card: {
        borderRadius: 30
    },
    icon: {
        color: '#ff8396',
        fontSize: 35,
        marginRight: 25
    },

});

