import { FolderIcon } from '@heroicons/react/outline';
import React from 'react';
import { EmptyProps } from 'shared-resources/types/Empty.type';

const Empty: React.FC<EmptyProps> = ({ icon, description }) => (
  <div className='flex flex-col p-6'>
    {icon || <FolderIcon className='w-12 h-12 text-gray-400' />}
    {description || <span className='text-gray-400'>No data</span>}
  </div>
);

export default React.memo(Empty);
