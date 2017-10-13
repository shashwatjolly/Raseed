import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';

const window = Dimensions.get('window');

export class Passbook extends Component<{}> {

  static navigationOptions = {
    title: 'Passbook',
    
  }

  render() {
    return (
      <View>
        <Text>Passbook</Text>
      </View>
    );
  }
}

