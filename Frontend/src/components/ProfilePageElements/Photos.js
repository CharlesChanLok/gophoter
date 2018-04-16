import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  Modal,
  TouchableHighlight
} from 'react-native';
import { Content, Card, CardItem, Text, Icon, Button, Thumbnail, Body, Left } from 'native-base';
import AutoHeightImage from 'react-native-auto-height-image'

let images = [
  require('../../../assets/Images/image1.jpg'),
  require('../../../assets/Images/image2.jpg'),
  require('../../../assets/Images/image3.jpg'),
  require('../../../assets/Images/image4.jpg'),
  require('../../../assets/Images/image5.jpg'),
  require('../../../assets/Images/image6.jpg'),
  require('../../../assets/Images/image7.jpg'),
  require('../../../assets/Images/image8.jpg'),
  require('../../../assets/Images/image9.jpg'),
  require('../../../assets/Images/image1.jpg'),
  require('../../../assets/Images/image2.jpg'),
  require('../../../assets/Images/image3.jpg'),
  require('../../../assets/Images/image4.jpg'),
  require('../../../assets/Images/image5.jpg'),
  require('../../../assets/Images/image6.jpg'),
  require('../../../assets/Images/image7.jpg'),
  require('../../../assets/Images/image8.jpg'),
  require('../../../assets/Images/image9.jpg'),
  require('../../../assets/Images/image1.jpg'),
  require('../../../assets/Images/image2.jpg'),
  require('../../../assets/Images/image3.jpg'),
  require('../../../assets/Images/image4.jpg'),
  require('../../../assets/Images/image5.jpg'),
  require('../../../assets/Images/image6.jpg'),
  require('../../../assets/Images/image7.jpg'),
  require('../../../assets/Images/image8.jpg'),
  require('../../../assets/Images/image9.jpg'),
  require('../../../assets/Images/image1.jpg'),
  require('../../../assets/Images/image2.jpg'),
  require('../../../assets/Images/image3.jpg'),
  require('../../../assets/Images/image4.jpg'),
  require('../../../assets/Images/image5.jpg'),
  require('../../../assets/Images/image6.jpg'),
  require('../../../assets/Images/image7.jpg'),
  require('../../../assets/Images/image8.jpg'),
  require('../../../assets/Images/image9.jpg'),

]

let { width, height } = Dimensions.get('window');


class Photos extends Component {

  state = {
    modalVisible: false,
    Objnumber: 0
  };

  setModalVisible(visible, i) {
    this.setState({ modalVisible: visible });
    this.state.Objnumber = i
  }

  imageRender = () =>

    images.map((image, index) => {

      return (

        <TouchableHighlight onPress={() => this.setModalVisible(true, index)}>

          <View style={[{ width: (width) / 3 }, { height: (width) / 3 },
          index % 3 !== 0 ? { paddingLeft: 2 } : { paddingTop: 2 }
          ]} >

            <Image style={{ flex: 1, width: undefined, height: undefined }}
              source={image} />

          </View>
        </TouchableHighlight>


      )
    }
    )
  render() {
    return (

      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <AutoHeightImage width={width} source={images[this.state.Objnumber]} />
          <Left>
            <Text style={styles.modaltext2}>
              Photo Taken By
          </Text>
            <Text note style={styles.textnote2}>Hugo Cheng</Text>
            <Thumbnail style={styles.thumbnail} source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/944372c1764fed4a4af10f77f485e5b0/5B5239F8/t51.2885-19/s150x150/29090546_2048000892105923_8489793387929534464_n.jpg' }} />
          </Left>
          <Button style={styles.modalbutton} full info onPress={() => {
            this.setModalVisible(false, 0);
          }}>
            <Icon name="arrow-back" />
            <Text>Profile</Text>
          </Button>



        </Modal>

        <ScrollView style={{ flexGrow: 1 }}>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
            {this.imageRender()}
          </View>

        </ScrollView>
      </View>



    );
  }
}

export default Photos;


const styles = StyleSheet.create({
  topcontainer: {
    flex: 1,
    backgroundColor: 'grey'
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
    height: 450,
    flex: 1,
  },
  modaltext2: {
    alignSelf: 'center',
    paddingTop: 20
  },
  textnote2: {
    alignSelf: 'center'
  },
  modalbutton: {
    backgroundColor: '#ff8396',
  },
  thumbnail: {

    marginLeft: 30,
    marginTop: 10
  }
});
