import { ComponentMeta, ComponentStory } from '@storybook/react';
import { string } from 'yup';

import { FormikInputProps } from '../Input/FormikInput';
import Form from './Form';
import { FormField } from './Form.d';

export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

const FullName: FormField<string, FormikInputProps> = {
  name: 'fullName',
  type: 'text',
  validation: string().required('Full Name is required').nullable(),
  componentProps: { placeholder: 'Full Name', name: 'fullName' },
  row: 2,
};

const LastName: FormField<string, FormikInputProps> = {
  name: 'lastName',
  type: 'text',
  validation: string().required('Last Name is required').nullable(),
  componentProps: { placeholder: 'Last Name', name: 'lastName' },
  row: 1,
};

export const Basic = Template.bind({});

Basic.args = {
  fields: [FullName, LastName],
  handleSubmit: console.log,
  className: 'w-48',
};
