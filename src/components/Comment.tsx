import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

interface Props {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment(props: Props) {

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  function handleDeleteComment() {
    props.onDeleteComment(props.content);
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/fabiosalves.png' alt='' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fabio Alves</strong>
              <time title='07 de Abril às 13:59' dateTime='2023-04-07 16:59:00'>Há cerca de 1h</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
            

          </header>

          <p>
            {props.content}
          </p>

        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>

      </div>



    </div>
  )
}