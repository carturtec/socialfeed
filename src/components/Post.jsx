import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
     <header>
      <div className={styles.author}>
      <Avatar hasBorder src="./src/assets/neuber.png" />
      <div className={styles.authorInfo}>
        <strong>Neuber Rocha</strong>
        <span>Eng. Civil</span>
        </div>
       </div>

       <time title="22 de Abril ás 03:12h" dateTime="2023-04-11 03-13-38"> Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>the readable content of a page when looking at its layout. The point </p>
        <p>the readable content of a page when looking at its layout. The point </p>
        <p><a href="#">using Lorem Ipsum is that it has a more-or-less normal distribution </a></p>
        <p> 
        <a href=""> #using </a> {' '}
        <a href=""> #LoremIpsum </a>{' '}
        <a href=""> #distribution </a>
         </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea 
           placeholder='Deixe seu comentário'
        />
        <footer>
        <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}