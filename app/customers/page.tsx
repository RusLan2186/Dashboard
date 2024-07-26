'use client';

import cl from './customers.module.scss';
import HelloIcon from '../../icons/Costumers/Hello.png';
import SearchIcon from '../../icons/Costumers/search.svg';
import { customers } from '../../data/customers';
import Image from 'next/image';
import CustomersTable from '@/components/CustomersTable/CustomersTable';
import Pagination from '@/components/Pagination/Pagination';
import { useMemo, useState } from 'react';

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [totalCount, setTotalCount] = useState(customers.length);
  const [searchValue, setSearchValue] = useState('');
  const pageCount = Math.ceil(totalCount / limit);

  const filteredCustomers = useMemo(() => {
    return customers.filter(
      (customer) =>
        customer.name
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        customer.company
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        customer.country
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()),
    );
  }, [searchValue]);

  const startIndex = (currentPage - 1) * limit;
  const currentCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + limit,
  );

  return (
    <div>
      <div className={cl.title}>
        <h1>Hello Evano</h1>
        <Image src={HelloIcon} alt='Hello' />,
      </div>

      <div className={cl.content}>
        <div className={cl.header}>
          <div className={cl.headerTitle}>
            <p>All Customers</p>
            <a href='#'>Active Members</a>
          </div>
          <div className={cl.search}>
            <Image src={SearchIcon} alt='SearchIcon' />
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={cl.searchInput}
              type='text'
              placeholder='Search'
            />
            {searchValue && <span onClick={() => setSearchValue('')}>X</span>}
          </div>
        </div>
        {currentCustomers.length !== 0 ? (
          <>
            <CustomersTable customers={currentCustomers} />

            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageCount={pageCount}
            />
          </>
        ) : (
          <h1 className='error'>Customers not found</h1>
        )}
      </div>
    </div>
  );
};

export default Customers;
