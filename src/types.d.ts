import type { ViewStyle } from 'react-native';

/**
 * JSDOC
 */
export interface HeaderStyle {
  leftStyle?: ViewStyle;
  rightStyle?: ViewStyle;
  centerStyle?: ViewStyle;
  wrapperStyle?: ViewStyle;
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
