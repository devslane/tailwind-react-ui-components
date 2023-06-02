import { SchemaOf } from 'yup';
import { FormikInputProps } from '../Input/FormikInput';
import { FormikSelectProps } from '../Select/FormikSelect';

export type FieldType = 'text' | 'number' | 'select';

export type FormField<
  T extends number | string = string,
  P extends FormikInputProps | FormikSelectProps = FormikInputProps
> = {
  name: string;
  initialValue?: T;
  type: FieldType;
  validation?: SchemaOf<T>;
  componentProps: P;
  row?: number;
  order?: number;
};
