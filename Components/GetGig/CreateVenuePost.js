import React, { Component } from 'react';

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


  import Login from '../Login'
  
  
  import {NavigationContainer, TabActions} from '@react-navigation/native';
  import {createStackNavigator} from '@react-navigation/stack';
  import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
  
  import { color, Value } from 'react-native-reanimated';
  


class CreateVenuePost extends Component{
    render(){
        const {navigation} = this.props;
        
    return (
        <View style={styles.container}>

            <ScrollView style={{width: '100%',}} contentContainerStyle={{alignItems: 'center'}}>
            <Text style={styles.title}>Let's get a Musician!</Text>
            <Text style={styles.subtitle}>Time Frame:</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='11:30 - 12:30'/>
            <Text style={styles.subtitle}>Genre:</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Madison Square Garden'/>
            <Text style={styles.subtitle}>Preferred Maturity:</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Freshman'/>
            <Text style={styles.subtitle}>Rate:</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='$10 per hour'/>
            <Text style={styles.subtitle}>Message:</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Lets go Gig!'/>
            
            
            <View style={styles.buttonStyle}> 
            <Button style={styles.buttonStyle} color='#E35F21' title='GET GIG ' onPress={() => {navigation.navigate('Musicians')}}/>
            </View>
            </ScrollView>
       
        
          
        </View>

        
    )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingTop: '10%',
        flex: 1,
        alignItems: 'center',
        

    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    subtitle: {
        marginTop: '10%',
        color: '#E35F21',
        fontSize: 18,
    },
    textInput: {
        padding: 1,
        paddingLeft: 10,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#E35F21',
        color: 'white',
        width: '50%',
    },
    buttonStyle: {
        backgroundColor: 'white',
        marginTop: '35%',
        width: '50%',
    },
    text: {
        color: 'white',
        width: '50%',
        
        
        
    },
    image: {
        width: '80%',
    },

})




export default CreateVenuePost
