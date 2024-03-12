import React from 'react';
import {StyleProp, Text as ReactNativeText, TextStyle} from 'react-native';
import {useTextStyles} from './TextStyles';
import {ReactNode} from 'react';

interface ViewProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export const Text = ({children, style}: ViewProps) => {
  const styles = useTextStyles();

  return (
    <ReactNativeText style={[styles.text, style]}>{children}</ReactNativeText>
  );
};
