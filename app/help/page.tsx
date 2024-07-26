import Image from 'next/image';
import Attention from '../../icons/worn.png';
const Help = () => {
  return (
    <div>
      <h1 className='title'>Help</h1>
      <div className='warnIcon'>
        <Image  src={Attention} alt='attention!' />
      </div>
    </div>
  );
};

export default Help;
