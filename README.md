# react-native-header

A header library for react-native. Uses power of reanimated2.

## Installation

```sh
npm install @oguzturker8/header
```

## Usage

```js
import Header from 'react-native-header';

// ...

<NavigationContainer>
  // ....
  <Stack.Navigator>
    // ...
    <Stack.Screen
      name="Screen1"
      component={Screen1}
      options={{
        header: (props) => <Header {...props} title="deneme" />,
      }}
    />
    // ...
  </Stack.Navigator>
</NavigationContainer>;

// ...
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
