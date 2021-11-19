import React from 'react';
import Animated from 'react-native-reanimated';
import type { AnimatedScrollViewProps } from '../index';

const AnimatedScrollView = ({
  children,
  onScroll,
  ...props
}: AnimatedScrollViewProps) => (
  <Animated.ScrollView onScroll={onScroll} scrollEventThrottle={16} {...props}>
    {children}
  </Animated.ScrollView>
);

export default AnimatedScrollView;
