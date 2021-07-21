import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';
export default class StartMapScreen extends React.Component{
  render(){
  return (
    <View>  
    <WebView
    scalesPageToFit={true}
    source={{ uri: 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'}}
    style={{
      marginTop:20,
      marginBottom:20,
      width:200,
      height:200
    }}
    />

   
    </View>
  );
  }
}