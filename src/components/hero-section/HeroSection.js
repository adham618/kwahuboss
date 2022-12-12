/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  let slider_settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 500,
    speed: 3000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const SliderData = [
    {
      bgImg: '/images/hero-bg/bg-1.png',
      titleCap: 'Transforming Africa:',
      title: 'Through trade and impact invesment',
      desc: 'Delivering prosperity through continental trade',
    },
    {
      bgImg: '/images/hero-bg/bg-2.png',
      titleCap: 'Transforming Africa:',
      title: 'Through trade and impact invesment',
      desc: 'Delivering prosperity through continental trade',
    },
    {
      bgImg: '/images/hero-bg/bg-3.png',
      titleCap: 'AfCTFA:',
      title: 'From ambition to action ',
      desc: 'Delivering prosperity through continental trade',
    },
  ];
  return (
    <div className='hero-section'>
      <Slider {...slider_settings}>
        {SliderData.map((item, index) => (
          <div key={index} className='item-slider'>
            <div className='bg-img'>
              <img src={item.bgImg} alt='bg-image' />
            </div>
            <div className='hero-content'>
              <div className='container'>
                <div className='content'>
                  <h3 className='titleCap !tw-text-[40px] md:!tw-text-[54px]'>
                    {item.titleCap}
                  </h3>
                  <h3 className='title !tw-text-[40px] md:!tw-text-[54px]'>
                    {item.title}
                  </h3>
                  <p className='desc tw-flex tw-items-center !tw-text-[16px] md:!tw-text-[19px]'>
                    {item.desc}
                    <span className='tw-ml-2 tw-inline-block tw-h-0.5 tw-w-[515px] tw-bg-white'></span>
                  </p>
                  <Link
                    className='btn btn-register btn-outline-light !tw-flex'
                    href='/registration'
                  >
                    Register
                  </Link>
                  <div className='rotate-text'>
                    <p>Who is attending ?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
