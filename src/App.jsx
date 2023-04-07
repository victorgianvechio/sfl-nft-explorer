import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Filter } from "./components/Filter";

import styles from './App.module.css';

import { boosters, BASE_URL } from './utils/collection';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.filterContainer}>
        <Filter />
      </div>


      <div className={styles.cardContainer}>
        <Card boosters={boosters} base_url={BASE_URL} />
      </div>

    </div>
  )
}

export default App
