import { useState, useEffect } from 'react';
import { Pagination } from 'swiper/modules';

const useSwiperParams = () => {
  const [swiperParams, setSwiperParams] = useState({
    slidesPerView: 4.5,
    spaceBetween: 3,
    pagination: {
      clickable: true,
    },
    modules: [Pagination],
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setSwiperParams({
          slidesPerView: 1,
          spaceBetween: 1,
          pagination: {
            clickable: true,
          },
          modules: [Pagination],
        });
      } else {
        setSwiperParams({
          slidesPerView: 4.5,
          spaceBetween: 3,
          pagination: {
            clickable: true,
          },
          modules: [Pagination],
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return swiperParams;
};

export default useSwiperParams;
