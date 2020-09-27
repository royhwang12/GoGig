import React, {Component}from 'react'

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
    FlatList,
  } from 'react-native';

  import {NavigationContainer, TabActions} from '@react-navigation/native';
  import {createStackNavigator} from '@react-navigation/stack';
  import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';



class VenueProfile extends Component {
    render(){
        const {navigation} = this.props;

        return(
            <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white', fontSize: 30, marginTop: '5%', marginLeft: '5%'}}>Venue Profile</Text>
                <Image style={{height: 80, width: 80, marginLeft: '10%',}}source={require('../../Assets/profileIcon.jpg')}/>
                <View style={styles.headerButton}>
                <Button style={styles.headerButton} color='#E35F21' title='Change' onPress={() => {navigation.navigate('Find Group')}}/>
                </View>
            </View>
            <ScrollView style={{height: '73%'}}>

                <Text style={styles.subtitle}>Name</Text>
                <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Roy Hwang...'/>
                <Text style={styles.subtitle}>Name of Venue</Text>
                <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Carnegie Hall, Jazz Lincoln Center...'/>
                
                
                <Text style={styles.subtitle}>Location</Text>
                <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Philadelphia, Vancouver...'/>

                <View flexDirection='row'>
                    <Text style={styles.subtitle}>Venue Image</Text>
                    <View style={{marginTop: '10%' , marginLeft: '25%'}}>
                        <Button color='#E35F21' title='Change Image' onPress={() => {navigation.navigate('Find Group')}}/>
                    </View>
                </View>
                <Image style={{borderWidth: 6, borderRadius: 10, borderColor: '#E35F21', height: 250, marginTop: '10%',  width: '100%'}} source={require('../../Assets/Rogers_Arena.jpg')}/>

                <View flexDirection='row' style={styles.buttonStyle}>
                <Button style={styles.buttonStyle} color='#E35F21' title='Save Changes' onPress={() => {navigation.navigate('Find Group')}}/>
                <Button style={styles.buttonStyle} color='#E35F21' title='Logout' onPress={() => {navigation.navigate('Login')}}/>
                </View>
            </ScrollView>
       
                
          
            
        </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingTop: '10%',
        flex: 1,
        

    },
    headerButton: {
        marginTop: '5%',
        height: '5%',
        width: '20%',
    },
    
    header1: {
        flex: 1,
        flexDirection: 'row',
        margin: '10%',
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    subtitle: {
        marginTop: '10%',
        marginLeft: '5%',
        color: '#E35F21',
        fontSize: 18,
    },
    textInput: {
        marginLeft: '5%',
        padding: 1,
        paddingLeft: 10,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#E35F21',
        color: 'white',
        width: '50%',
    },
    buttonStyle: {
        
        margin: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: 'white',
        marginLeft: '5 %',
        fontSize: 30,
        
        
        
    },
    image: {
        width: '80%',
    },

})

export default VenueProfile
