import Image from 'next/image';
import Attention from '../../icons/worn.png';

const Promote = () => {
  return (
    <div>
      <h1 className='title'>Promote</h1>
      <div className='warnIcon'>
        <Image  src={Attention} alt='attention!' />
      </div>
    </div>
  )
}

export default Promote
