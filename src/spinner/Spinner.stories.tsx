import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TopRoundedSpinner } from './Spinner';

export default {
  title: 'Spinner',
  component: TopRoundedSpinner,
} as ComponentMeta<typeof TopRoundedSpinner>;

const Template: ComponentStory<typeof TopRoundedSpinner> = (args) => (
  <TopRoundedSpinner {...args} />
);

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  border: 'border-blue-200',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  border: 'border-red-900',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  border: 'border-yellow-200',
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: 'xl',
};
