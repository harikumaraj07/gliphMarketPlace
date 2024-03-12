import {makeStyles} from '@rneui/themed';

export const useSettingScreenStyles = makeStyles(() => ({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  content: {
    padding: 10,
    borderRadius: 5,
  },
  subTitle: {
    fontSize: 16,
  },
  body: {
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  setSystemDefaultContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5,
  },
  buttonTitleStyle: {
    fontSize: 12,
  },
  themeTogglerContent: {
    paddingTop: 30,
  },
}));
