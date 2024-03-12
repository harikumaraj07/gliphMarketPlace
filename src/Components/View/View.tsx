import React from 'react';
import {StyleProp, View as ReactNativeView, ViewStyle} from 'react-native';
import {useViewStyles} from './ViewStyles';
import {ReactNode} from 'react';

interface ViewProps {
  children: ReactNode;
  style: StyleProp<ViewStyle>;
}

export const View = ({children, style}: ViewProps) => {
  const styles = useViewStyles();

  return (
    <ReactNativeView style={[styles.container, style]}>
      {children}
    </ReactNativeView>
  );
};
