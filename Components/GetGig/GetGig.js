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



class GetGig extends Component {
    render(){
        const {navigation} = this.props;

        return(
            <View style={styles.container}>
           
                <Text style={{color: 'white', fontSize: 30, marginTop: '5%', marginLeft: '5%'}}>Get Gig!</Text>
          
            <ScrollView style={{height: '73%', width: '100%'}}>

                <View  flexDirection='row'>
                <Text style={{marginTop: '3%', color: 'white'}}>Name: </Text>
                <Text style={{marginTop:'2%' , marginLeft: '5%',color: '#E35F21', fontSize: 18,}}>Pasquale Grasso</Text>
                </View>
                    <Image style={{ borderWidth: 6, borderRadius: 10, borderColor: '#E35F21', height: 250, marginTop: '10%',  width: '100%' }} source={require('../../Assets/grasso.jpg')}/>


                <View style={{marginTop: '5%', alignItems: 'center'}}>
                <View  flexDirection='row'>
                    <Text style={{color: 'white'}}>Time Frame: </Text>
                    <Text style={{marginLeft: '5%',color: '#E35F21', fontSize: 18,}}>7:30PM - 10:30PM</Text>
                </View>
                <View  flexDirection='row'>
                    <Text style={{marginTop: '3%', color: 'white'}}>Rate: </Text> 
                    <Text style={{marginTop: '2%', marginLeft: '5%', color: '#E35F21', fontSize: 18,}}>$100 per hour</Text>
                </View>
                <View  flexDirection='row'>
                    <Text style={{marginTop: '3%', color: 'white'}}>Genre/Genres: </Text>
                    <Text style={{marginTop:'2%' , marginLeft: '5%',color: '#E35F21', fontSize: 18,}}>Jazz, Blues</Text>
                </View>
                <View  flexDirection='row'>
                    <Text style={{marginTop: '3%', color: 'white'}}>Message: </Text>
                    <Text style={{marginTop:'2%' , marginLeft: '5%',color: '#E35F21', fontSize: 18,}}>Excited to Play!</Text>
                </View>
                <View  flexDirection='row'>
                    <Text style={{marginTop: '3%', color: 'white'}}>School: </Text>
                    <Text style={{marginTop:'2%' , marginLeft: '5%',color: '#E35F21', fontSize: 18,}}>Semiahmoo Secondary</Text>
                </View>
                <View  flexDirection='row'>
                    <Text style={{marginTop: '3%', color: 'white'}}>Verify Contact: </Text>
                    <Text style={{marginTop:'2%' , marginLeft: '5%',color: '#E35F21', fontSize: 18,}}>royhwang123@outlook.com</Text>
                </View>
                <View style={styles.buttonStyle}>
                <   Button style={styles.buttonStyle} color='#E35F21' title='Get Gig!' onPress={() => {navigation.navigate('Find Group')}}/>
                </View>
                </View>
            </ScrollView>
       
                
          
            
        </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
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
        marginTop: '5%',
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

export default GetGig
