import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  animation: (setTransform, setOpacity, style) => [
    {
      transform: [{ scale: setTransform }],
      opacity: setOpacity,
    },
    style,
  ],
});

export default styles;
