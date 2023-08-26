import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput,Button, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowPicker(false);
        setDate(currentDate);
    };
    const navigation = useNavigation()
    const onRegister = () =>{
        navigation.navigate('Home')
    }
    return (
        <View style={styles.registerbg}>
            <Text style={styles.title}>Register</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flexDirection:'row',paddingBottom:1,marginBottom:15}}>
                <Icon name='person' size={30} style={{paddingTop:23,color:'#99ffff'}}/>
                <TextInput placeholder='Enter Your UserName' placeholderTextColor="#000"  secureTextEntry={false} style={styles.input} />
            </View>
            <View style={{flexDirection:'row',paddingBottom:1,marginBottom:15}}>
                <Icon name='email' size={30} style={{paddingTop:23,color:'#99ffff'}}/>
                <TextInput placeholder='Enter Your Email' placeholderTextColor="#000"  secureTextEntry={false} style={styles.input} />
            </View>
            <View style={{flexDirection:'row',paddingBottom:1,marginBottom:15}}>
                <Icon name='phone' size={30} style={{paddingTop:23,color:'#99ffff'}}/>
                <TextInput placeholder='Enter Your Phone' placeholderTextColor='#000' secureTextEntry={false} style={styles.input} />
            </View>
            <View style={{flexDirection:'row',paddingBottom:1,marginBottom:15}}>
                <Icon name='lock' size={30} style={{paddingTop:23,color:'#99ffff'}}/>
                <TextInput placeholder='Enter Your Password' placeholderTextColor="#000"  secureTextEntry={false} style={styles.input} />
            </View>
            <View style={{flexDirection:'row',paddingBottom:1,marginBottom:40}}>
                <Icon name='event' size={30} style={{paddingTop:23,color:'#99ffff'}}/>
                <TextInput value={date.toLocaleString()}  style={styles.dateinput}/>
                <Icon name='event' size={30} onPress={() => setShowPicker(true)} style={styles.datebtn}/>
                {showPicker && (
                    <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                    placeholder="Enter your DOB"
                    />
                )}
            </View>
            <View style={{flexDirection:'row',paddingBottom:1,marginBottom:15}}>
                <Icon name='boy' size={30} style={{paddingTop:23,color:'#99ffff'}}/>
                <TextInput placeholder='Enter Your gender' placeholderTextColor='#000' secureTextEntry={false} style={styles.input} />
            </View>
            <View>
                
            </View>
            <TouchableOpacity style={styles.button} onPress={onRegister}>
                <Text style={{color:'#FFF',fontSize:20}}>Register</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    registerbg:{
        display:'flex',
        justifyContent:'center',
        padding:30,
        backgroundColor:'#154c79',
        height:'100%'
    },
    title:{
        color:'#ff3333',
        fontSize:35,
        fontFamily:'Roboto-Medium',
        fontWeight:'900',
        marginBottom:10,
        textAlign:'center'
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
    dateinput:{
        position:'absolute',
        width: 250,
        height: 50,
        marginTop:12,
        marginBottom:12,
        marginLeft:45,
        borderWidth: 2,
        padding: 10,
        borderColor: '#154c79',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 15,
        backgroundColor:'#99ffff'
    },
    datebtn:{
        position:'relative',
        paddingTop:23,
        color:'#000',
        left:220
    },
    placeholderText: {
        fontSize: 1,
        color: "gray",
    },
    datePickerStyle:{
        width: 240,
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderColor: '#154c79',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 15,
        backgroundColor:'#99ffff',
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
        marginBottom:30
      }
})

export default Register;
