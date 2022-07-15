import styles from './ExclusionModal.module.css';
import Modal from 'react-modal';

interface ModalProps {
  isModalOpen: boolean;
  onRequestClose: () => void;
  onRequestDeleteComment: () => void;
}

export function ExclusionModal({isModalOpen, onRequestClose, onRequestDeleteComment}: ModalProps) {


  return (
    <Modal
      isOpen={isModalOpen}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >


    <div className={styles.container}>
      <header>
        <p>Excluir comentário</p>
      </header>
        <p className={styles.question}>
          Você tem certeza que gostaria de excluir este comentário?
        </p>

      <footer>

        <button 
          type='button'
          onClick={onRequestClose}
          className={styles.cancel}
        >
          Cancelar
        </button>
        <button
          type='button'
          onClick={onRequestDeleteComment}
          className={styles.modalDeleteComment}
        >
          Sim, excluir
        </button>
      </footer>
    </div>
  </Modal>
    
  )
}