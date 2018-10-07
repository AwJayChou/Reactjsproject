/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {StackNavigator} from 'react-navigation'
import LoginComponent from './app/components/project/login'
import ProductListComponent from './app/components/project/productList'
import MainComponent from './app/components/project/main'
import DetailComponent from './app/components/project/detail'
const myNavigator =StackNavigator({
    login:{
        screen:LoginComponent,
        navigationOptions:()=>{
            return {
                headTitle:'登录',
                headStyle:{
                    justifyContent: 'center',
                    alignItems:'center'
                }
            }
        }
    },
    main:{
        screen:MainComponent,
        navigationOptions:()=>{
            return  {
                headerTitle:'主页面',
                headerTitleStyle:{
                    justifyContent:'center',
                    alignItems:'center'
                }
            }
        }
    },
    productlist:{
        screen:ProductListComponent,
        navigationOptions:()=>{
            return  {
                headerTitle:'主页面',
                headerTitleStyle:{
                    justifyContent:'center',
                    alignItems:'center'
                }
            }
        }
    },

    detail:{screen:DetailComponent},




})
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class myapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myapp', () => myNavigator);
