import React, { useState, useEffect } from "react"
import Searchbar from "./Searchbar/Searchbar"
import { getImages } from '../api/api'
import ImageGallery from './ImageGallery/ImageGallery';
import Button from "./Button/Button";
import Loader from './Loader/Loader.jsx'
import Modal from "./Modal/Modal";
import css from './App.module.css'

const App = () => {
   
 const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');

  useEffect(() => {
    if (!query) return;
    
    const fetchData = async () => {
      setIsLoading(true);

   try {
        const { hits, totalHits } = await getImages(query, page);

        if (!hits.length) {
          setIsEmpty(true);
          return;
        }

        setImages((prevImages) => [...prevImages, ...hits]);
        setShowLoadMore(page < Math.ceil(totalHits / 15));
        setLargeImage(hits[0].largeImageURL);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [query, page]);
  

  const handleSubmit = (newQuery) => {
    if (query !== newQuery) {
      setQuery(newQuery);
      setImages([]);
      setPage(1);
    }
  }

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  }

  const toggleModal = () => {
   setIsShowModal((prevIsShowModal) => !prevIsShowModal);
  };

  const showModal = (url) => {
    setLargeImage(url);
    toggleModal();
  }

    return (
      <div className={css.ImageFinder}>
        <Searchbar onSubmit={handleSubmit} />
        <ImageGallery images={images} largeImage={largeImage} showModal={showModal} />
        {showLoadMore && <Button loadMore={handleLoadMore} />}
        {isEmpty  && <h1>Sorry, we didn't find any images... Try again!</h1>}
        {isLoading && <Loader />}
        {isShowModal && <Modal onClose={showModal} largeImage={largeImage} />}
      </div> 
    );
  }
  

export default App;