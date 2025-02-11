import { createStyleBuilder, extractTwColor } from "react-native-zephyr";
import { View, Text, TouchableOpacity, Animated, Image } from "react-native";

export const { makeStyledComponent, styles, useStyles } = createStyleBuilder({
  extendTheme: {
    colors: {
      ...extractTwColor({ twColor: "fuchsia", name: "brown" }),
    },
  },
});

export const StyledView = makeStyledComponent(View);
export const StyledText = makeStyledComponent(Text);
export const StyledTouchableOpacity = makeStyledComponent(
  Animated.createAnimatedComponent(TouchableOpacity)
);
export const StyledImage = makeStyledComponent(Image);
