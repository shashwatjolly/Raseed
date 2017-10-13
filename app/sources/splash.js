import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';

const window = Dimensions.get('window');

export class Splash extends Component<{}> {

  static navigationOptions = {
    title: 'Splash',
  }

  render() {
    return (
      <View>
        <Text onPress={() => this.props.navigation.navigate('Home')}>Continue</Text>
      </View>
    );
  }
}

