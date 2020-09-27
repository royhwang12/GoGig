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
  import MakeGroup from './MakeGroup'
  
  import FindGroup from './FindGroup'
  
  

  import ArtistList from './ArtistList'
  import AddArtist from './AddArtist'
  
  import {NavigationContainer, TabActions} from '@react-navigation/native';
  import {createStackNavigator} from '@react-navigation/stack';
  import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
  
  import { color, Value } from 'react-native-reanimated';
  


class CreateProfile extends Component{
    render(){
        const {navigation} = this.props;
        
    return (
        <View style={styles.container}>

            <ScrollView style={{width: '100%',}} contentContainerStyle={{alignItems: 'center'}}>
            <Text style={styles.title}>Let's get Gigging!</Text>
            <Text style={styles.subtitle}>Name</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Roy Hwang...'/>
            <Text style={styles.subtitle}>Email</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='royhwang123@outlook.com...'/>
            <Text style={styles.subtitle}>Password</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Secret...'/>
            <Text style={styles.subtitle}>Instrument</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Guitar, Saxophone, Piano...'/>
            <Text style={styles.subtitle}>Genre</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Jazz, Rock, Blues...'/>
            <Text style={styles.subtitle}>Location</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Philadelphia, Vancouver...'/>
            <Text style={styles.subtitle}>Grade/Year</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Freshman'/>
            <Text style={styles.subtitle}>School</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='University of Pennsylvania'/>
            <Text style={styles.subtitle}>School contact</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='j_williams@surreyschools.ca'/>
            <Button style={styles.buttonStyle} color='#E35F21' title='Next' onPress={() => {navigation.navigate('Home Page')}}/>
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
        borderColor: 'white',
        color: 'white',
        width: '50%',
    },
    buttonStyle: {
        backgroundColor: 'white',
        marginTop: '30%',
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




export default CreateProfile
