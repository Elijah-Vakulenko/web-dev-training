import React, { useState, useEffect } from 'react';
import GoHomeBtn from '../../components/GoHomeBtn/GoHomeBtn';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import s from './Galleries.module.css';
import Modal from "react-modal";
import clsx from "clsx";
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";
import { SlClose } from "react-icons/sl";

const masonry = `
npm install react-responsive-masonry

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
 
const images = [
  { id: 1, url: '/img/chapter-two.jpg', title: 'Chapter two' },
  { id: 2, url: '/img/coffee.jpg', title: 'Coffee' },
  { id: 3, url: '/img/guitar.jpg', title: 'Guitar' }
];

<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1023: 4, 1440: 5 }}>
          <Masonry className={s.masonryGrid}>
            {images.map((image: Image, index: number) => (
              <div key={image.id} className={s.imageWrapper} onClick={() => handleImageClick(index, images)}>
                <img
                  src={image.url}
                  alt={image.title}
                  className={s.image}
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
`

const randomGrid = `<div className={s.gridcontainer}>
          {images2.map((image, index) => (
            <div className={clsx(s.gridItem, s[\`gridItem\${randomNumbers[index]}\`])} key={image.id}>
              <img
                src={image.url}
                alt={\`Image \${image.id}\`}
                onClick={() => handleImageClick(index, images2)}
              />
            </div>
          ))}
        </div>`

const backgroundGrid = `<div className={s.gridy}>
  {images.map((image: Image, index: number) => {

const getClassName = () => {
      if (index % 5 === 0) return clsx(s.box, s.doubleRaw); 
      if (index % 5 === 1) return clsx(s.box, s.doubleCol); 
      if (index % 5 === 2) return s.box;                    
      if (index % 5 === 3) return clsx(s.box, s.doubleRaw); 
      if (index % 5 === 4) return clsx(s.box, s.doubleCol); 
    };

    return (
      <div
        key={image.id}
        className={getClassName()}
        style={{ backgroundImage: \`url(\${image.url})\` }}
        onClick={() => handleImageClick(index, images)}
      >{image.title}
      </div>
    );
  })}
</div>

.gridy {
  flex-basis: 50%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
}

.box {
  border-radius: 8px;
  background-color: #222;
  background-blend-mode: exclusion;
  color: transparent;
  background-size: cover;
  background-position: top;
  transition: all 2s ease-in-out;
  &:hover {
    background-position: center;
    background-color: #999;
    background-blend-mode: initial;
    cursor: pointer;
  }
}

.doubleRaw {
  background-position: left;
  grid-row: span 2;
}

.doubleCol {
  grid-column: span 2;
}
`

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

const images2 = [
  { id: 1, url: '/img/coast.jpg', title: 'Coast' },
  { id: 3, url: '/img/sakura.jpg', title: 'Sakura' },
  { id: 4, url: '/img/lass.jpg', title: 'Lass' },
  { id: 5, url: '/img/book-and-glasses.jpg', title: 'Book and Glasses' },
  { id: 6, url: '/img/writerscorner.jpg', title: 'Writer\'s Corner' },
  { id: 7, url: '/img/girlinglasses.jpg', title: 'Girl in Glasses' },
  { id: 8, url: '/img/clock.jpg', title: 'Clock' },
  { id: 9, url: '/img/plates.jpg', title: 'Plates' },
  { id: 11, url: '/img/drawing.jpg', title: 'Drawing' },
  { id: 12, url: '/img/dreamcatcher.jpg', title: 'Dreamcatchers' },
  { id: 13, url: '/img/houseandlake.jpg', title: 'House and Lake' },
  { id: 14, url: '/img/naturemort.jpg', title: 'Nature Mort' },
  { id: 15, url: '/img/sunset.jpg', title: 'Sunset' },
  { id: 17, url: '/img/usa.jpg', title: 'USA' },
  { id: 18, url: '/img/prideandprejudice.jpg', title: 'Pride and Prejudice' }
];


interface Image {
  id: number;
  url: string;
  title: string;
}

