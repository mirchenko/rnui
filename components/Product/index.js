import React, {Component} from 'react';
import styled from 'styled-components/native';
import {ScrollView, SafeAreaView} from 'react-native';
import NavBar from './NavBar';
import Hero from './Hero';
import Form from './Form';

export default class Product extends Component {
  state = {
    menuIndex: 0,
  };

  render() {
    const {menuIndex} = this.state;

    return (
        <View>
          <NavBar menuIndex={menuIndex}/>
          <ScrollView style={{flex: 1}}>
            <Hero/>
            <Form/>
          </ScrollView>
        </View>
    );
  }
}

const View = styled.SafeAreaView`
  width: 100%;
  background-color: rgb(245, 243, 243);
  flex: 1;
`;