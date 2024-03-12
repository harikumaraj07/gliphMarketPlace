import {makeStyles} from '@rneui/themed';

export const useBorderStyles = makeStyles(theme => ({
  container: {
    borderColor: theme.colors.grey0,
    borderWidth: 1,
    borderStyle: 'solid',
  },
}));
