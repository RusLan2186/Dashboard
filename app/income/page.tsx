import Image from 'next/image';
import Attention from '../../icons/worn.png';

const Income = () => {
  return (
    <div>
      <h1 className='title'>Income</h1>
      <div className='warnIcon'>
        <Image  src={Attention} alt='attention!' />
      </div>
    </div>
  )
}

export default Income
