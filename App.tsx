import React from 'react';
import {SafeAreaView} from 'react-native';
// import { FlexScreen } from './src/screens/FlexScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {DimensionsScreen} from './src/screens/DimensionsScreen';
import {CounterScreen} from './src/screens/CounterScreen';
// import {HelloWorldScreen} from './src/screens/HelloWorldScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
// import {TaskScreen} from './src/screens/TaskScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#28425B'}}>
      {/* <HelloWorldScreen />; */}
      <CounterScreen />
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      {/* <TaskScreen /> */}
    </SafeAreaView>
  );
};
