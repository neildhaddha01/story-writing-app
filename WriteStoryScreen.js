import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';

export default class WriteStory extends React.Component {
    render() {
      return (
        <View style = {styles.container}>
            <View style={styles.textContainer}>
            <Text style={styles.text}>Write a Story</Text>
            </View>
            <View style = {styles.inputView}>
               <TextInput
                 style = {{
                 width: 325,
                 height: 40,
                 borderWidth: 3,
                 borderRightWidth: 3,
                 fontSize: 20,
                 marginBottom: -30
                 }}
                 placeholder="Story Title"/>
            </View>
            <View style = {styles.inputView}>
               <TextInput
                 style = {{
                 width: 325,
                 height: 40,
                 borderWidth: 3,
                 borderRightWidth: 3,
                 fontSize: 20,
                 marginBottom: -30
                 }}
                 placeholder="Author"/>
            </View>
            <View style = {styles.inputView}>
               <TextInput
                 style = {{
                 width: 325,
                 height: 425,
                 borderWidth: 3,
                 borderRightWidth: 3,
                 fontSize: 20,
                 marginBottom: -30
                 }}
                 placeholder="Write your Story"
                 multiline = {true}/>
            </View>
            <View style = {styles.inputView}>
                <TouchableOpacity
                 style={styles.scanButton}>
                   <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 17.5
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    scanButton:{
      backgroundColor: 'grey',
      width: 100,
      borderWidth: 1.5,
    },
    textContainer:{
        backgroundColor: 'grey',
      },
    text:{
        color: 'white',
        padding: 17.5,
        fontSize: 18,
        textAlign: 'center',
      }
  });
  