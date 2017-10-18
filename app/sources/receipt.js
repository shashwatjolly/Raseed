import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';

import {GetTokenDetails} from '../actions/api';

const window = Dimensions.get('window');

export class Receipt extends Component<{}> {

  constructor(props){
    super(props);

  }


  _getTokenDetails(){
    let temp = GetTokenDetails()
  }

static navigationOptions = {
    title: 'Receipt',
    
  }

  render() {
    return (
      <View style={{backgroundColor:'#21232F',height:window.height}}>
        <View style={{alignItems:'center',paddingTop:10}}>
          <Text style={{fontSize:24,color:'white',fontFamily: 'Montserrat-Regular'}}>RECEIPT</Text>
        </View>

        <View style={{paddingTop:10,backgroundColor:'#1EB774',margin:20,borderRadius:4,alignItems:'center',marginTop:60}}>

            <Text style={{color:'white',fontSize:16,paddingTop:0,fontFamily: 'Montserrat-Regular'}}>TRANSACTION SUCCESSFULL</Text>

            <Text style={{color:'#333',paddingTop:5,fontSize:18,fontFamily: 'Montserrat-Regular'}}>Big Bazaar</Text>

            <Text style={{color:'#333',paddingTop:5,fontSize:14,fontFamily: 'Montserrat-Regular'}}>10:05 AM , 10 AUGUST, 2017</Text>

            <Text style={{color:'#333',paddingTop:25,fontSize:18,paddingBottom:20,fontFamily: 'Montserrat-Regular'}}>Paid Using Debit Card</Text>

            <View style={{flex:1,backgroundColor:'#E94C3D',paddingTop:10,paddingBottom:50,width:window.width-40,alignItems:'center',borderRadius:4}}>
                <Text style={{color:'white',paddingTop:0,fontSize:28,fontFamily: 'Montserrat-Regular'}}>Rs. 123</Text>
            </View>
          
        </View>

        <View style={{paddingTop:10,alignItems:'center'}}>
          <Text style={{fontFamily: 'Montserrat-Regular',fontSize:14,color:'white'}}>In Collaboration with Zeta Inc</Text>
        </View>

      </View>
    );
  }
}

