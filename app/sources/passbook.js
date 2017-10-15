import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView
} from 'react-native';

const window = Dimensions.get('window');

export class Passbook extends Component<{}> {

  static navigationOptions = {
    title: 'Passbook',
    
  }

  render() {
    return (
      <View  style={{backgroundColor:'#633ea5',height:window.height}}>
        <View style={{alignItems:'center'}}>
            <Text style={{color:'white',paddingTop:16,fontSize:20}}>PASSBOOK</Text>
          </View>

        <ScrollView style={{paddingTop:16}}>
          <TouchableOpacity style={{margin:10,backgroundColor:'#4c2e82',borderRadius:4}} onPress={() => this.props.navigation.navigate('Receipt')}>
            <Text style={{color:'white',fontSize:18,paddingLeft:20,paddingTop:10,paddingBottom:0}}>Big Bazaar</Text>
            <Text style={{position:'absolute',color:'#17e209',fontSize:18,paddingLeft:240,paddingTop:10,paddingBottom:10,fontWeight:'bold'}}>CREDIT</Text>
            <Text style={{color:'white',fontSize:12,paddingLeft:20,paddingTop:10,paddingBottom:10}}>10:57 AM , 15 AUGUST, 2017</Text>
            <Text style={{position:'absolute',color:'white',fontSize:14,paddingLeft:240,paddingTop:40}}>Rs. 597.65</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin:10,backgroundColor:'#4c2e82',borderRadius:4}} onPress={() => this.props.navigation.navigate('Receipt')}>
            <Text style={{color:'white',fontSize:18,paddingLeft:20,paddingTop:10,paddingBottom:0}}>Big Bazaar</Text>
            <Text style={{position:'absolute',color:'#fc004f',fontSize:18,paddingLeft:240,paddingTop:10,paddingBottom:10,fontWeight:'bold'}}>DEBIT</Text>
            <Text style={{color:'white',fontSize:12,paddingLeft:20,paddingTop:10,paddingBottom:10}}>10:57 AM , 15 AUGUST, 2017</Text>
            <Text style={{position:'absolute',color:'white',fontSize:14,paddingLeft:240,paddingTop:40}}>Rs. 597.65</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin:10,backgroundColor:'#4c2e82',borderRadius:4}} onPress={() => this.props.navigation.navigate('Receipt')}>
            <Text style={{color:'white',fontSize:18,paddingLeft:20,paddingTop:10,paddingBottom:0}}>Big Bazaar</Text>
            <Text style={{position:'absolute',color:'#17e209',fontSize:18,paddingLeft:240,paddingTop:10,paddingBottom:10,fontWeight:'bold'}}>CREDIT</Text>
            <Text style={{color:'white',fontSize:12,paddingLeft:20,paddingTop:10,paddingBottom:10}}>10:57 AM , 15 AUGUST, 2017</Text>
            <Text style={{position:'absolute',color:'white',fontSize:14,paddingLeft:240,paddingTop:40}}>Rs. 597.65</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin:10,backgroundColor:'#4c2e82',borderRadius:4}} onPress={() => this.props.navigation.navigate('Receipt')}>
            <Text style={{color:'white',fontSize:18,paddingLeft:20,paddingTop:10,paddingBottom:0}}>Big Bazaar</Text>
            <Text style={{position:'absolute',color:'#17e209',fontSize:18,paddingLeft:240,paddingTop:10,paddingBottom:10,fontWeight:'bold'}}>CREDIT</Text>
            <Text style={{color:'white',fontSize:12,paddingLeft:20,paddingTop:10,paddingBottom:10}}>10:57 AM , 15 AUGUST, 2017</Text>
            <Text style={{position:'absolute',color:'white',fontSize:14,paddingLeft:240,paddingTop:40}}>Rs. 597.65</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin:10,backgroundColor:'#4c2e82',borderRadius:4}} onPress={() => this.props.navigation.navigate('Receipt')}>
            <Text style={{color:'white',fontSize:18,paddingLeft:20,paddingTop:10,paddingBottom:0}}>Big Bazaar</Text>
            <Text style={{position:'absolute',color:'#17e209',fontSize:18,paddingLeft:240,paddingTop:10,paddingBottom:10,fontWeight:'bold'}}>CREDIT</Text>
            <Text style={{color:'white',fontSize:12,paddingLeft:20,paddingTop:10,paddingBottom:10}}>10:57 AM , 15 AUGUST, 2017</Text>
            <Text style={{position:'absolute',color:'white',fontSize:14,paddingLeft:240,paddingTop:40}}>Rs. 597.65</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin:10,backgroundColor:'#4c2e82',borderRadius:4}} onPress={() => this.props.navigation.navigate('Receipt')}>
            <Text style={{color:'white',fontSize:18,paddingLeft:20,paddingTop:10,paddingBottom:0}}>Big Bazaar</Text>
            <Text style={{position:'absolute',color:'#17e209',fontSize:18,paddingLeft:240,paddingTop:10,paddingBottom:10,fontWeight:'bold'}}>CREDIT</Text>
            <Text style={{color:'white',fontSize:12,paddingLeft:20,paddingTop:10,paddingBottom:10}}>10:57 AM , 15 AUGUST, 2017</Text>
            <Text style={{position:'absolute',color:'white',fontSize:14,paddingLeft:240,paddingTop:40}}>Rs. 597.65</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin:10,backgroundColor:'#4c2e82',borderRadius:4}} onPress={() => this.props.navigation.navigate('Receipt')}>
            <Text style={{color:'white',fontSize:18,paddingLeft:20,paddingTop:10,paddingBottom:0}}>Big Bazaar</Text>
            <Text style={{position:'absolute',color:'#17e209',fontSize:18,paddingLeft:240,paddingTop:10,paddingBottom:10,fontWeight:'bold'}}>CREDIT</Text>
            <Text style={{color:'white',fontSize:12,paddingLeft:20,paddingTop:10,paddingBottom:10}}>10:57 AM , 15 AUGUST, 2017</Text>
            <Text style={{position:'absolute',color:'white',fontSize:14,paddingLeft:240,paddingTop:40}}>Rs. 597.65</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

