declare module "react-native-slider" {
  import { Component } from "react";
  import { ViewStyle } from "react-native";

  export interface SliderProps {
    value?: number;
    minimumValue?: number;
    maximumValue?: number;
    step?: number;
    minimumTrackTintColor?: string;
    maximumTrackTintColor?: string;
    thumbTintColor?: string;
    onValueChange?: (value: number) => void;
    onSlidingStart?: (value: number) => void;
    onSlidingComplete?: (value: number) => void;
    style?: ViewStyle;
    thumbStyle?: ViewStyle;
    trackStyle?: ViewStyle;
  }

  export default class Slider extends Component<SliderProps> {}
}
