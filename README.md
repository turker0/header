# react-native-header

A header library for react-native. Uses power of reanimated2.

## Installation

```sh
npm install react-native-header
```

## Usage

```js
import Header from 'react-native-header';

// ...

<Header
  title="Example Header 01"
  type={{
    left: 'back',
    right: 'close',
  }}
  callback={{
    onLeft: () => {
      console.log('onLeft');
    },
  }}
  size={{
    left: 20,
    right: 20,
    center: 24,
  }}
/>;

// ...
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
