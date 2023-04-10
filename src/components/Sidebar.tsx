import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://www.indiewire.com/wp-content/uploads/2016/07/es_tf2.jpg"
      />
      <div className={styles.profile}>
      <Avatar src="https://github.com/fabiosalves.png"/>

        <strong>Fabio Alves</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
} 