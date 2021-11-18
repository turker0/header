import React, { useMemo } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import type {
  Callback,
  EdgeInsets,
  HeaderStyle,
  HeaderType,
  ParamListBase,
  Route,
  Scene,
  Size,
  StackNavigationProp,
} from 'react-native-header';

interface Props {
  style?: HeaderStyle;
  title?: string;
  type?: HeaderType;
  callback?: Callback;
  size?: Size;
  navigation: StackNavigationProp<ParamListBase, string>;
  insets: EdgeInsets;
  previous?: Scene<Route<string, object | undefined>>;
  // headerAnimatedValue?: Animated.Value;
}

const Header = ({
  style,
  title,
  type,
  callback,
  size,
  // navigation,
  insets,
}: // previous,
Props) => {
  const LeftContent = useMemo(() => {
    switch (type?.left) {
      case 'back':
        return '<';
      case 'close':
        return 'X';
      default:
        return null;
    }
  }, [type?.left]);

  const RightContent = useMemo(() => {
    switch (type?.right) {
      case 'back':
        return '>';
      case 'close':
        return 'X';
      default:
        return null;
    }
  }, [type?.right]);
  return (
    <SafeAreaView style={{ paddingTop: insets.top }}>
      <View style={[styles.container, style?.wrapperStyle]}>
        <View style={[styles.leftContainer, style?.leftStyle]}>
          <Pressable onPress={callback?.onLeft}>
            <Text style={{ fontSize: size?.left }}>{LeftContent}</Text>
          </Pressable>
        </View>
        <Pressable
          onPress={callback?.onCenter}
          style={[styles.centerContainer, style?.centerStyle]}
        >
          <View>
            <Text style={{ fontSize: size?.center }}>{title}</Text>
          </View>
        </Pressable>
        <View style={[styles.rightContainer, style?.rightStyle]}>
          <Pressable onPress={callback?.onRight}>
            <Text style={{ fontSize: size?.right }}>{RightContent}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  leftContainer: {
    minWidth: 32,
    alignItems: 'center',
  },
  centerContainer: {
    flex: 1,
    paddingHorizontal: 8,
  },
  rightContainer: {
    minWidth: 32,
    alignItems: 'center',
  },
});
