import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';

import {RequestTransaction,TransactionStatus} from '../actions/api.js';

const window = Dimensions.get('window');

export class Request extends Component<{}> {
 constructor(props){
    super(props);
    this.state={
          mobile : '',
          amount : '',
          requested : false,
          token : '',
          paymentDone : false,
    }
    this.requestPaymentInitiate = this.requestPaymentInitiate.bind(this);
    this.paymentDoneUpdate = this.paymentDoneUpdate.bind(this);
    this.refreshIntervalId = '';
  }

  requestPaymentInitiateApiCall(){
    console.log(this.state.mobile);
    let temp = RequestTransaction(this.state.mobile,this.state.amount).then(responseObj => this.requestPaymentInitiate(responseObj)).catch();
  }

  requestPaymentInitiate(responseObj){

    this.setState({
      requested : true,
      token : responseObj.token,
    });

    if(!this.state.paymentDone){
      this.refreshIntervalId =  setInterval(() => {this.paymentStatusApiCall()},100);
    }
  }

  paymentStatusApiCall(){
    let temp = TransactionStatus(this.state.token).then(responseObj => this.paymentDoneUpdate(responseObj)).catch();
  }

  paymentDoneUpdate(responseObj){
    console.log(responseObj.isPaid);
    if(responseObj.isPaid){
      clearInterval(this.refreshIntervalId);
    this.setState({
      paymentDone : true,
    });
   }
  }


  static navigationOptions = {
    title: 'Request',
    
  }

  render() {
    return (
      <View style={{backgroundColor:'#633ea5',height:window.height,alignItems:'center'}}>
        <Text style={{color:'white',paddingTop:10,fontSize:24}}>REQUEST</Text>

      {!this.state.requested &&
        <View style={{alignItems:'center'}}>

          <TextInput
              underlineColorAndroid='transparent'
              placeholderTextColor='white'
              tintColor={'#633ea5'}
              style={{height: 50,fontSize:20 ,borderColor: 'white', borderWidth: 1,width:window.width-100,borderRadius:4,top:160,fontFamily: 'Montserrat-Regular',color:'white',textAlign:'center'}}
              onChangeText={(mobile) => this.setState({mobile})}
              value={this.state.mobile}
              placeholder={'Mobile Number'}
              keyboardType = {'phone-pad'}
              autoFocus={true}
            />

            <TextInput
              underlineColorAndroid='transparent'
              placeholderTextColor='white'
              tintColor={'#633ea5'}
              style={{margin:30,height: 50,fontSize:20 ,borderColor: 'white', borderWidth: 1,width:window.width-100,borderRadius:4,top:160,fontFamily: 'Montserrat-Regular',color:'white',textAlign:'center'}}
              onChangeText={(amount) => this.setState({amount})}
              value={this.state.amount}
              placeholder={'Amount'}
              keyboardType = {'phone-pad'}
              autoFocus={true}
            />
            
            <TouchableOpacity style={{margin:40,padding:10,backgroundColor:'#17e209',alignItems:'center',width:window.width-120,borderRadius:6,top:140}} onPress={() => this.requestPaymentInitiateApiCall()}>

                  <Text style={{fontSize:18}}>REQUEST</Text>

            </TouchableOpacity>

          </View>
      }

      {this.state.requested && !this.state.paymentDone &&

        <View style={{alignItems:'center'}}>
          <Text style={{color:'white',fontSize:18}}>Request Sent</Text>
          <Text style={{color:'white',fontSize:18}}># {this.state.token}</Text>
          <Text style={{color:'white',fontSize:18}}>Waiting for customer</Text>
        </View>

      }

      {this.state.paymentDone &&

        <View style={{alignItems:'center'}}>
          <Text style={{color:'white',fontSize:18}}>Transaction Successfull</Text>
          <Text style={{color:'white',fontSize:18}}># {this.state.token}</Text>
          <Text style={{color:'white',fontSize:18}}>Amount - {this.state.amount}</Text>
        </View>

      }

      </View>
    );
  }
}

