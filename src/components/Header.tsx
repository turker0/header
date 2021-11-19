import React, { useMemo } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import type { HeaderProps } from '../index';

const Header = ({
  style,
  title,
  type,
  callback,
  size,
  navigation,
  insets,
  previous,
  animation,
}: HeaderProps) => {
  // Left config
  const LeftContent = useMemo(() => {
    switch (type?.left) {
      case 'back':
        return '<';
      case 'close':
        return 'X';
      default:
        if (previous) return '<';
        return null;
    }
  }, [previous, type?.left]);

  const LeftCallback = useMemo(() => {
    switch (type?.left) {
      case 'back':
        return navigation.goBack;
      case 'close':
        return navigation.popToTop;
      default:
        if (previous) return navigation.goBack;
        return null;
    }
  }, [navigation.goBack, navigation.popToTop, previous, type?.left]);

  // Right config
  const RightContent = useMemo(() => {
    switch (type?.right) {
      case 'back':
        return '<';
      case 'close':
        return 'X';
      default:
        if (previous) return 'X';
        return null;
    }
  }, [previous, type?.right]);

  const RightCallback = useMemo(() => {
    switch (type?.right) {
      case 'back':
        return navigation.goBack;
      case 'close':
        return navigation.popToTop;
      default:
        if (previous) return navigation.popToTop;
        return null;
    }
  }, [navigation.goBack, navigation.popToTop, previous, type?.right]);

  // Animated styles

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor =
      animation?.background?.slidingRange && animation?.background?.colorRange
        ? interpolateColor(
            animation?.animatedValue.value ?? 0,
            animation?.background?.slidingRange ?? [0, 100],
            animation?.background?.colorRange ?? ['blue', 'red']
          )
        : undefined;
    return {
      backgroundColor,
    };
  });

  return (
    <SafeAreaView style={[{ paddingTop: insets.top }]}>
      <Animated.View
        style={[styles.container, style?.wrapperStyle, animatedStyle]}
      >
        <View style={[styles.leftContainer, style?.leftStyle]}>
          <Pressable onPress={LeftCallback}>
            <Text style={{ fontSize: size?.left }}>{LeftContent}</Text>
          </Pressable>
        </View>
        <Pressable
          onPress={callback?.onCenter}
          style={[styles.centerContainer, style?.centerStyle]}
        >
          <View>
            <Text
              style={[{ fontSize: size?.center }, style?.titleStyle]}
              numberOfLines={1}
            >
              {title}
            </Text>
          </View>
        </Pressable>
        <View style={[styles.rightContainer, style?.rightStyle]}>
          <Pressable onPress={RightCallback}>
            <Text style={{ fontSize: size?.right }}>{RightContent}</Text>
          </Pressable>
        </View>
      </Animated.View>
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
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
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
