import { ImageList } from '../../contants/Menu';
import Slider from 'react-slick';

import Button from '../button/Button';

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='slider-container'>
      <div className='w-full h-[500px] bg-slate-200 overflow-hidden'>
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div
                key={data.id}
                className='flex items-center justify-center p-8'
              >
                <div className=''>
                  <h1 className='text-5xl font-bold mb-5'>{data.title}</h1>
                  <p className='text-xl mb-5'>{data.description}</p>
                  <Button className='py-3 px-4'>
                    <span>Buy Now</span>
                  </Button>
                </div>
                <div className='w-1/2'>
                  <img src={data.img} alt='' />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
