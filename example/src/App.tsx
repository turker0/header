// In App.js in a new project

import {
  AnimatedScrollView,
  Header,
  useHeaderAnimation,
} from '@oguzturker8/header';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type screenNavigation = {
  navigation: StackNavigationProp<ParamListBase, string>;
};

function Screen1({ navigation }: screenNavigation) {
  return (
    <View style={styles.container}>
      <Text>Screen1</Text>
      <Button
        title="Move to screen2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
}

function Screen2({ navigation }: screenNavigation) {
  return (
    <View style={styles.container}>
      <Text>Screen2</Text>
      <Button
        title="Move to screen3"
        onPress={() => navigation.navigate('Screen3')}
      />
    </View>
  );
}

function Screen3({ navigation }: screenNavigation) {
  return (
    <View style={styles.container}>
      <Text>Screen3</Text>
      <Button
        title="Move to screen4"
        onPress={() => navigation.navigate('Screen4')}
      />
    </View>
  );
}

function Screen4({ navigation }: screenNavigation) {
  const { scrollOffset, scrollHandler } = useHeaderAnimation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <Header
          {...props}
          title="Screen 04"
          type={{ right: 'close' }}
          animation={{
            animatedValue: scrollOffset,
            background: {
              colorRange: ['blue', 'red'],
              slidingRange: [0, 100],
            },
          }}
        />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  return (
    <AnimatedScrollView onScroll={scrollHandler}>
      <View style={styles.container}>
        <Text>Screen4</Text>
        <Button title="Reset stack" onPress={() => navigation.popToTop()} />
        <Text>Screen4</Text>
        {Array.from({ length: 100 }, (_, i) => (
          <Text key={i}>{`${i + 1}. Text`}</Text>
        ))}
      </View>
    </AnimatedScrollView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{
            header: (props) => <Header {...props} title="Screen 01" />,
          }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{
            header: (props) => (
              <Header {...props} title="Screen 02" type={{ right: 'back' }} />
            ),
          }}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{
            header: (props) => (
              <Header
                {...props}
                title="Screen 03"
                type={{ left: 'close', right: 'back' }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Screen4"
          component={Screen4}
          // Declare it in Screen Component
          // options={{
          //   header: (props) => (
          //     <Header {...props} title="Screen 04" type={{ right: 'close' }} />
          //   ),
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
