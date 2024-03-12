import React, {useMemo, useRef, useState} from 'react';

import {TouchableOpacity, View} from 'react-native';
import Video, {VideoRef} from 'react-native-video';

import {GliphyItem} from 'src/Models';
import {useGliphyCardStyles} from './GliphyCardStyles';
import {Icon} from '@rneui/themed';

export const GliphyCard = ({video}: GliphyItem) => {
  const styles = useGliphyCardStyles();

  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<VideoRef>(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.resume();
    }
  };

  const handleOnEnd = () => {
    // Seeking to start
    videoRef.current?.seek(0);
    // Playing video back again
    videoRef.current?.resume();
  };

  const renderButton = useMemo(() => {
    if (isPlaying) {
      return (
        <View style={styles.button}>
          <Icon type="antdesign" name="pausecircle" color="#FFFFFF" size={20} />
        </View>
      );
    }
    return (
      <View style={styles.button}>
        <Icon type="antdesign" name="play" color="#FFFFFF" size={20} />
      </View>
    );
  }, [styles.button, isPlaying]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={handlePlayPause}>
      <Video
        ref={videoRef}
        source={{uri: video}}
        style={styles.video}
        paused={!isPlaying}
        onEnd={handleOnEnd}
      />
      {renderButton}
    </TouchableOpacity>
  );
};
