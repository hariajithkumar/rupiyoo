import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Image, Text, View, StyleSheet, TextInput, TouchableOpacity, Alert,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Login = () => {
  const navigation = useNavigation()
  const onLogin = () =>{
    navigation.navigate('Home') 
  }
  const onNewRegister = () =>{
    navigation.navigate('Register')
  }
  const onForgotpass = () =>{
    Alert.alert("Forgot Password")
  }
  return (
    <View style={styles.loginbg}>
        <Text style={styles.login_head}>RUPIYOO</Text>
        <View style={{flexDirection:'row',paddingBottom:1,marginBottom:15}}>
          <Icon name='person' size={30} style={{paddingTop:20,color:'#99ffff'}}/>
          <TextInput  placeholder='Enter Your UserName' placeholderTextColor="#000"  secureTextEntry={false} style={styles.input}/>
        </View>
        <View style={{flexDirection:'row',paddingBottom:1,marginBottom:1}}>
          <Icon name='lock' size={30} style={{paddingTop:20,color:'#99ffff'}}/>
          <TextInput  placeholder='Enter Your Password' placeholderTextColor="#000"  secureTextEntry={true} style={styles.input}/>
        </View>
        <View style={{paddingBottom:8,marginBottom:15}}>
          <Text style={{color:'#FFF',textAlign:'right',marginRight:10,fontSize:15}} onPress={onForgotpass}>Forgot password</Text>  
        </View>
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={{color:'#FFF',fontSize:20}}>Login</Text>
        </TouchableOpacity>
        <View style={{alignItems:'center',marginTop:20}}>
          <Text style={{color:'#FFF',fontSize:15}}>(or)</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:20}}>
          <Text style={{color:'red',fontSize:15}}>Don't have an account?</Text>
          <Text style={{color: '#FFF',fontSize:20}} onPress={onNewRegister}> Signup</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginbg:{
    display:'flex',
    justifyContent:'center',
    padding:30,
    backgroundColor:'#154c79',
    height:'100%'
  },  
  login_head:{
    color:'#ff3333',
    fontSize:35,
    fontFamily:'Roboto-Medium',
    fontWeight:'900',
    marginBottom:10,
    textAlign:'center'
  },
  Icon:{
    backgroundColor:'red'
  },
  input:{
    width: 250,
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderColor: '#154c79',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 15,
    backgroundColor:'#99ffff'
  },
  button:{
    width:"80%",
    alignSelf:"center",
    height:60,
    backgroundColor:'red',
    color:'#FFF',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
  },
})
export default Login;