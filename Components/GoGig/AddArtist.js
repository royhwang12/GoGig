import React, {useState} from 'react'
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


export default function AddArtist({submitHandler}){

    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View style={{flexDirection: 'row' }}>
            <TextInput style={{color: 'white'}} onChangeText={changeHandler} underlineColorAndroid='white' placeholderTextColor='white' placeholder='Full Name'/>
            <Button style={{color: 'white'}} title='Add' onPress={() => submitHandler(text)}/>
        </View>
    )
}


/*(text) => this.setState({text}*/