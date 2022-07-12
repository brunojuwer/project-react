import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/brunojuwer.png"/>
          <div className={styles.authorInfo}>
            <strong>Bruno Juwer</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="" target="_blank">jane.design/doctorcare</a></p>
        <p> 
          <a href="" target="_blank" >#novoprojeto</a>{' '}
          <a href="" target="_blank">#nlw</a>{' '}
          <a href="" target="_blank">#rocketseat</a> 
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentario'
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}