import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,ImageBackground,SafeAreaView,Platform,StatusBar} from 'react-native';
import Constants from 'expo-constants';
import SpaceCraftScreen from './spacecraft';
import StartMapScreen from './startmap';
import DailypicScreen from './dailypic';
export default class HomeScreen extends React.Component{
  render(){
  return (
    <View
    style={{
      flex:1
    }}
    > 
    <SafeAreaView
    style={
      styles.androidsafeareaveiwone
    }
    />
    <ImageBackground
    style={{
      height:497,
      width:320
    }}
    source={require('../assets/space.gif')}
    >
      <View
      style={{
        flex:0.5
      }}
      >
    <Text
    style={{
      marginTop :10,
      color:"white",
      fontWeight:"bold",
      fontSize:24,
      alignSelf:'center',
    }}
    >Home Screen</Text>
    <TouchableOpacity
    style={{
      marginTop :45,
      borderRadius:20,
      alignSelf:'center',
  
    }}
    onPress={
      ()=>{
        this.props.navigation.navigate("SpaceCraftScreen")
      }
    }
    ><Text
    style={{
      backgroundColor:"yellow",
      fontWeight:"bold",
      fontSize:24,
      color:"black",
    }}
    >Space Crafts</Text></TouchableOpacity>

    
    <TouchableOpacity
    style={{
      marginTop :50,
      borderRadius:20,
  alignSelf:'center',    
  
    }}
    onPress={
      ()=>{
        this.props.navigation.navigate("StartMapScreen")
      }
    }
    ><Text
    style={{
      backgroundColor:"yellow",
      fontWeight:"bold",
      fontSize:24,
      color:"black",
    }}
    >Start map </Text></TouchableOpacity>
    <TouchableOpacity
    style={{
      marginTop :45,
      borderRadius:20,
      alignSelf:'center',
  
    }}
    onPress={
      ()=>{
        this.props.navigation.navigate("DailypicScreen")
      }
    }
    ><Text
    style={{
      backgroundColor:"yellow",
      fontWeight:"bold",
      fontSize:24,
      color:"black",
    }}
    >DailypicScreen</Text></TouchableOpacity>
    </View>
    </ImageBackground>
    
    </View>
  );
  }
  
  
}
const styles = StyleSheet.create({
  androidsafeareaveiwone:{
    marginTop:Platform.OS === 'android' ? StatusBar.currentHeight:0,
  }})