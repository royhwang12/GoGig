import React, {useState, Component } from 'react'
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

  import ArtistList from './ArtistList'
  import AddArtist from './AddArtist'
  import {NavigationContainer} from '@react-navigation/native';
  import {createStackNavigator} from '@react-navigation/stack';
  import { Value } from 'react-native-reanimated';
  




class MakeGroup extends Component{
    constructor(){
        super()
        this.state = {
            text: '',

            DATA: [
                
                  
            ]
        }
    }

    


    render(){
        const {navigation} = this.props;

          const Item = ({ title }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{title}</Text>
            </View>
          );

          const submitHandler = (text) => {
              let newArtistList = [{text: text, key: Math.random().toString()}, ...this.state.DATA]
              this.setState({DATA: newArtistList})
          }

          const renderItem = ({ item }) => (
            <Item title={item.title} />
          );

          const addToGroup = () => (
            <Text>{this.state.text}</Text>
          );
        
        
    return (
        <View style={styles.container}>
           
            <Text style={styles.title}>Do you have a Gig Group?</Text>
            <View style={styles.group}>
            <TextInput style={styles.text} underlineColorAndroid='white' placeholderTextColor='white' placeholder='Group Name'/>
            <TextInput style={styles.text} underlineColorAndroid='white' placeholderTextColor='white' placeholder='Leader'/>
                <View style={{flexDirection: 'row', marginTop: '10%'}}>
                    <Text style={styles.text}>Musicians</Text>
                    <AddArtist submitHandler={submitHandler}/>
                </View>
                <ScrollView style={styles.musicianList}>
                <FlatList
                        style={{marginTop: '5%'}}
                        data={this.state.DATA}
                        renderItem={({item}) => (
                            <Text style={{color: 'white', margin: '2%', borderRadius: 10, borderColor:'white', borderWidth: 3, padding: 5, borderColor: '#E35F21'}}>{item.text}</Text>
                        )}
                        keyExtractor = {item => item.id}
                    />
                </ScrollView>
            
            <Button   title='Create Group' onPress={() => {navigation.navigate('Home Page')}}/>
            <View style={{margin: '3%'}}/>
            <Button  title='Skip' onPress={() => {navigation.navigate('Home Page')}} />
            </View>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    musicianList: {
        height: '30%',
        
    },
    buttonSpacing: {
        marginTop: '36%',
    },
    list: {
        backgroundColor: 'white',
        color: 'white',
    },  
    input: {
        height: '80%',
        width: '45%',
        backgroundColor: 'black',
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: 'white',
        borderWidth: 3,
        color: 'white',
        borderRadius: 10,
    },  
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 }   
    },  
    group: {
        marginTop: '10%',
        width: '75%',
        
    },
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
        margin: '2%',
        
        
    },
    image: {
        width: '80%',
    },



})

export default MakeGroup
