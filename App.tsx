/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

///Screens
import Screen__Reanimated2 from './src/screens/Reanimated2';
import Screen__EventsCalendar from './src/screens/EventsCalendar';
import Screen__AlphabetListPackage from './src/screens/AlphabetListPackage';
import Screen__AlphabetListRN from './src/screens/RNSectionList';

const Drawer = createDrawerNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Screen__AlphabetListRN">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen
            name="Screen__Reanimated2"
            component={Screen__Reanimated2}
          />
          <Drawer.Screen
            name="Screen__EventsCalendar"
            component={Screen__EventsCalendar}
          />
          <Drawer.Screen
            name="Screen__AlphabetListPackage"
            component={Screen__AlphabetListPackage}
          />
          <Drawer.Screen
            name="Screen__AlphabetListRN"
            component={Screen__AlphabetListRN}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
