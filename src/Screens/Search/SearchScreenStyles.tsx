import {makeStyles} from '@rneui/themed';

export const useSearchScreenStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
  itemContainerStyle: {
    padding: 5,
  },
  enptyContent: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
