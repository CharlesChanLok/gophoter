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

// let images = [
//   require('../../../assets/Images/image1.jpg'),
//   require('../../../assets/Images/image2.jpg'),
//   require('../../../assets/Images/image3.jpg'),
//   require('../../../assets/Images/image4.jpg'),
//   require('../../../assets/Images/image5.jpg'),
//   require('../../../assets/Images/image6.jpg'),
//   require('../../../assets/Images/image7.jpg'),
//   require('../../../assets/Images/image8.jpg'),
//   require('../../../assets/Images/image9.jpg'),
//   require('../../../assets/Images/image1.jpg'),
//   require('../../../assets/Images/image2.jpg'),
//   require('../../../assets/Images/image3.jpg'),
//   require('../../../assets/Images/image4.jpg'),
//   require('../../../assets/Images/image5.jpg'),
//   require('../../../assets/Images/image6.jpg'),
//   require('../../../assets/Images/image7.jpg'),
//   require('../../../assets/Images/image8.jpg'),
//   require('../../../assets/Images/image9.jpg'),
//   require('../../../assets/Images/image1.jpg'),
//   require('../../../assets/Images/image2.jpg'),
//   require('../../../assets/Images/image3.jpg'),
//   require('../../../assets/Images/image4.jpg'),
//   require('../../../assets/Images/image5.jpg'),
//   require('../../../assets/Images/image6.jpg'),
//   require('../../../assets/Images/image7.jpg'),
//   require('../../../assets/Images/image8.jpg'),
//   require('../../../assets/Images/image9.jpg'),
//   require('../../../assets/Images/image1.jpg'),
//   require('../../../assets/Images/image2.jpg'),
//   require('../../../assets/Images/image3.jpg'),
//   require('../../../assets/Images/image4.jpg'),
//   require('../../../assets/Images/image5.jpg'),
//   require('../../../assets/Images/image6.jpg'),
//   require('../../../assets/Images/image7.jpg'),
//   require('../../../assets/Images/image8.jpg'),
//   require('../../../assets/Images/image9.jpg'),

// ]

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

    this.props.userImages.map((image, index) => {
      console.log(image);
      return (

        <TouchableHighlight onPress={() => this.setModalVisible(true, index)}>

          <View style={[{ width: (width) / 3 }, { height: (width) / 3 },
          index % 3 !== 0 ? { paddingLeft: 2 } : { paddingTop: 2 }
          ]} >

            <Image style={{ flex: 1, width: undefined, height: undefined }}
              source={{ uri: image.img_url }} />

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
          <AutoHeightImage width={width}
            source={this.props.userImages.length > 0 ?
              { uri: this.props.userImages[this.state.Objnumber].img_url } :
              { uri: '' }
            }
          />
          <Left>
            <Text style={styles.modaltext2}>
              Photo Taken By
          </Text>
            <Text note style={styles.textnote2}>
              {this.props.userInfo.first_name} {this.props.userInfo.last_name}
            </Text>
            <Thumbnail style={styles.thumbnail} source={{ uri: this.props.userInfo.profile_image }} />
          </Left>
          <Button style={styles.modalbutton} full info onPress={() => {
            this.setModalVisible(false, 0);
          }}>
            <Icon name="arrow-back" />
            <Text>Profile</Text>
          </Button>
          <Text style={styles.logo}>Go Photer</Text>



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
    paddingTop: 20,
    fontFamily: 'Montserrat-Regular'
  },
  textnote2: {
    alignSelf: 'center'

  },
  modalbutton: {
    backgroundColor: '#ff8396',
    fontFamily: 'Montserrat-SemiBold'
  },
  thumbnail: {

    marginLeft: 30,
    marginTop: 10
  }
});
