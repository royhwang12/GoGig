import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


  import Login from './Login';
  import CreateProfile from './GoGig/CreateProfile';
  import FindGroup from './GoGig/FindGroup'


  import { color, Value } from 'react-native-reanimated';


  
  const Tab = createBottomTabNavigator();

    export default function Tabs (){
    


        return (
            
                 <Tab.Navigator>
                    <Tab.Screen name='Login' component={Login}/>
                    <Tab.Screen name='Create Profile' component={CreateProfile}/>
                    <Tab.Screen name='Find Group' component={FindGroup}/>
                </Tab.Navigator>          
            
        );
    
}
