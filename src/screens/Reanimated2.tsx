import React from 'react';
import {ScrollView, View, Text} from 'react-native';

export default function ({navigation}) {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text>Reaniamted2</Text>
      </View>
    </ScrollView>
  );
}
