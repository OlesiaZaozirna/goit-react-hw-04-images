import { Component } from "react"
import Searchbar from "./Searchbar/Searchbar"
import { getImages } from '../api/api'
import ImageGallery from './ImageGallery/ImageGallery';
import Button from "./Button/Button";
import Loader from './Loader/Loader.jsx'
import Modal from "./Modal/Modal";
import css from './App.module.css'




 class App extends Component{
  state = {
    query: '',
    page: 1,
    images: [],
    showLoadMore: false,
    isEmpty: false,
    isLoading: false,
    isShowModal: false,
    largeImage: '',
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({isLoading: true})
      getImages(query, page)
        .then(({ hits, totalHits }) => {
          if (!hits.length) {
            this.setState({ isEmpty: true })
            return
          }
          this.setState(({ images }) => ({
            images: [...images, ...hits],
            showLoadMore: page < Math.ceil(totalHits / 15),
            largeImage: hits.largeImageUrl,
          }))
        }).finally(() => this.setState({isLoading: false}));
    } 
  }
  

  handleSubmit = (query) => {
    if (this.state.query !== query) {
      this.setState({ query, images: [], page: 1 });
    }
    
  }

  handleLoadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  toggleModal = () => {
    this.setState(({ isShowModal }) => ({
      isShowModal: !isShowModal,
    }))
  }

  showModal = (url) => {
    this.setState({ largeImage: url })
    
    this.toggleModal();
  }


  render() {
    const { images, showLoadMore, isEmpty, isLoading, largeImage, isShowModal } = this.state;
    return (
      <div className={css.ImageFinder}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} largeImage={largeImage} showModal={this.showModal} />
        {showLoadMore && <Button loadMore={this.handleLoadMore} />}
        {isEmpty  && <h1>Sorry, we didn't find any images... Try again!</h1>}
        {isLoading && <Loader />}
        {isShowModal && <Modal onClose={this.showModal} largeImage={largeImage} />}
      </div> 
    );
  }
  
};
export default App;