const Galleries: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<Image[] | null>(null); 
  const [randomNumbers] = useState<number[]>(() => 
    images2.map(() => Math.floor(Math.random() * 6) + 1)
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggleSolution = () => {
    setIsOpen(!isOpen);
  };

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

  const handleImageClick = (index: number, gallery: Image[]) => {
    setSelectedImageIndex(index);
    setSelectedGallery(gallery); 
    setIsModalOpen(true);
  };

  const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsModalOpen(false);
    setSelectedImageIndex(null);
    setSelectedGallery(null);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedGallery) {
      setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % selectedGallery.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null && selectedGallery) {
      setSelectedImageIndex((prevIndex) => (prevIndex! - 1 + selectedGallery.length) % selectedGallery.length);
    }
  };

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
        <ResponsiveMasonry className={s.galleryOne} columnsCountBreakPoints={{ 350: 1, 750: 2, 1023: 4, 1440: 5 }}>
          <Masonry className={s.masonryGrid}>
            {images.map((image: Image, index: number) => (
              <div key={image.id} className={s.imageWrapper} onClick={() => handleImageClick(index, images)}>
                <img
                  src={image.url}
                  alt={image.title}
                  className={s.image}
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <p className={s.warning}>This gallery layout is not visible on a mobile device. Use tablet or a computer. You can still check the code by pressing the button bellow</p>
        <button style={{ margin: '10px 0' }} className='btn' onClick={toggleSolution}>
          {isOpen ? 'Сховати' : 'Показати структуру та стилі'}
        </button>
        {isOpen && <SyntaxHighlighter language="jsx" style={dracula}>{masonry}</SyntaxHighlighter>}
      </div>
{/* ---------------------------------------------------------------------------------- */}
             <h2 className="title">Random size Grid</h2>
      <div className={s.galleryTwo}>
        <div className={s.gridcontainer}>
          {images2.map((image, index) => (
            <div className={clsx(s.gridItem, s[`gridItem${randomNumbers[index]}`])} key={image.id}>
              <img
                src={image.url}
                alt={`Image ${image.id}`}
                onClick={() => handleImageClick(index, images2)}
              />
            </div>
          ))}
        </div>
      </div>
          <p className={s.warning}>This gallery layout is not visible on a mobile device. Use tablet or a computer. You can still check the code by pressing the button bellow</p>
      <button style={{ margin: '10px 0' }} className='btn' onClick={toggleSolution}>
          {isOpen ? 'Сховати' : 'Показати структуру та стилі'}
        </button>
        {isOpen && <SyntaxHighlighter language="jsx" style={dracula}>{randomGrid}</SyntaxHighlighter>}

      <Modal
        style={customStyles}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={s.overlay}
        contentLabel="Image Modal"
        appElement={document.getElementById("root") || undefined}
      >
        {selectedImageIndex !== null && selectedGallery && (
          <div className={s.modalcontent}>
            <button className={s.prevbutton} onClick={handlePrev}><SlArrowLeftCircle /></button>
            <img 
              src={selectedGallery[selectedImageIndex].url} 
              alt={`Image ${selectedGallery[selectedImageIndex].id}`}
              style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            />
            <button className={s.nextbutton} onClick={handleNext}><SlArrowRightCircle /></button>
            <button className={s.closebutton} onClick={closeModal}><SlClose /></button>
          </div>
        )}
      </Modal>
{/* ---------------------------------------------------------------------------------- */}
      
<h2 className="title">Grid pattern + img as a background</h2>
<div className={s.gridy}>
  {images.map((image: Image, index: number) => {

const getClassName = () => {
      if (index % 5 === 0) return clsx(s.box, s.doubleRaw); 
      if (index % 5 === 1) return clsx(s.box, s.doubleCol); 
      if (index % 5 === 2) return s.box;                    
      if (index % 5 === 3) return clsx(s.box, s.doubleRaw); 
      if (index % 5 === 4) return clsx(s.box, s.doubleCol); 
    };

    return (
      <div
        key={image.id}
        className={getClassName()}
        style={{ backgroundImage: `url(${image.url})` }}
        onClick={() => handleImageClick(index, images)}
      >{image.title}
      </div>
    );
  })}
</div>
      <button style={{ margin: '10px 0' }} className='btn' onClick={toggleSolution}>
          {isOpen ? 'Сховати' : 'Показати структуру та стилі'}
        </button>
        {isOpen && <SyntaxHighlighter language="jsx" style={dracula}>{backgroundGrid}</SyntaxHighlighter>}
      
    </div>


    
  );
};

export default Galleries;