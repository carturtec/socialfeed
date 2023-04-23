//jsx - javascript+XML
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
     <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post 
       author="Lorem Ipsum is simply"
       content=" dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
     />
     <Post 
       author=" Lorem Ipsum is not simply random"
       content="dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
     />         
      </main>
     </div>
    </div>
  )
}

 
