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
    FlatList,
  } from 'react-native';

  
  import Login from '../Login';
  import CreateProfile from '../GoGig/CreateProfile';
  import FindGroup from '../GoGig/FindGroup'
  
  

  import ArtistList from '../GoGig/ArtistList'
  import Gig from '../GoGig/Gig'
  import AddArtist from '../GoGig/AddArtist'
  import App from '../../App'
  import Tabs from '../Tabs'
  import VenueProfile from './VenueProfile'
  import GetGig from './GetGig'

  import {NavigationContainer, TabActions} from '@react-navigation/native';
  import {createStackNavigator} from '@react-navigation/stack';
  import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
  
  import { color, Value } from 'react-native-reanimated';
  import { TouchableOpacity } from 'react-native-gesture-handler';
  
  
  

  const BottomTabs = createBottomTabNavigator();

 

class Musicians extends Component{

    constructor() {
        super()
        this.state = {
            DATA: [
                { text: 'Pasquale Grasso', key: '1', money: '10', genre: 'jazz'},
                { text: 'Hi', key: '2', money: '10', genre: 'jazz'},
                { text: 'Start of something ', key:'3', money: '10', genre: 'jazz'},
                { text: 'no', key:'4', money: '10', genre: 'jazz'},
                { text: 'Roy Hwang', key: '5', money: '10', genre: 'jazz'},
                { text: 'Hi', key: '6', money: '10', genre: 'jazz'},
                { text: 'Start of something ', key:'7', money: '10', genre: 'jazz'},
                { text: 'no', key:'8', money: '10', genre: 'jazz'},
            ]
        }
    }

    render() {
        const {navigation} = this.props;
       
    return (
        <>
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white', fontSize: 30, marginTop: '5%', marginLeft: '5%'}}>Nearby Musicians</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Venue Profile')}>
                <Image style={{height: 80, width: 80, marginLeft: '35%', }}source={require('../../Assets/profileIcon.jpg')} />
                </TouchableOpacity>
            </View>
       
                <FlatList
                        style={{marginTop: '5%'}}
                        data={this.state.DATA} 
                        renderItem={({item}) => (
                            <View style={{margin: '2%', borderRadius: 10, borderColor:'white', borderWidth: 3,  padding: 5,borderColor: '#E35F21',}}>
                                <Text style={{color: 'white', fontSize: 20, margin: '3%'}}>{item.text}</Text>
                                <View>
                                    <Image style={{ height: 120, width: '100%' }} source={require('../../Assets/grasso.jpg')}/>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View>
                                        <View style={{flexDirection: 'row'}}>
                                            <Image style={{height: 50, width: 50}} source={require('../../Assets/moneySign.jpg')}/>
                                            <Text style={{marginTop:'15%' ,color: 'white', margin: '1%', fontSize: 20, }}>{item.money}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row'}}>
                                            <Image style={{height: 45, width: 45}} source={require('../../Assets/musicSign.jpg')}/>
                                            <Text style={{marginTop:'15%', color: 'white', margin: '1%', fontSize: 20, }}>{item.genre}</Text>
                                        </View>
                                    </View>
                                    <View style={{margin:'10%', marginLeft: '30%', }}>
                                        <Button onPress={() => navigation.navigate('GetGig')} title='Get Gig!' color='#E35F21'/>
                                    </View>
                                </View>
                            </View>
                        )}
                        keyExtractor = {item => item.id}
                    />
             
       
                
          
            
        </View>
        </>
        
    )
    }
}
 



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingTop: '10%',
        flex: 1,
        

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
    header: {
        color: 'white',
        marginLeft: '5 %',
        fontSize: 30,
        
        
        
    },
    image: {
        width: '80%',
    },

})





export default Musicians
