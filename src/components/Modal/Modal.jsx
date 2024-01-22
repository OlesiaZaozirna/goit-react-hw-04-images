import { useEffect  } from 'react';
import css from './Modal.module.css'

const Modal = ({ largeImage, onClose }) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);
  
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div className={css.Overlay} onClick={handleBackdrop}>
      <img
        src={largeImage}
        alt=""
        className={css.Modal}
      />
    </div>
  );
}
        
   
export default Modal;