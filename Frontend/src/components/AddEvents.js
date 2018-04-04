import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button } from 'native-base';
export default class Events extends Component {
  render() {
    return (

      <Container style={{ backgroundColor: '#fff', paddingTop: 70 }}>
        <Content>
          <List>
            <ListItem icon>
              <Left>
                <Icon name="sunny" style={{ color: '#ff8396' }} />
              </Left>
              <Body>
                <Text style={{ alignSelf: 'center', fontSize: 20}}>Choose A Date</Text>
                <Text note style={{ alignSelf: 'center' }}>10th May, Thursday</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>

        <Content>
          <List>
            <ListItem icon>
              <Left>
                <Icon name="ios-time" style={{ color: '#ff8396' }}/>
              </Left>
              <Body>
                <Text style={{ alignSelf: 'center',  fontSize: 20 }}>Choose A Time</Text>
                <Text note style={{ alignSelf: 'center' }}>10th May, Thursday</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>

        <Content>
          <List>
            <ListItem icon>
              <Left>
                <Icon name="ios-navigate" style={{ color: '#ff8396'}} />
              </Left>
              <Body>
                <Text style={{ alignSelf: 'center',  fontSize: 20 }}>Pick A Location</Text>
                <Text note style={{ alignSelf: 'center' }}>Deep Water Bay</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>

        <Content>
          <List>
            <ListItem icon>
              <Left>
                <Icon name="ios-paper" style={{ color: '#ff8396' }} />
              </Left>
              <Body>
                <Text style={{ alignSelf: 'center',fontSize: 20}}>Add Desciption</Text>
                <Text note style={{ alignSelf: 'center' }}>10th May, Thursday</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>

        <Button full info style={{ backgroundColor: "#ff8396" }}>
          <Text>Submit</Text>
        </Button>




      </Container>



    );
  }
}
