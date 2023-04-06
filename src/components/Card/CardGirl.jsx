import styles from './CardGirl.module.css';

import nftImg from '../../assets/cabbage_girl.png'
import typeImg from '../../assets/cabbage_purple.png'
import boostImg from '../../assets/boost2.png'
import cooldownImg from '../../assets/cooldown.png'
import warningImg from '../../assets/warning.png'
import specialImg from '../../assets/special.png'
import comboImg from '../../assets/combo.png'

export function CardGirl(props) {
  return (
    <div className={styles.card}>

      <div className={styles.header}>

      <div className={styles.headerDescription}>          
        <span>cabbage</span> 
      </div>

      <div className={styles.headerImg}>
        <img src={typeImg} alt="nft image" />    
      </div>

      </div>

      <div className={styles.titleContainer}>
        <span className={styles.title}>Cabbage Girl</span>
      </div>

      <div className={styles .imgContainer}>
        <img src={nftImg} alt="nft image" />        
      </div>

      {/* <div className={styles.typeContainer}>
        <div className={styles.type} data-tooltip="cabbage">
          <img src={typeImg} alt="nft image" />    
        </div>      
      </div> */}

      {/* <div className={styles.buffsContainer}>
        <div className={styles.buffs}>
          <img src={boostImg} alt="type img" data-tooltip="+0.1 wood"/>    
          <img src={cooldownImg} alt="type img" />    
          <img src={specialImg} alt="type img" />    
          <img src={comboImg} alt="type img" />    
        </div>      
      </div> */}
       <div className={styles.buffsContainer}>
          <img src={cooldownImg} alt="type img" data-toggle="tooltip" data-placement="bottom"
            title="-50% reduce time for cabbage"/>  
          <img src={comboImg} alt="type img" data-toggle="tooltip" data-placement="bottom"
            title="+0.15 cabbage with Cabbage Boy"/>  
      </div>
    </div>
  );
}