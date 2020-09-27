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

  import {NavigationContainer} from '@react-navigation/native';
  import {createStackNavigator} from '@react-navigation/stack';

const ArtistList = () => {
    const [artists, setArtists] = useState([
        { text: 'Roy Hwang', key: '1' },
        { text: 'Hi', key: '2'},
        { text: 'Start of something ', key:'3'},
    ]);

    return(
      <View style={styles.list}>
          <FlatList
            style={styles.list}
            data={artists}
            renderItem={(item) => (
            <Text>{item.text}</Text>
            )}
          />
      </View>  
    );
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        color: 'white',
    }
})

export default ArtistList
