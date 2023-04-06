import styles from './CardCalendar.module.css';

import nftImg from '../../assets/calendar.png'
import typeImg from '../../assets/crops2.png'
import boostImg from '../../assets/boost2.png'
import cooldownImg from '../../assets/cooldown3.png'
import specialImg from '../../assets/special.png'

export function CardCalendar(props) {
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
        <span className={styles.title}>Solar Calendar</span>
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
          {/* <img src={boostImg} alt="type img" data-tooltip-buff="+0.25 apple"/>   */}
          <img src={cooldownImg} alt="type img" data-tooltip-buff="+0.25 apple"/>  
          {/* <img src={specialImg} alt="type img" data-tooltip-buff="+0.25 apple"/>   */}
      </div>
    </div>
  );
}