import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
      />
      <View style={styles.content}>
        <Text>Deneme</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    borderWidth: 5,
  },
});
