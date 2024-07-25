'use client';

import { Customer } from '../../data/customers';
import CustomersSpoiler from '../CustomersSpoiler/CustomersSpoiler';
import cl from './CustomersTable.module.scss';

type Props = {
  customers:Customer[]
}

const CustomersTable:React.FC<Props> = ({customers}) => {
  return (
    <>
      <table className={cl.table}>
        <thead>
          <tr className={cl.tableHeader}>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.email}>
              <td data-label='name'>{customer.name}</td>
              <td data-label='company'>{customer.company}</td>
              <td data-label='phone'>
                <a href={`tel:${customer.phone}`}>{customer.phone} </a>
              </td>
              <td data-label='email'>
                <a href={`mailto:${customer.email}`}>{customer.email}</a>
              </td>
              <td data-label='country'>{customer.country}</td>
              <td data-label='status'>
                <span
                  className={`${cl.status} ${
                    customer.status ? cl.active : cl.inactive
                  }`}
                >
                  {customer.status ? 'Active' : 'Inactive'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CustomersSpoiler customers={customers} />
    </>
  );
};

export default CustomersTable;
