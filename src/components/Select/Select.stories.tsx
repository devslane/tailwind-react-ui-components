import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EntityIdentifier } from 'constants/types/EntityIdentifier.type';
import React, { useState } from 'react';
import DummyData from './mock-data.json';
import Select from './Select';

export default {
  title: 'Single Select',
  component: Select,
  argTypes: {
    items: {
      control: {
        type: null,
      },
    },
    selected: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [selected, setSelected] = useState<EntityIdentifier>();

  return (
    <Select
      {...args}
      items={DummyData}
      selected={selected}
      onChange={(value) => setSelected(value as any)}
    />
  );
};

export const SingleSelect = Template.bind({});

export const SingleSelectWithPlaceholder = Template.bind({});

SingleSelectWithPlaceholder.args = {
  placeholder: 'Single Select With Placeholder',
};

export const SingleSelectWithDisabled = Template.bind({});

SingleSelectWithDisabled.args = {
  disabled: true,
};
