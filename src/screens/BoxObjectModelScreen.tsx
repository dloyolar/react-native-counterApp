import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.containter}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {backgroundColor: 'red', flex: 1},
  title: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    fontSize: 20,
    // width: 250,
    borderWidth: 10,
  },
});
