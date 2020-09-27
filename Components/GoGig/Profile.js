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



class Profile extends Component {
    render(){
        const {navigation} = this.props;

        return(
            <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white', fontSize: 30, marginTop: '5%', marginLeft: '5%'}}>Profile</Text>
                <Image style={{height: 80, width: 80, marginLeft: '29%',}}source={require('../../Assets/profileIcon.jpg')}/>
                <View style={styles.headerButton}>
                <Button style={styles.headerButton} color='#E35F21' title='Change' onPress={() => {navigation.navigate('Find Group')}}/>
                </View>
            </View>
            <ScrollView style={{height: '73%'}}>

                <Text style={styles.subtitle}>Name</Text>
                <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Roy Hwang...'/>
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
                <View style={styles.buttonStyle}>
                <Button style={styles.buttonStyle} color='#E35F21' title='Save Changes' onPress={() => {navigation.navigate('Find Group')}}/>
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

export default Profile
