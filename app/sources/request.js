import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';

const window = Dimensions.get('window');

export class Request extends Component<{}> {

  static navigationOptions = {
    title: 'Request',
    
  }

  render() {
    return (
      <View>
        <Text>Request</Text>
      </View>
    );
  }
}

