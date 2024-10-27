import React, { useState, useEffect } from 'react';
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import s from './Galleries.module.css';
import Modal from "react-modal";
import clsx from "clsx";

// Масив зображень
const images = [
  { id: 1, url: '/img/chapter-two.jpg', title: 'Chapter two' },
  { id: 2, url: '/img/coffee.jpg', title: 'Coffee' },
  { id: 3, url: '/img/guitar.jpg', title: 'Guitar' },
  { id: 4, url: '/img/girl-in-the-train.jpg', title: 'Girl' },
  { id: 5, url: '/img/lemons.jpg', title: 'Lemons' },
  { id: 6, url: '/img/lumineers.jpg', title: 'Flowers on the floor' },
  { id: 7, url: '/img/sunflowers.jpg', title: 'Sunflowers and girl' },
  { id: 8, url: '/img/suitcase.jpg', title: 'Suitcase' },
  { id: 9, url: '/img/books.jpg', title: 'Books' },
  { id: 10, url: '/img/gypsophila.jpg', title: 'Gypsophila' },
  { id: 11, url: '/img/wheat.jpg', title: 'Wheat' },
  { id: 12, url: '/img/diary.jpg', title: 'Diary' }
];

interface Image {
  id: number;
  url: string;
  title: string;
}

const Galleries: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const [randomNumbers] = useState<number[]>(() => 
    images.map(() => Math.floor(Math.random() * 6) + 1)
  );
  // Налаштування стилів для модального вікна
  const customStyles = {
    content: {
      padding: "0",
      background: "unset",
      overflow: "unset",
      border: "none",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1000,
    },
  };

  // Обробка кліку на зображення для відкриття модального вікна
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  // Закриття модального вікна
  const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  // Перехід до наступного зображення
  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % images.length);
    }
  };

  // Перехід до попереднього зображення
  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! - 1 + images.length) % images.length);
    }
  };

  // Обробка натискань клавіш (стрілки для навігації та Esc для закриття)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        closeModal(e as unknown as React.MouseEvent<HTMLButtonElement>);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className='container'>
      <GoHomeBtn />
      <div>
        <h2 className="title">Masonry Layout</h2>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1023: 4, 1440: 5 }}>
          <Masonry className={s.masonryGrid}>
            {images.map((image: Image, index: number) => (
              <div key={image.id} className={s.imageWrapper} onClick={() => handleImageClick(index)}>
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
      <div>
        <h2 className="title">Random size Grid</h2>
        <div className={s.gridcontainer}>
        {images.map((image, index) => (
          <div className={clsx(s.gridItem, s[`gridItem${randomNumbers[index]}`])} key={image.id}>
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
        <Modal
          style={customStyles}
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          overlayClassName={s.overlay}
          contentLabel="Image Modal"
          appElement={document.getElementById("root") || undefined} // Перевірка на null
        >
          {selectedImageIndex !== null && (
            <div className={s.modalcontent}>
              <button className={s.prevbutton} onClick={handlePrev}>←</button>
              <img 
                src={images[selectedImageIndex].url} 
                alt={`Image ${images[selectedImageIndex].id}`}
                style={{ maxWidth: "90vw", maxHeight: "90vh" }}
              />
              <button className={s.nextbutton} onClick={handleNext}>→</button>
              <button className={s.closebutton} onClick={closeModal}>X</button>
            </div>
          )}
        </Modal>
      </div>
      <div>
          <h2 className="title">Grid + img as a background</h2>
      <div style={{ backgroundImage: `url('https://example.com/sample.jpg')` }}></div>

       {images.map((image: Image, index: number) => (
  <div
    key={image.id}
    className={s.gridBG}
    onClick={() => handleImageClick(index)}
  >
    <div
      className={clsx(s.box)}
      style={{ backgroundImage: `url(${image.url})` }}
    ></div>
  </div>
))}

        
      </div>
      </div>
  </div>
  );
};

export default Galleries;
