import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WriteStory from './screens/WriteStoryScreen'
import ReadStory from './screens/ReadStoryScreen'

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
WriteStory: {screen: WriteStory},
ReadStory: {screen: ReadStory}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName==="WriteStory") {
        return(
        <Image
        source = {require("./assets/writebook.png")}
        style={{width:35, height:35}}/>)
      }
      if (routeName==="ReadStory") {
        return(
        <Image
        source = {require("./assets/readbook.png")}
        style={{width:35, height:35}}/>)
      }
    }
  })
})

const AppContainer = createAppContainer(TabNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
