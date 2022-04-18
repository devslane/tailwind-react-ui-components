import { InboxIcon } from '@heroicons/react/outline';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div className='w-48'>
    <Input {...args} />
  </div>
);

export const Basic = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Basic label',
};

export const WithErrorState = Template.bind({});
WithErrorState.args = {
  label: 'Basic label',
  error: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Basic label',
  disabled: true,
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  type: 'password',
};

export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
  label: 'Basic Label',
  leadingIcon: <InboxIcon className='text-gray-400' />,
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  label: 'Basic Label',
  trailingIcon: <InboxIcon className='text-gray-400' />,
};
