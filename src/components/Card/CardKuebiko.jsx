import styles from './CardKuebiko.module.css';

import nftImg from '../../assets/kuebiko.png'
import typeImg from '../../assets/crops2.png'
import boostImg from '../../assets/boost.png'
import cooldownImg from '../../assets/cooldown.png'
import specialImg from '../../assets/special2.png'

export function CardKuebiko(props) {
  return (
    <div className={styles.card}>

      <div className={styles.header}>
        <div className={styles.headerDescription}>          
          <span>crops</span> 
        </div>

        <div className={styles.headerImg}> 
          <img src={typeImg} alt="nft image" />    
        </div>
      </div>

      <div className={styles.titleContainer}>
        <span className={styles.title}>Kuebiko</span>
      </div>

      <div className={styles.imgContainer}>
        <img src={nftImg} alt="nft image" />        
      </div>

      {/* <div className={styles.typeContainer}>
        <div className={styles.type} data-tooltip="wood">
          <img src={typeImg} alt="type img" />    
        </div>      
      </div> */}

      <div className={styles.buffsContainer}>
          <img src={boostImg} alt="type img" data-tooltip-buff="+0.25 apple"/>  
          <img src={cooldownImg} alt="type img" data-tooltip-buff="+0.25 apple"/>  
          <img src={specialImg} alt="type img" data-tooltip-buff="+0.25 apple"/>  
      </div>
    </div>
  );
}