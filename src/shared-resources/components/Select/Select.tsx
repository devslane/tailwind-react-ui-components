import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { EntityIdentifier } from 'shared-resources/types/EntityIdentifier.type';
import { SelectItemType } from 'shared-resources/types/SelectItems.type';
import React, { Fragment } from 'react';

export interface SelectProps {
  items: SelectItemType[];
  onChange: (value?: EntityIdentifier) => void;
  selectedValue?: EntityIdentifier;
  placeholder?: string;
  isDisabled?: boolean;
}

const Select: React.FC<SelectProps> = (props: SelectProps) => {
  const { items, selectedValue, placeholder, onChange, isDisabled } = props;

  const selectedItem = (): SelectItemType | undefined =>
    (items || []).find((item: SelectItemType) => item.value === selectedValue);

  const renderSelectedItem = (): React.ReactNode => {
    const currItem = selectedItem();
    if (currItem) {
      return <span className='block truncate'>{currItem?.label}</span>;
    }
    return (
      <span className='block truncate opacity-50'>
        {placeholder || 'Select...'}
      </span>
    );
  };

  const handleChange = (value: EntityIdentifier): void => {
    if (value === selectedValue) {
      onChange();
      return;
    }
    onChange(value);
  };

  return (
    <div className='fixed w-72 top-16'>
      <Listbox
        value={selectedValue}
        onChange={handleChange}
        disabled={isDisabled}
      >
        <div className='relative mt-1'>
          <Listbox.Button
            className={({ disabled }) =>
              `relative w-full py-2 pl-3 pr-10 text-left rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm ${
                disabled ? 'bg-gray-50' : 'bg-white'
              }`
            }
          >
            <span className='block truncate'>{renderSelectedItem()}</span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <SelectorIcon
                className='w-5 h-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {items.map((item) => (
                <Listbox.Option
                  key={item.value}
                  disabled={item.disabled}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                    }`
                  }
                  value={item.value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item.label}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          <CheckIcon className='w-5 h-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default React.memo(Select);
