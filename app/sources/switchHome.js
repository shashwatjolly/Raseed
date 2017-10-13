import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';

import {SubModalStack} from '../config/routes';

const window = Dimensions.get('window');

export class SwitchHome extends Component<{}> {

  static navigationOptions = {
    title: 'SwitchHome',

  }

  render() {
    return (
      <View style={{backgroundColor:'#633ea5'}}>
        <Text>Hi</Text>
        <Text style={{color:'white'}} onPress={() => this.props.navigation.navigate('Pay')}>Pay</Text>
        <Text style={{color:'white'}} onPress={() => this.props.navigation.navigate('Request')}>Request</Text>
        <Text style={{color:'white'}} onPress={() => this.props.navigation.navigate('Passbook')}>Passbook</Text>
      </View>
    );
  }
}

