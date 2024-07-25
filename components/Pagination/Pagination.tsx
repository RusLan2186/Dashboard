'use client';
import cl from './Pagination.module.scss';
import SnapeIcon from '../../icons/NavBar/snape.svg';
import Image from 'next/image';

type Props = {
  currentPage: number;
  setCurrentPage: (_: number) => void;
  pageCount: number;
};

const Pagination: React.FC<Props> = ({
  setCurrentPage,
  currentPage,
  pageCount,
}) => {
  const pageArray = [];

  for (let i = 0; i < pageCount; i++) {
    pageArray.push(i + 1);
  }
  return (
    <div className={cl.wrapper}>
      <div className={cl.info}>
        <p>
          Showing data {currentPage} to {pageArray.length} of 256K entries
        </p>
      </div>
      <div className={cl.pages}>
        <p className={cl.page} onClick={() => setCurrentPage(1)}>
          <Image className={cl.icon} src={SnapeIcon} alt='SnapeIcon'/>
        </p>
        {pageArray.map((page) => (
          <p
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? cl.page__current : cl.page}
            key={page}
          >
            {page}
          </p>
        ))}
        <p className={cl.page} onClick={() => setCurrentPage(pageArray.length)}>
        <Image src={SnapeIcon} alt='SnapeIcon'/>
        </p>
      </div>
    </div>
  );
};

export default Pagination;
