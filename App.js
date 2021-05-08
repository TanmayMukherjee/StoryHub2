
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import ReadStoryScreen from './screens/readStoryScreen';
import WriteStoryScreen from './screens/writeStoryScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import{createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
}
}
const TabNavigator=createBottomTabNavigator({
  ReadStoryScreen:{screen:ReadStoryScreen},
  WriteStoryScreen:{screen:WriteStoryScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName
      if(routeName==='ReadStoryScreen'){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:20,height:20}}/>
        )
      }
      else if(routeName==='WriteStoryScreen'){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:20,height:20}}/>
        )
      }
    }
  })
}
)
const AppContainer=createAppContainer(TabNavigator);