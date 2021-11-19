import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

export default () => {
  const scrollOffset = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollOffset.value = event.contentOffset.y;
    },
  });

  return { scrollOffset, scrollHandler };
};
