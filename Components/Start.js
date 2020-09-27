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
            <View style={styles.button}>
            <Button color='#E35F21' title='Go Gig' onPress={() => {navigation.navigate('Create Profile')}}/>
            </View>
            <View style={{width: '60%', height: '30%',}}>
                <Button color='#E35F21' title='Get Gig' onPress={() => {navigation.navigate('Get Gig Profile')}}/>
                <View style={{alignItems: 'center', marginTop: '15%'}}>
                    <Text style={{color: 'white'}} onPress={() => navigation.navigate('Login')}>Already have an Account? Click here</Text>
                </View>
            </View>

            
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
        margin: '10%',
        marginBottom: '0%',
        width: '60%',
        height: '30%',

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
