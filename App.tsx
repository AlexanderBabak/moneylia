import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';

export const App = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Babak connection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 20, fontWeight: '700'},
});
