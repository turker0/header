# @oguzturker8/header

A header library for react-native. Uses power of reanimated2.

## Installation

```sh
npm install @oguzturker8/header
```

## Usage

### Basic Header Usage

##### Navigation.tsx

```js
import Header from '@oguzturker8/header';

// ...

<NavigationContainer>
  // ....
  <Stack.Navigator>
    // ...
    <Stack.Screen
      name="Screen1"
      component={Screen1}
      options={{
        header: (props) => <Header {...props} title="title1337" />,
      }}
    />
    // ...
  </Stack.Navigator>
</NavigationContainer>;

// ...
```

### Header Scroll Animation

##### Navigation.tsx

```js
import Header from '@oguzturker8/header';

// ...

<NavigationContainer>
  // ....
  <Stack.Navigator>
    // ...
    <Stack.Screen
      name="Screen4"
      component={Screen4}
      //  Declare it in Screen Component
      //  options={{
      //    header: (props) => (
      //      <Header {...props} title="Screen 04" type={{ right: 'close' }} />
      //    ),
      //  }}
    />
    // ...
  </Stack.Navigator>
</NavigationContainer>;

// ...
```

##### Screen4.tsx

```js
import {
  AnimatedScrollView,
  Header,
  useHeaderAnimation,
} from '@oguzturker8/header';

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
```

### Properties

#### Header

|   Prop    |                                                            Description                                                             |                                                                   Type                                                                   |
| :-------: | :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
|   style   | Header container style prop.<br>Includes 5 parts <br> leftStyle <br> rightStyle <br> centerStyle <br> wrapperStyle <br> titleStyle | leftStyle?: ViewStyle <br> rightStyle?: ViewStyle <br> centerStyle?: ViewStyle <br> wrapperStyle?: ViewStyle <br> titleStyle?: TextStyle |
|   title   |                                                         Header title text                                                          |                                                                  string                                                                  |
|   type    |                                                Decides left and right parts' types                                                 |                                      LeftType = 'back' - 'close' <br> RightType = 'back' - 'close'                                       |
| callback  |                                                      Parts' onPress callbacks                                                      |                                  onLeft?: () => any <br> onRight?: () => any <br> onCenter?: () => any                                   |
|   size    |                                                         Parts' text sizes                                                          |                                          left?: number <br> right?: number <br> center?: number                                          |
| animation |                                                         Header animations                                                          |                                                        Described on below section                                                        |

#### Animation

| Animations |                                    Description                                     |                       Type                       |
| :--------: | :--------------------------------------------------------------------------------: | :----------------------------------------------: |
| background | Header backgroundColor interpolation animation based on ScrollView's scrollOffset. | colorRange: string[] <br> slidingRange: string[] |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
