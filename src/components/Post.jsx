import { format, formatDistanceToNow } from 'date-fns'
import  ptBR  from 'date-fns/locale/pt-BR'
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';


export function Post({id, author, publishedAt, content}) {

  const [comments, setComments] = useState(['Post muito bacana, hein!'])
  const [newComment, setNewComment] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale:ptBR,
  })

  const publishedRelativeToNow = formatDistanceToNow(publishedAt, {
    locale:ptBR,
    addSuffix: true,
  })

  const isNewCommentEmpty = newComment.length === 0;

  function hanldeCreateNewComment(e) {
    e.preventDefault()

    const newComment = e.target.commentArea.value
    setComments([...comments, newComment])
    setNewComment('')

  }

  function handleNewCommentChange(e) {
    e.target.setCustomValidity('');
    setNewComment(e.target.value); 
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    
    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(e) {
    e.target.setCustomValidity('Esse campo é obrigatório!')
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedRelativeToNow}
        </time>
      </header>

       <div className={styles.content}>
        {content.map(line =>{
          if(line.type === 'paragraph'){
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link'){
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}        
       </div>

      <form onSubmit={hanldeCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
          name='commentArea'
          value={newComment}
          required
          onInvalid={handleNewCommentInvalid}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button 
            type="submit" 
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <dir className={styles.commentList}>
        {comments.map(comment => {
          return (<Comment 
                    key={comment} 
                    content={comment}
                    onDeleteComment={deleteComment}  
                  />)
              })
        }
      </dir>
    </article>
  )
}