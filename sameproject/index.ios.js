
//'use strict';

//var React = require('react-native');
//var {
//  AppRegistry,
//  StyleSheet,
//  Text,
//  View,
//  Image,
//} = React;

import React, {
   Component
}from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native'

//var AppRegistry = React.AppRegistry;
//var StyleSheet = React.StyleSheet;
//var Text = React.Text;
//var View = React.View;
//var Image = React.Image;

//var sameproject = React.createClass({
class sameproject extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>欢迎世界</Text>
        <Image style={{width:50,height:50, resizeMode: Image.resizeMode.contain}}
               source={{uri:'https://facebook.github.io/react-native/img/header_logo.png'}}>
        </Image>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#05A5D1',
  },
  welcome: {
    fontSize: 20,
    color:'#fff'
  },
});

AppRegistry.registerComponent('sameproject', () => sameproject);
