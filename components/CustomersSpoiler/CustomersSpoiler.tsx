import cl from './CustomersSpoiler.module.scss';
import SnapeIcon from '../../icons/NavBar/snape.svg';
import Image from 'next/image';
import { useState } from 'react';
import { Customer } from '@/data/customers';
import { CSSTransition } from 'react-transition-group';

type Props = {
  customers: Customer[];
};

const SpoilerComponent: React.FC<Props> = ({ customers }) => {
  const [isOpenSpoilerId, setIsOpenSpoilerId] = useState<number | null>(null);

  const toggleSpoiler = (id: number) => {
    setIsOpenSpoilerId(isOpenSpoilerId === id ? null : id);
  };

  return (
    <div className={cl.spoiler}>
      {customers.map((customer) => (
        <div key={customer.id}>
          <ul
            onClick={() => toggleSpoiler(customer.id)}
            className={cl.spoilerTitle}
          >
            <li className={cl.spoilerName}>{customer.name}</li>
            <Image src={SnapeIcon} alt='SnapeIcon' />
          </ul>

          <CSSTransition
            in={isOpenSpoilerId === customer.id}
            timeout={300}
            classNames='spoiler'
            unmountOnExit
          >
            <ul className={cl.spoilerList}>
              <li>
                <span>Phone:</span>
                <a href={`tel:${customer.phone}`}>{customer.phone}</a>
              </li>
              <li>
                <span>Company:</span> {customer.company}
              </li>
              <li>
                <span>Email:</span>
                <a href={`mailto:${customer.email}`}>{customer.email}</a>
              </li>
              <li>
                <span>Country:</span>
                {customer.country}
              </li>
              <li data-label='status'>
                <p
                  className={`${cl.status} ${
                    customer.status ? cl.active : cl.inactive
                  }`}
                >
                  {customer.status ? 'Active' : 'Inactive'}
                </p>
              </li>
            </ul>
          </CSSTransition>
        </div>
      ))}
    </div>
  );
};

export default SpoilerComponent;


