import React from 'react';
import {SafeAreaView} from 'react-native';
import {FlexScreen} from './src/screens/FlexScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {DimensionsScreen} from './src/screens/DimensionsScreen';
// import {CounterScreen} from './src/screens/CounterScreen';
// import {HelloWorldScreen} from './src/screens/HelloWorldScreen';
// import {PositionScreen} from './src/screens/PositionScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen />; */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      <FlexScreen />
    </SafeAreaView>
  );
};
