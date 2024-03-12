import {useThemeMode} from '@rneui/themed';
import React from 'react';

import {Appearance} from 'react-native';
import {useSettingScreenStyles} from './SettingScreenStyles';
import {Button, Card, Switch} from '@rneui/base';
import {View, Text, Border} from 'src/Components';

export const SettingScreen = () => {
  const styles = useSettingScreenStyles();
  const {mode, setMode} = useThemeMode();

  const colorScheme = Appearance.getColorScheme();

  const handleToggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const handleSetToSystemMode = () => {
    setMode(colorScheme === 'light' ? 'light' : 'dark');
  };

  return (
    <View style={styles.container}>
      <Border style={styles.content}>
        <View style={[styles.row, styles.spaceBetween]}>
          <Text style={styles.subTitle}>System theme:</Text>
          <Text style={styles.body}>{colorScheme}</Text>
        </View>
        <View style={[styles.row, styles.setSystemDefaultContent]}>
          <Text>Switch to system default?</Text>
          <Button
            size="sm"
            radius={30}
            titleStyle={styles.buttonTitleStyle}
            onPress={handleSetToSystemMode}>
            Yes
          </Button>
        </View>
        <View
          style={[styles.row, styles.themeTogglerContent, styles.spaceBetween]}>
          <Text>Toggle to {mode === 'dark' ? 'Light' : 'Dark'}</Text>
          <Switch value={mode === 'dark'} onValueChange={handleToggle} />
        </View>
      </Border>
    </View>
  );
};
