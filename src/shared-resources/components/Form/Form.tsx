import {
  Form as FormikForm,
  Formik,
  FormikHelpers,
  FormikValues,
} from 'formik';
import { FC, Fragment, useMemo } from 'react';
import { object, SchemaOf } from 'yup';

import Button from '../Button/Button';

import { FormField } from './Form.d';
import { getFieldByType } from './helper';

interface FormProps {
  fields: FormField[];
  handleSubmit: (
    values: FormikValues,
    helper: FormikHelpers<Record<string, any>>
  ) => void;
  className: string;
}

const Form: FC<FormProps> = (props) => {
  const { fields: initialFields, handleSubmit, className } = props;

  const fields = useMemo(() => {
    const sorted = initialFields.sort((a, b) => {
      if ((a.row || 0) > (b.row || 0)) return 1;
      return -1;
    });
    console.log('[sorted]', sorted);
    return initialFields;
  }, [initialFields]);

  const initialValues = useMemo(
    () =>
      fields.reduce((acc: FormikValues, curr: FormField) => {
        acc[curr.name] = curr.initialValue ?? null;
        return acc;
      }, {}),
    [fields]
  );

  const validationSchema = useMemo(
    () =>
      object().shape(
        fields
          .filter((field: FormField) => !!field.validation)
          .reduce((acc: Record<string, SchemaOf<any>>, field) => {
            acc[field.name] = field.validation!;
            return acc;
          }, {})
      ),
    [fields]
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <FormikForm className={className}>
          {fields.map((field) => (
            <Fragment key={field.name}>{getFieldByType(field)}</Fragment>
          ))}

          <div className='flex items-center justify-center w-full mt-4 space-x-2'>
            <Button
              type='reset'
              className='text-gray-800 bg-white border-gray-400 rounded shadow hover:bg-gray-100'
            >
              Cancel
            </Button>
            <Button type='submit' className='text-white'>
              Submit
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
