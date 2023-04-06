import { Header } from "./components/Header";
import { Card } from "./components/Card";

import styles from './components/MainContainer.module.css';

function App() {

  return (
    <div>
      <Header />
      <div className={styles.mainContainer}>
        <Card />
      </div>
    </div>
  )
}

export default App
