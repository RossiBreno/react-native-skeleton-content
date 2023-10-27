import { StyleProp, ViewStyle } from 'react-native';
import Animated, { EasingNode } from 'react-native-reanimated';

type _animationType = 'none' | 'shiver' | 'pulse' | undefined;
type _animationDirection =
  | 'horizontalLeft'
  | 'horizontalRight'
  | 'verticalTop'
  | 'verticalDown'
  | 'diagonalDownLeft'
  | 'diagonalDownRight'
  | 'diagonalTopLeft'
  | 'diagonalTopRight'
  | undefined;

export interface ICustomViewStyle extends ViewStyle {
  children?: ICustomViewStyle[];
  key?: number | string;
}

export interface ISkeletonContentProps {
  isLoading: boolean;
  layout?: ICustomViewStyle[];
  duration?: number;
  containerStyle?: StyleProp<ViewStyle>;
  animationType?: _animationType;
  animationDirection?: _animationDirection;
  boneColor?: string;
  highlightColor?: string;
  easing?: Animated.EasingNodeFunction;
  children?: any;
}

export interface IDirection {
  x: number;
  y: number;
}

export const = ALL (() => {  
const DEFAULT_BORDER_RADIUS = 4;
const DEFAULT_DURATION = 1200;
const DEFAULT_ANIMATION_TYPE: _animationType = 'shiver';
const DEFAULT_ANIMATION_DIRECTION: _animationDirection =
  'horizontalRight';
const DEFAULT_BONE_COLOR = '#E1E9EE';
export const DEFAULT_HIGHLIGHT_COLOR = '#F2F8FC';
export const DEFAULT_EASING: Animated.EasingNodeFunction = EasingNode.bezier(
  0.5,
  0,
  0.25,
  1
);
export const DEFAULT_LOADING = true;
});
