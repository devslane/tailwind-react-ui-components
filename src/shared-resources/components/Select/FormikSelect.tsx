import { useField } from 'formik';
import React from 'react';
import InputHelper from '../InputHelper/InputHelper';
import Select, { SelectProps } from './Select';

interface FormikSelectProps extends Omit<SelectProps, 'onChange'> {
  name: string;
}

const FormikSelectMenu: React.FC<FormikSelectProps> = (props) => {
  const { name } = props;
  const [, meta, helpers] = useField(name);

  const { value, error } = meta;
  const { setValue } = helpers;

  return (
    <>
      <Select
        selectedValue={value}
        onChange={(_value): void => setValue(_value)}
        {...props}
      />
      {error && <InputHelper type='error' text={error} />}
    </>
  );
};

export default FormikSelectMenu;
