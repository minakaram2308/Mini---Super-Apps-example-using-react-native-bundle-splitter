import * as React from 'react';
import {Button, View, Text} from 'react-native';

// @ts-ignore
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
           <Text style={{fontSize: 40, marginBottom:100}}>Super App</Text>
      <Button
        title="Go to Mini App"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;
