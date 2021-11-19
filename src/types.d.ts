import type { TextStyle, ViewStyle } from 'react-native';
import type Animated from 'react-native-reanimated';

/**
 * JSDOC
 */
export interface HeaderStyle {
  leftStyle?: ViewStyle;
  rightStyle?: ViewStyle;
  centerStyle?: ViewStyle;
  wrapperStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

export interface HeaderType {
  left?: LeftType;
  right?: RightType;
}

export type LeftType = 'back' | 'close';

export type RightType = 'back' | 'close';

export interface Callback {
  onLeft?: () => any;
  onRight?: () => any;
  onCenter?: () => any;
}

export interface Size {
  left?: number;
  right?: number;
  center?: number;
}

export interface EdgeInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface Header {
  style?: HeaderStyle;
  title?: string;
  type?: HeaderType;
  callback?: Callback;
  size?: Size;
  navigation: StackNavigationProp<ParamListBase, string>;
  insets: EdgeInsets;
  previous?: Scene<Route<string, object | undefined>>;
  animation?: HeaderAnimation;
}

interface HeaderAnimation {
  animatedValue: Animated.SharedValue<number>;
  background?: BackgroundAnimation;
}

type BackgroundAnimation = {
  colorRange: string[];
  slidingRange: number[];
};

interface AnimatedScrollView extends Component<AnimateProps<ScrollViewProps>> {
  children: ReactNode;
  onScroll:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | Animated.Node<
        ((event: NativeSyntheticEvent<NativeScrollEvent>) => void) | undefined
      >
    | undefined;
}
