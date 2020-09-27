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



class Gig extends Component {
    render(){
        const {navigation} = this.props;

        return(
            <View style={styles.container}>
           
                <Text style={{color: 'white', fontSize: 30, marginTop: '5%', marginLeft: '5%'}}>Gig!</Text>
          
            <ScrollView style={{height: '73%'}}>

                <View  flexDirection='row'>
                <Text style={{marginTop: '3%', color: 'white'}}>Address: </Text>
                <Text style={{marginTop:'2%' , marginLeft: '5%',color: '#E35F21', fontSize: 18,}}>Rogers Arena, Vancouver, BC</Text>
                </View>
                    <Image style={{ borderWidth: 6, borderRadius: 10, borderColor: '#E35F21', height: 120, marginTop: '10%',  width: '100%' }} source={require('../../Assets/Rogers_Arena.jpg')}/>


                <View style={{marginTop: '10%', alignItems: 'center'}}>
                <View  flexDirection='row'>
                    <Text style={{marginTop: '3%', color: 'white'}}>Rate: </Text>
                    <Text style={{marginTop:'2%' , marginLeft: '5%',color: '#E35F21', fontSize: 18,}}>30$ Per Hour</Text>
                </View>
                <View  flexDirection='row'>
                    <Text style={{marginTop: '3%', color: 'white'}}>Genre/Genres: </Text>
                    <Text style={{marginTop:'2%' , marginLeft: '5%',color: '#E35F21', fontSize: 18,}}>Jazz, Blues</Text>
                </View>
                <View  flexDirection='row'>
                    <Text style={{marginTop: '3%', color: 'white'}}>Message: </Text>
                    <Text style={{marginTop:'2%' , marginLeft: '5%',color: '#E35F21', fontSize: 18,}}>Any young musicans welcome to gig!</Text>
                </View>
                <View style={styles.buttonStyle}>
                <   Button style={styles.buttonStyle} color='#E35F21' title='Go Gig!' onPress={() => {navigation.navigate('Find Group')}}/>
                </View>
                </View>
            </ScrollView>
       
                
          
            
        </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
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
        width: '70%',
        marginTop: '10%',
        alignItems: 'center',
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

export default Gig
