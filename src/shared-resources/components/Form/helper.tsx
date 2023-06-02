import { ReactNode } from 'react';
import FormikInput, { FormikInputProps } from '../Input/FormikInput';
import FormikSelectMenu, { FormikSelectProps } from '../Select/FormikSelect';
import { FormField } from './Form.d';

export const getFieldByType = (field: FormField): ReactNode => {
  switch (field.type) {
    case 'number':
    case 'text':
      return (
        <FormikInput
          {...(field.componentProps as FormikInputProps)}
          name={field.name}
        />
      );
    case 'select':
      return (
        <FormikSelectMenu
          {...(field.componentProps as FormikSelectProps)}
          name={field.name}
        />
      );
    default:
      return null;
  }
};
