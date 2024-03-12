import React from 'react';
import {StyleProp, View as ReactNativeView, ViewStyle} from 'react-native';
import {useBorderStyles} from './BorderStyles';
import {ReactNode} from 'react';

interface BorderProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Border = ({children, style}: BorderProps) => {
  const styles = useBorderStyles();

  return (
    <ReactNativeView style={[styles.container, style]}>
      {children}
    </ReactNativeView>
  );
};
