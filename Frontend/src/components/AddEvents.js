import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, View} from 'native-base';


export default class CardListExample extends Component {
  render() {
    return (

      <Container>
        <Content>
          <Header style={{ backgroundColor: "#fff" }}>
            <Text style={{ justifyContent: "center", color: "#E75480" }}>Create Your Event</Text>
          </Header>
          <Card>
            <CardItem>
              <Icon active name="ios-sunny" style={{ color: "#E75480" }} />
              <Text>Choose A Date</Text>
              <Right>
                <Button transparent onPress={()=> alert('DatePicker API')}> 
                  <Icon name="arrow-forward" style={{ color: "#E75480" }}/> 
                  </Button>
              </Right>
            </CardItem>

            <CardItem>
              <Icon active name="ios-time" style={{ color: "#E75480" }} />
              <Text>Choose A Time</Text>
              <Right>
              <Button transparent onPress={()=> alert('TimePicker API')}> 
                  <Icon name="arrow-forward" style={{color: "#E75480"}} /> 
                  </Button>
              </Right>
            </CardItem>

            <CardItem>
              <Icon active name="ios-map" style={{ color: "#E75480" }} />
              <Text>Pick A Location</Text>
              <Right>
              <Button transparent onPress={()=> alert('Map API')}> 
                  <Icon name="arrow-forward" style={{color: "#E75480"}} /> 
                  </Button>
              </Right>
            </CardItem>

            <CardItem>
              <Icon active name="ios-paper" style={{ color: "#E75480",}} />
              <Text>Add Description</Text>
              <Right>
              <Button transparent> 
                  <Icon name="arrow-forward" style={{color: "#E75480"}} /> 
                  </Button>
              </Right>
            </CardItem>

         
              <Button full info style={{ backgroundColor: "#E75480",}} onPress={() =>alert('Event Is Created!')}>
                <Text>Submit</Text>
              </Button>
           
      

          </Card>
        </Content>
      </Container>
    );
  }
}