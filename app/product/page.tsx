import Image from 'next/image';
import Attention from '../../icons/worn.png';

const Product = () => {
  return (
    <div>
      <h1 className='title'>Product</h1>
      <div className='warnIcon'>
        <Image  src={Attention} alt='attention!' />
      </div>
    </div>
  )
}

export default Product
