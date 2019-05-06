/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, SwipeRow, Icon, Button, View } from 'native-base';
import { StyleSheet } from 'react-native';
import Main from './app/components/Main';



export default class App extends React.Component {
  render() {
    return (
       <Main/>
    );
  }
}






const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
  },
});
