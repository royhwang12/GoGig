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
    TouchableOpacity,
  } from 'react-native';

  import ImagePicker from 'react-native-image-picker'




  import Login from '../Login'
  import MakeGroup from '../GoGig/MakeGroup'
  
  import FindGroup from '../GoGig/FindGroup'
  
  

  import ArtistList from '../GoGig/ArtistList'
  import AddArtist from '../GoGig/AddArtist'
  
  import {NavigationContainer, TabActions} from '@react-navigation/native';
  import {createStackNavigator} from '@react-navigation/stack';
  import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
  
  import { color, Value } from 'react-native-reanimated';
  

  const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

class GetGigProfile extends Component{
    constructor(props) {
        super(props)
        this.state = {
            filePath: {
                data: '',
                uri: ''
            },
            fileData: '',
            fileUri: ''
        }
    }


    chooseImage = () => {
        let options = {
          title: 'Select Image',
          customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            const source = { uri: response.uri };
    
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            // alert(JSON.stringify(response));s
            console.log('response', JSON.stringify(response));
            this.setState({
              filePath: response,
              fileData: response.data,
              fileUri: response.uri
            });
          }
        });
      }

   

      launchImageLibrary = () => {
        let options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            const source = { uri: response.uri };
            console.log('response', JSON.stringify(response));
            this.setState({
              filePath: response,
              fileData: response.data,
              fileUri: response.uri
            });
          }
        });
    
      }

      renderFileData() {
        if (this.state.fileData) {
          return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
            style={styles.images}
          />
        } else {
          return <Image source={require('../../Assets/GoGigLogo.jpg')}
            style={styles.images}
          />
        }
      }

      renderFileUri() {
        if (this.state.fileUri) {
          return <Image
            source={{ uri: this.state.fileUri }}
            style={styles.images}
          />
        } 
      }
    
    render(){
        const {navigation} = this.props;
        
    return (
        <View style={styles.container}>

            <ScrollView style={{width: '100%',}} contentContainerStyle={{alignItems: 'center'}}>
            <Text style={styles.title}>Let's get a Gig!</Text>
            <Text style={styles.subtitle}>Name</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Roy Hwang...'/>
            <Text style={styles.subtitle}>Email</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='royhwang123@outlook.com...'/>
            <Text style={styles.subtitle}>Password</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Secret...'/>
            <Text style={styles.subtitle}>Location</Text>
            <TextInput style={styles.textInput}  placeholderTextColor='white' placeholder='Philadelphia, Vancouver...'/>
            
            <Text style={styles.subtitle}>Insert Venue Photo</Text>
            <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}  >
                <Text style={styles.btnText}>Choose File</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.launchCamera} style={styles.btnSection}  >
                <Text style={styles.btnText}>Directly Launch Camera</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.launchImageLibrary} style={styles.btnSection}  >
                <Text style={styles.btnText}>Directly Launch Image Library</Text>
              </TouchableOpacity>

              <View style={styles.ImageSections}>
              <View>
                {this.renderFileData()}
                <Text  style={{textAlign:'center'}}>Base 64 String</Text>
              </View>
              <View>
                {this.renderFileUri()}
                <Text style={{textAlign:'center'}}>File Uri</Text>
              </View>
            </View>
            
            <View style={styles.buttonStyle}> 
            <Button style={styles.buttonStyle} color='#E35F21' title='Next' onPress={() => {navigation.navigate('Musicians')}}/>
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

    ImageSections: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 8,
      paddingVertical: 8,
      justifyContent: 'center'
    },

    images: {
      borderColor: 'white',
    },
    btnText: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 14,
        fontWeight:'bold'
    },
    btnSection: {
        width: 225,
        height: 50,
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginBottom:10
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




export default GetGigProfile
