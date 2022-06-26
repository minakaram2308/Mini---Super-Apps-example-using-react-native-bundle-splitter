import * as React from 'react';
import {View, Text} from 'react-native';

function wait(ms: number) {
  const start = new Date().getTime();
  let end = start;

  while (end < start + ms) {
    end = new Date().getTime();
  }
}

wait(5000);

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
           <Text style={{fontSize: 40, marginBottom:100}}>Mini App</Text>
    </View>
  );
}

export default DetailsScreen;
