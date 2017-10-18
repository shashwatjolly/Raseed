import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
  AsyncStorage
} from 'react-native';

import {SubModalStack} from '../config/routes';

import {NewTransaction,ConfirmTransaction,AuthLogin,AllTransactions} from '../actions/api';

const window = Dimensions.get('window');

export class SwitchHome extends Component<{}> {

  constructor(props){
    super(props);

    this.state={
      userMobile : '',
      rewards : 0,
      refreshRewardsIntervalID : '',
      allTrans : [],
      transUpdateDone : false,
      parAmount : '',
      parMerchantName : '',
      parDateAndTime : '',
      parTypeOfTrans : '',
    }

    this.setUserMobile = this.setUserMobile.bind(this);
    this._updateRewards = this._updateRewards.bind(this);
    this._updateLastTransaction = this._updateLastTransaction.bind(this);
  }

   componentWillMount(){
    this.getUserMobile();
  }

  async getUserMobile(){
    const value = await AsyncStorage.getItem('userMobile').then(userMobile => this.setUserMobile(userMobile)).catch();
  }

  setUserMobile(userMobile){
    this.setState({
      userMobile : userMobile,
    });

    this._callTransactionsAPI();

    let temp = AuthLogin(this.state.userMobile).then(responseObj => this._updateRewards(responseObj)).catch();

    this.state.refreshRewardsIntervalID =  setInterval(() => {this._callUpdateRewards()},1000);

    this._callTransactionsAPI();

  }

  _callUpdateRewards(){
     let temp = AuthLogin(this.state.userMobile).then(responseObj => this._updateRewards(responseObj)).catch();
  }

  _updateRewards(responseObj){
    this.setState({
      rewards : parseInt(responseObj.rewards),
    });
  }

  _callTransactionsAPI(){
    let temp = AllTransactions(this.state.userMobile).then(responseObj => this._updateLastTransaction(responseObj)).catch();
  }

  _updateLastTransaction(responseObj){
    let tempResponseObj = responseObj.transObj.length;
      let typeOfTrans = '';

      let dateAndTime = String(new Date(responseObj.transObj[tempResponseObj-1].creationTimeStamp));
      dateAndTime = dateAndTime.substring(0,dateAndTime.length-18);

      if(!responseObj.transObj[tempResponseObj-1].merchantName){
        parMerchantName = 'Example Inc';
      }else{
        parMerchantName = responseObj.transObj[tempResponseObj-1].merchantName;
      }


      if(responseObj.transObj[i].merchantMobile==this.state.userMobile){
        typeOfTrans = 'CREDIT (+)';
      }else{
        typeOfTrans = 'DEBIT (-)';
      }

      this.setState({
        parAmount : responseObj.transObj[tempResponseObj-1].amount,
        parDateAndTime : dateAndTime,
        parMerchantName : parMerchantName,
        parTypeOfTrans : typeOfTrans,
      });

      this.setState({
        transUpdateDone : true,
      });

  }


  componentDiDMount(){

  }


  fetchPendingPayment(){

  }

  static navigationOptions = {
    title: 'SwitchHome',

  }

  render() {
    return (
      <View style={{backgroundColor:'#21232F',height:window.height,alignItems:'center'}}>

          <View style={{alignItems:'center'}}>
            <Text style={{color:'white',paddingTop:16,fontSize:20,fontFamily: 'Montserrat-Regular'}}>+91- {this.state.userMobile}</Text>
          </View>

        <View style={{top:10,alignItems:'center',flexDirection:'row',backgroundColor:'#21232F',borderRadius:4}}>
            <TouchableOpacity style={{padding:20}} onPress={() => this.props.navigation.navigate('Pay')}>
              <Image source={require('../../assets/images/22500722_1608921872492156_281082674_n.png')} onPress={() => this.props.navigation.navigate('Pay')} style={{height:50,width:50}}/>
              <Text style={{color:'white',paddingLeft:6,fontFamily: 'Montserrat-Regular'}} >Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:20}} onPress={() => this.props.navigation.navigate('Request')}>
              <Image source={require('../../assets/images/22538029_1608921882492155_295088226_n.png')} onPress={() => this.props.navigation.navigate('Pay')}  style={{height:50,width:50,paddingBottom:20}}/>
              <Text style={{color:'white',paddingLeft:-10,fontFamily: 'Montserrat-Regular'}}>Request</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingLeft:20,paddingRight:10}} onPress={() => this.props.navigation.navigate('Passbook')}>
              <Image source={require('../../assets/images/22538178_1608921862492157_63247476_n.png')} onPress={() => this.props.navigation.navigate('Pay')} style={{height:50,width:50,paddingBottom:20}}/>
              <Text style={{color:'white',paddingLeft:0,fontFamily: 'Montserrat-Regular'}}>Passbook</Text>
            </TouchableOpacity>
        </View>

        <View style={{top:window.height-360,alignItems:'center'}}>
        
          <Text style={{color:'white',fontSize:16,fontFamily: 'Montserrat-Regular'}}>No Recent Transactions</Text>
     
        </View>

        <View style={{top:window.height-340}}>
        <Text style={{paddingLeft:10,fontSize:16,paddingBottom:5,color:'white',fontFamily: 'Montserrat-Regular'}}>Total Rewards - Rs. {this.state.rewards}</Text>
        <View style={{backgroundColor:'#17e209',padding:6,width:window.width-60,borderRadius:40}}>
              <Text style={{color:'#333',fontFamily: 'Montserrat-Regular',paddingLeft:10}}>CASHCARD PLUS</Text>
        </View>
        </View>
      </View>
    );
  }
}

