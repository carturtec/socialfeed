import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="./src/assets/neuber.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Capirôneuber Rocha</strong>
              <time title="22 de Abril ás 03:12h" dateTime="2023-04-11 03-13-38"> Acerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom neubão, para bens</p>
        </div>

        <footer>
         <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
         </button>
        </footer>
       </div>
    </div>
  );
}