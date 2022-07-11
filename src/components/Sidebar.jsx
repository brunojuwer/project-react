import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />

      <div className={styles.profile}> 
        <img 
          className={styles.avatar}
          src="https://github.com/brunojuwer.png" 
        />
        <strong>Bruno Juwer</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}