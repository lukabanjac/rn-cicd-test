import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

const IMAGE_URL = 'https://i.kym-cdn.com/entries/icons/original/000/034/772/Untitled-1.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <Image style={styles.image} source={IMAGE_URL}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    marginTop: 10
  },
  image: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});
