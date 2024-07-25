'use client'

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import cl  from '../../components/CustomersTable/CustomersTable.module.scss';

const CustomersTableSkeleton = () => {
  const skeletonArray = Array.from({ length: 8 }, (_, index) => index);

  return (
    <div className={cl.table}>
      <table>
        <thead>
          <tr>
            <th><Skeleton width={100} /></th>
            <th><Skeleton width={100} /></th>
            <th><Skeleton width={100} /></th>
            <th><Skeleton width={150} /></th>
            <th><Skeleton width={100} /></th>
            <th><Skeleton width={100} /></th>
            <th><Skeleton width={100} /></th>
          </tr>
        </thead>
        <tbody>
          {skeletonArray.map((item) => (
            <tr key={item}>
              <td><Skeleton width={150} /></td>
              <td><Skeleton width={100} /></td>
              <td><Skeleton width={150} /></td>
              <td><Skeleton width={200} /></td>
              <td><Skeleton width={150} /></td>
              <td><Skeleton width={100} /></td>
              <td><Skeleton width={100} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTableSkeleton;
