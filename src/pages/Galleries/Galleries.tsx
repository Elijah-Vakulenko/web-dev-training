import React from 'react';
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import s from './Galleries.module.css';

const images = [
  {
    id: 1,
    url: '/img/chapter-two.jpg',
    title: 'Chapter two'
  },
  {
    id: 2,
    url: '/img/coffee.jpg',
    title: 'Coffee'
  },
  {
    id: 3,
    url: '/img/guitar.jpg',
    title: 'Guitar'
  },
  {
    id: 4,
    url: '/img/girl-in-the-train.jpg',
    title: 'Girl'
  },
  {
    id: 5,
    url: '/img/lemons',
    title: 'lemons'
  },
  {
    id: 6,
    url: '/img/lumineers.jpg',
    title: 'Flowers on the floor'
  },
  {
    id: 7,
    url: '/img/sunflowers.jpg',
    title: 'sunflowers and girl'
  },
  {
    id: 8,
    url: '/img/suitcase.jpg',
    title: 'suitcase'
  }
];

interface Image {
  id: number;
  url: string;
  title: string;
}

const Galleries: React.FC = () => {
  return (
    <div className='container'>
      <GoHomeBtn />
      <div>
        <h2 className="title">Masonry Layout</h2>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1023: 4, 1440: 5 }}>
          <Masonry className={s.masonryGrid}>
            {images.map((image: Image) => (
              <div key={image.id} className={s.imageWrapper}>
                <img
                  src={image.url} 
                  alt={image.title}
                  className={s.image}
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Galleries;
