import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';

const window = Dimensions.get('window');

export class Profile extends Component<{}> {

  static navigationOptions = {
    title: 'Profile',
    tabBarLabel: 'Profile',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Text>Profile</Text>
    ),
  }

  render() {
    return (
      <View style={{backgroundColor:'#633ea5',height:window.height}}>
        <Text>Profile</Text>
      </View>
    );
  }
}

