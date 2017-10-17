import React, { Component } from 'react';
import { 
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  WebView,
  ScrollView
} from 'react-native';

import { Icon, Tile, Button, List, ListItem } from 'react-native-elements';

const window = Dimensions.get('window');

export class Profile extends Component<{}> {

  static navigationOptions = {
    title: 'Receipt', 
  }
  
  render() {
    return (

    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{ justifyContent: 'center', backgroundColor: '#21232F', elevation: 10.0}}>
        <Tile
          containerStyle={{width: "100%"}}
          imageContainerStyle={{ width: "100%"}}
          imageSrc={require('../../assets/images/user.png')}
          featured
          title='Shashwat Jolly'
          caption='sjolly'
          activeOpacity={1}
        />
        <List
        containerStyle={{ borderRadius: 4, alignSelf: 'center', justifyContent: 'center', width: '90%' }} >
          <ListItem
            title="Email"
            leftIcon={{name: "email"}}
            titleStyle={{color: '#21232F', fontWeight: 'bold'}}
            rightTitle='shashwat.jolly@gmail.com'
            rightTitleStyle={{marginLeft: -50, color: 'black'}}
            hideChevron
          />
          <ListItem
            title="Phone"
            containerStyle={{borderBottomWidth: 0}}
            leftIcon={{name: "phone"}}
            titleStyle={{color: '#21232F', fontWeight: 'bold'}}
            rightTitle='8486803505'
            rightTitleStyle={{color: 'black'}}
            hideChevron
          />
        </List>

        <List
          containerStyle={{ borderRadius: 4, alignSelf: 'center', justifyContent: 'center', width: '90%' }} >
          <ListItem
            containerStyle={{borderBottomWidth: 0}}
            title="Username"
            leftIcon={{name: "account-box"}}
            titleStyle={{color: '#21232F', fontWeight: 'bold'}}
            rightTitle='sjolly'
            rightTitleStyle={{color: 'black'}}
            hideChevron
          />
        </List>

        <List
          containerStyle={{ borderRadius: 4, alignSelf: 'center', justifyContent: 'center', width: '90%' }} >
          <ListItem
            title="Gender"
            leftIcon={{type: 'font-awesome', name: 'venus-mars'}}
            titleStyle={{color: '#21232F', fontWeight: 'bold'}}
            rightTitle='Male'
            rightTitleStyle={{color: 'black'}}
            hideChevron
          />
          <ListItem
            title="Birthday"
            leftIcon={{type: 'font-awesome', name: "birthday-cake"}}
            titleStyle={{color: '#21232F', fontWeight: 'bold'}}
            rightTitle='13/10/1998'
            rightTitleStyle={{color: 'black'}}
            hideChevron
          />
          <ListItem
            containerStyle={{borderBottomWidth: 0}}
            title="City"
            leftIcon={{type: 'material-community', name: 'city'}}
            titleStyle={{color: '#21232F', fontWeight: 'bold'}}
            rightTitle='Noida'
            rightTitleStyle={{marginLeft: -50, color: 'black'}}
            hideChevron
          />
        </List>
        <List
        containerStyle={{ borderRadius: 4, alignSelf: 'center', justifyContent: 'center', width: '90%' }} >
          <ListItem
            title="Spendings"
            leftIcon={{type: 'material-community', name: "plus-circle-outline"}}
            titleStyle={{color: '#21232F', fontWeight: 'bold'}}
            badge={{ value: '₹2000', textStyle: { color: '#ffffff' }, containerStyle: { marginLeft: -50, backgroundColor: '#21232F' } }}
            hideChevron
          />
          <ListItem
            title="Earnings"
            leftIcon={{type: 'material-community', name: "minus-circle-outline"}}
            titleStyle={{color: '#21232F', fontWeight: 'bold'}}
            badge={{ value: '₹2000', textStyle: { color: '#ffffff' }, containerStyle: { marginLeft: -50, backgroundColor: '#21232F' } }}            
            hideChevron
          />
          <ListItem
            title="Wallet Balance"
            containerStyle={{borderBottomWidth: 0}}
            leftIcon={{type: 'entypo', name: "wallet"}}
            titleStyle={{color: '#21232F', fontWeight: 'bold'}}
            badge={{ value: '₹2000', textStyle: { color: '#ffffff' }, containerStyle: { marginLeft: -50, backgroundColor: '#21232F' } }}
            hideChevron
          />
        </List>

        <Button
          title="Log out"
          icon={{type: 'material-community', name: 'logout'}}
          buttonStyle={{ borderRadius: 10, alignSelf: 'center', width: '50%', backgroundColor: 'red', marginTop: 20 }}
        />
        <Text />
      </ScrollView>
      </View>
    );
  }
}

