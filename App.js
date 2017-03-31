import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: papayawhip;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  color: palevioletred;
`;

const Header = styled.Text`
  color: rebeccapurple;
  font-size: 40;
`;


export default class App extends React.Component {
  render() {
    return (
      <StyledView>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Header>Shake your phone to open the developer menu.</Header>
        <StyledText>Hey, Kyle.</StyledText>
      </StyledView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
