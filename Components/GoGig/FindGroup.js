import React, { Component } from 'react';

import SearchableDropdown from 'react-native-searchable-dropdown';

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




  var items = [
    {
        id: 1,
        name: 'JavaScript',
      },
      {
        id: 2,
        name: 'Java',
      },
      {
        id: 3,
        name: 'Ruby',
      },
      {
        id: 4,
        name: 'React Native',
      },
      {
        id: 5,
        name: 'PHP',
      },
      {
        id: 6,
        name: 'Python',
      },
      {
        id: 7,
        name: 'Go',
      },
      {
        id: 8,
        name: 'Swift',
      },
    ];
    
  

class FindGroup extends Component{
    render(){
        const {navigation} = this.props;
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Do you have a Gig Group?</Text>
            <Text style={styles.subtitle}>Search</Text>

            <ScrollView horizontal={true}>
            <SearchableDropdown
            onItemSelect={(item) => {
              const items = this.state.selectedItems;
              items.push(item)
              this.setState({ selectedItems: items });
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: items });
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            defaultIndex={2}
            resetValue={false}
            textInputProps={
              {
                placeholder: "placeholder",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                    
                    color: 'white',
                },
                
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }/>
            <Image style={styles.image} source={require('../../Assets/search.png')}/>
            
            </ScrollView>
            <View style={styles.skip}>
            <Button color='#E35F21' title='Skip' onPress={() => {navigation.navigate('Create Profile')}}/>
            </View>

            
            <Button style={styles.buttonStyle} color='#E35F21' title='Make your own Gig Group' onPress={() => {navigation.navigate('Make Group')}}/>
            
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
    scroll: {
      
      height: 500,
      width: 300,
    },  
    skip: {
        margin: 36,
        height: 30,
        width: 50,
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
        marginTop: 20,
        width: 20,
        height: 20,
    },

})




export default FindGroup
