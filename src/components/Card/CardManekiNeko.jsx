import styles from './CardManekiNeko.module.css';

import nftImg from '../../assets/maneki_neko.png'
import typeImg from '../../assets/level-up2.png'
// import typeImg from '../../assets/gold.png'
import boostImg from '../../assets/boost.png'
import cooldownImg from '../../assets/cooldown.png'
import specialImg from '../../assets/special.png'

export function CardManekiNeko(props) {
  return (
    <div className={styles.card}>

      <div className={styles.header}>
        <div className={styles.headerDescription}>          
          <span>xp</span> 
        </div>

        <div className={styles.headerImg}> 
          <img src={typeImg} alt="nft image" />    
        </div>
      </div>

      <div className={styles.titleContainer}>
        <span className={styles.title}>Maneki Neko</span>
      </div>

      <div className={styles.imgContainer}>
        <img src={nftImg} alt="nft image" />        
      </div>

      {/* <div className={styles.typeContainer}>
        <div className={styles.type} data-tooltip="wood">
          <img src={typeImg} alt="type img" />    
        </div>      
      </div> */}

      {/* <div className={styles.buffsContainer}>
        <div className={styles.buffs}>
          <img src={boostImg} alt="type img" data-tooltip="+0.1 wood"/>    
          <img src={cooldownImg} alt="type img" />    
          <img src={specialImg} alt="type img" />    
        </div>      
      </div> */}
       <div className={styles.buffsContainer}>
          <img src={specialImg} alt="type img" data-tooltip-buff="+0.25 apple"/>  
          <img src={cooldownImg} alt="type img" data-tooltip-buff="+0.25 apple"/>  
      </div>
    </div>
  );
}