// In App.js in a new project

import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { Header } from 'react-native-header';

type screenNavigation = {
  navigation: StackNavigationProp<ParamListBase, string>;
};

function Screen1({ navigation }: screenNavigation) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen3</Text>
      <Button
        title="Move to screen4"
        onPress={() => navigation.navigate('Screen4')}
      />
    </View>
  );
}

function Screen4({ navigation }: screenNavigation) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen4</Text>
      <Button title="Reset stack" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{
            header: (props) => <Header {...props} title="deneme" />,
          }}
        />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
