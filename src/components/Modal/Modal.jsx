import { Component } from 'react';
import css from './Modal.module.css'

class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeydown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

    handleBackdrop = e => {
        if (e.target === e.currentTarget) {
          this.props.onClose();
        }
      };
    render() {
        const { largeImage} = this.props.largeImage;
        return (
            <div className={css.Overlay} onClick={this.handleBackdrop}>
            <img
                src={largeImage}
                alt=""
                className={css.Modal}
            />
        </div>
        )
            
        
    }
}

export default Modal;