import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.containter}>
        <View style={{...styles.purpleBox, width: width * 0.5}} />
        <View style={styles.orangeBox} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: '20%',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
