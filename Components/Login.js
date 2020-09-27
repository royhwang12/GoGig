import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    TextInput,
  } from 'react-native';

  import {NavigationContainer} from '@react-navigation/native';
  import {createStackNavigator} from '@react-navigation/stack';
  
  


class Login extends Component{


    render(){
        const {navigation} = this.props;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../Assets/GoGigLogo.jpg')}/>
            <TextInput style={styles.text} underlineColorAndroid='white' placeholderTextColor='white' placeholder='Username'/>
            <TextInput style={styles.text} underlineColorAndroid='white' placeholderTextColor='white' placeholder='Password'/>
            <Button color='#E35F21' title='Login' onPress={() => {navigation.navigate('Musicians')}}/>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingTop: '35%',
        flex: 1,
        alignItems: 'center',

    },
    button: {
        backgroundColor: 'white',
    },
    text: {
        color: 'white',
        width: '50%',
        
        
        
    },
    image: {
        width: '80%',
    },



})

export default Login
