import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  WebView,
  ScrollView
} from 'react-native';

const window = Dimensions.get('window');

export class Profile extends Component<{}> {

  static navigationOptions = {
    title: 'Receipt', 
  }

  render() {
    return (
      <View style={{backgroundColor:'#633ea5',height:window.height}}>
        <Text>Profile</Text>
        
      </View>
    );
  }
}

