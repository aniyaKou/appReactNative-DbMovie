// @flow
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const makeScreen = (text: string) => (
  <View style={styles.container}>
    <Text>{text}</Text>
  </View>
);

export const Screen1 = () => makeScreen('Screen 1');
export const Screen2 = () => makeScreen('Screen 2');
