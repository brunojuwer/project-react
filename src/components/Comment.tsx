import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ExclusionModal } from "./ExclusionModal";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps){

  const [likeCount, setLikeCount] = useState(0);
  const [isExclusionModalOpen, setIsExclusionModalOpen] = useState(false);


  function handleDeleteComment(){
    onDeleteComment(content);
    handleCloseModal()
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  function handleOpenModal() {
    setIsExclusionModalOpen(true)
  }

  function handleCloseModal() {
    setIsExclusionModalOpen(false)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/brunojuwer.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bruno Juwer</strong>
              <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleOpenModal} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>
           {content}
          </p>
        </div>

        <ExclusionModal 
          isModalOpen={isExclusionModalOpen} 
          onRequestClose={handleCloseModal}
          onRequestDeleteComment={handleDeleteComment}
        />


        <footer>
          <button 
            onClick={handleLikeComment}
          >
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>


    </div>
  )
}