import { addons } from '@storybook/manager-api';
import './titleAddon';
import theme from './theme';

addons.setConfig({
  theme,
});
