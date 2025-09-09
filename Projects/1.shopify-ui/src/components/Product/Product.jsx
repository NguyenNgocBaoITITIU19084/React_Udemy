import { FaStar } from 'react-icons/fa';

import { ProductsData } from '../../contants/Menu';
import Button from '../button/Button';

const Product = () => {
  return (
    <div>
      <div>
        {/* product header */}
        <div className='text-center min-w-[650px] mt-10'>
          <p className='text-xl '>Let's choose your product</p>
          <h1 className='text-primary text-3xl font-bold'>Products</h1>
          <p className='text-x; text-gray-400'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, esse.
          </p>
        </div>

        {/* product section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center'>
            {ProductsData.map((data) => (
              <div key={data.title}>
                <img
                  className='h-[220px] w-[150px] object-cover rounded-xl'
                  src={data.img}
                  alt={data.title}
                />
                <div>
                  <h3 className='font-bold mt-2'>{data.title}</h3>
                  <p className='flex items-center gap-4'>
                    <span>{data.color}</span>
                    <span className='flex items-center gap-1 m-2'>
                      {data.rating} <FaStar className='text-primary' />
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
