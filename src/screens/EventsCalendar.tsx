import React from 'react';
import {ScrollView, FlatList, View, Text, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const screenWidth = Dimensions.get('window').width;

const DATA = [
  {
    title: 'January',
    data: ['hi', 'hi', 'hi', 'hi', 'hi', 'hi', 'hi', 'hi', 'hi', 'hi', 'hi'],
  },
  {
    title: 'February',
    data: ['hi'],
  },
  {
    title: 'March',
    data: ['hi'],
  },
  {
    title: 'April',
    data: ['hi'],
  },
  {
    title: 'May',
    data: ['hi'],
  },
  {
    title: 'June',
    data: ['hi'],
  },
  {
    title: 'JUly',
    data: ['hi'],
  },
  {
    title: 'August',
    data: ['hi'],
  },
];

const DATA2 = [
  'January 2021',
  'February 2021',
  'March 2021',
  'April 2021',
  'May 2021',
  'June 2021',
  'July 2021',
  'August 2021',
  'September 2021',
  'October 2021',
  'November 2021',
  'December 2021',
];

const months = {
  [DATA2[0]]: [...new Array(31).keys()],
  [DATA2[1]]: [...new Array(24).keys()],
  [DATA2[2]]: [...new Array(16).keys()],
};

const RenderItem = ({item}) => {
  console.log('Values', months[item]);
  return (
    <FlatList
      nestedScrollEnabled={false}
      data={months[item] || []}
      keyExtractor={(kItem, index) => `${kItem}${index}`}
      renderItem={({kItem}) => {
        return (
          <View
            style={{
              flex: 1,
              height: 50,
              backgroundColor: 'yellow',
            }}>
            <Text>{kItem}</Text>
          </View>
        );
      }}
      numColumns={7}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: 'green',
        width: screenWidth,
        height: '100%',
      }}
    />
  );
};

export const CalendarRow = ({
  opacity,
  colors = ['pink', 'grey', 'brown', 'yellow', 'cyan', 'black', 'white'],
}) => {
  return (
    <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'blue'}}>
      <View style={{flex: 1, backgroundColor: colors[0], opacity}} />
      <View style={{flex: 1, backgroundColor: colors[1], opacity}} />
      <View style={{flex: 1, backgroundColor: colors[2], opacity}} />
      <View style={{flex: 1, backgroundColor: colors[3], opacity}} />
      <View style={{flex: 1, backgroundColor: colors[4], opacity}} />
      <View style={{flex: 1, backgroundColor: colors[5], opacity}} />
      <View style={{flex: 1, backgroundColor: colors[6], opacity}} />
    </View>
  );
};

export const CalendarScreen = ({navigation, route, colors}) => {
  return (
    <View style={{height: '100%', width: screenWidth}}>
      <CalendarRow opacity={0.1} colors={colors} />
      <CalendarRow opacity={0.3} colors={colors} />
      <CalendarRow opacity={0.5} colors={colors} />
      <CalendarRow opacity={0.7} colors={colors} />
      <CalendarRow opacity={0.9} colors={colors} />
      <CalendarRow opacity={0.03} colors={colors} />
    </View>
  );
};
/*

      */
class EventsCalendar extends React.Component {
  state = {
    showOthers: false,
  };

  timeout = 0;
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({
        showOthers: true,
      });
    }, 1400);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  /**
   * 
   * @returns 
          <CalendarScreen
            route={{
              params: {
                arget: DATA2[0],
              },
            }}
          />
   */

  render() {
    return (
      <View style={{flex: 1, height: '100%', width: '100%'}}>
        <ScrollView
          horizontal={true}
          snapToInterval={screenWidth}
          snapToAlignment={'center'}
          overScrollMode={'never'}
          contentContainerStyle={{
            height: '100%',
            minWidth: screenWidth,
            backgroundColor: 'blue',
          }}>
          {this.state.showOthers ? (
            <>
              <CalendarScreen
                route={{
                  params: {target: DATA2[2], color: 'blue'},
                }}
                colors={[
                  'cyan',
                  'black',
                  'white',
                  'pink',
                  'grey',
                  'brown',
                  'yellow',
                ]}
              />
            </>
          ) : null}
          <CalendarScreen
            route={{
              params: {
                target: DATA2[0],
              },
            }}
          />
          {this.state.showOthers ? (
            <>
              <CalendarScreen
                route={{
                  params: {target: DATA2[1], color: 'red'},
                }}
                colors={[
                  'cyan',
                  'black',
                  'brown',
                  'yellow',
                  'white',
                  'pink',
                  'grey',
                ]}
              />
            </>
          ) : null}
        </ScrollView>
        {/**
            
            
        <Tab.Navigator lazy={true}>
          <Tab.Screen
            name={DATA2[0]}
            component={CalendarScreen}
            initialParams={{target: DATA2[0]}}
          />
        </Tab.Navigator>
           
           */}
      </View>
    );
  }
}

export default EventsCalendar;
