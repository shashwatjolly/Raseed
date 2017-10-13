import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';

const window = Dimensions.get('window');

export class Pay extends Component<{}> {

  static navigationOptions = {
    title: 'Pay',
    
  }

  render() {
    return (
      <View>
        <Text>Pay</Text>
      </View>
    );
  }
}

