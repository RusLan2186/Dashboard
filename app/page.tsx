import Image from 'next/image';
import Attention from '../icons/worn.png';

export default function Home() {
  return (
    <div>
    <h1 className='title'>Dashboard</h1>
    <div className='warnIcon'>
      <Image  src={Attention} alt='attention!' />
    </div>
  </div>
   
  );
}
