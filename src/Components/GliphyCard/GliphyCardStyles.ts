import {makeStyles} from '@rneui/themed';

export const useGliphyCardStyles = makeStyles(() => ({
  container: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  video: {
    height: '100%',
    width: '100%',
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
}));
