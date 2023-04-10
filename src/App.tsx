// JSX = JavaScript + XML
//Componentes: Functions que retornam HTML
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

// author: { avatar_url:"", name: "", role:""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/fabiosalves.png',
      nome: 'Fabio Alves',
      role: 'Lead Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'} ,      
    ],
    publishedAt: new Date('2023-04-07 19:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/lauragrassig.png',
      nome: 'Laura Grassi',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Oioi'},
      { type: 'paragraph', content: 'segue meu portfólio'},
      { type: 'link', content: 'https://github.com/lauragrassig'} ,      
    ],
    publishedAt: new Date('2023-04-06 19:12:00'),
  },  
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>        
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key = {post.id}
                author = { post.author }
                content = { post.content }
                publishedAt = { post.publishedAt }
              />
            ) 
          })}
        </main>
      </div>
    </div>
  )
}



