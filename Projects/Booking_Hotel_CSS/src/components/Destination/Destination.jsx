import './Destination.css';

import { FaStar } from 'react-icons/fa6';
import { AiFillLike } from 'react-icons/ai';

const Destination = () => {
  return (
    <div className='d-container'>
      <div className='d-title'>
        <h1>Your Destination</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nihil.
        </p>
      </div>
      <div className='d-list'>
        <div className='d-item'>
          <img
            className='d-item-image'
            src='https://tse3.mm.bing.net/th/id/OIP.u8oJVsEv657O2sQkl3oawAHaFj?pid=Api&P=0&h=220'
            alt=''
          />
          <div className='d-item-content'>
            <span className='d-item-type'>
              Guesthouse
              <div className='star'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className='like'>
                <AiFillLike />
              </span>
            </span>
            <span className='name'>Mekong Lodge Resort</span>
            <span className='location'>Cai Be, Vietnam</span>
            <div className='reviews'>
              <span className='rating'>8.9</span>
              <p>
                <span>Excellent</span>
                <span>1,289 reviews</span>
              </p>
            </div>
          </div>
        </div>
        <div className='d-item'>
          <img
            className='d-item-image'
            src='https://tse3.mm.bing.net/th/id/OIP.u8oJVsEv657O2sQkl3oawAHaFj?pid=Api&P=0&h=220'
            alt=''
          />
          <div className='d-item-content'>
            <span className='d-item-type'>Guesthouse **** like</span>
            <span className='name'>Mekong Lodge Resort</span>
            <span className='location'>Cai Be, Vietnam</span>
            <div className='reviews'>
              <span className='rating'>8.9</span>
              <p>
                <span>Excellent</span>
                <span>1,289 reviews</span>
              </p>
            </div>
          </div>
        </div>
        <div className='d-item'>
          <img
            className='d-item-image'
            src='https://tse3.mm.bing.net/th/id/OIP.u8oJVsEv657O2sQkl3oawAHaFj?pid=Api&P=0&h=220'
            alt=''
          />
          <div className='d-item-content'>
            <span className='d-item-type'>Guesthouse **** like</span>
            <span className='name'>Mekong Lodge Resort</span>
            <span className='location'>Cai Be, Vietnam</span>
            <div className='reviews'>
              <span className='rating'>8.9</span>
              <p>
                <span>Excellent</span>
                <span>1,289 reviews</span>
              </p>
            </div>
          </div>
        </div>
        <div className='d-item'>
          <img
            className='d-item-image'
            src='https://tse3.mm.bing.net/th/id/OIP.u8oJVsEv657O2sQkl3oawAHaFj?pid=Api&P=0&h=220'
            alt=''
          />
          <div className='d-item-content'>
            <span className='d-item-type'>Guesthouse **** like</span>
            <span className='name'>Mekong Lodge Resort</span>
            <span className='location'>Cai Be, Vietnam</span>
            <div className='reviews'>
              <span className='rating'>8.9</span>
              <p>
                <span>Excellent</span>
                <span>1,289 reviews</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
