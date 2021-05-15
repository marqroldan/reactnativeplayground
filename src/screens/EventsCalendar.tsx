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
        <Text>Events Calendar</Text>
      </View>
    </ScrollView>
  );
}
