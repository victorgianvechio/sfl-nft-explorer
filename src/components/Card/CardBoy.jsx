import styles from './CardBoy.module.css';

import nftImg from '../../assets/cabbage_boy.png'
import typeImg from '../../assets/cabbage_purple.png'
import boostImg from '../../assets/boost.png'
import warningImg from '../../assets/warning.png'
import specialImg from '../../assets/special.png'
import comboImg from '../../assets/combo.png'

export function CardBoy(props) {
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
        <span className={styles.title}>Cabbage Boy</span>
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
          <img src={boostImg} alt="type img" data-toggle="tooltip" data-placement="bottom"
            title="+0.25 cabbage"/>  
          <img src={comboImg} alt="type img" data-toggle="tooltip" data-placement="bottom"
            title="+0.15 cabbage with Cabbage Girl"/>  
          <img src={warningImg} alt="type img" data-toggle="tooltip" data-placement="bottom"
            title="does not stack with Karkinos"/>  
          
      </div>
    </div>
  );
}