import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';

const window = Dimensions.get('window');

export class Offers extends Component<{}> {

  static navigationOptions = {
    title: 'Offers',
    tabBarLabel: 'Offers',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Text>Offers</Text>
    ),
  }

  render() {
    return (
      <View>
        <Text>Offers</Text>
      </View>
    );
  }
}

