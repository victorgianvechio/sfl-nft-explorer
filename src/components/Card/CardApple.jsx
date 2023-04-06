import styles from './CardApple.module.css';

import nftImg from '../../assets/nft/ladybug.png'
import typeImg from '../../assets/resource/apple.png'
import boostImg from '../../assets/buff/boost.png'
import specialImg from '../../assets/buff/special2.png'

// COLLECTION
import { nft } from '../../collectibles';

export function CardApple(props) {

  console.log(nft);

  return (
    <div className={`${styles.card} ${styles.bgApple}`}>

      <div className={styles.header}>

        <div className={styles.headerDescription}>          
          <span>apple</span> 
        </div>

        <div className={styles.headerImg}>
          <img src={typeImg} alt="nft image" />    
          {/* <img src={img} alt="nft image" />     */}
        </div>

      </div>

      <div className={styles.titleContainer}>
        <span className={styles.title}>Ladybug</span>
      </div>

      <div className={styles .imgContainer}>
        <img src={nftImg} alt="nft image" />        
      </div>

      {/* <div className={styles.typeContainer}>
        <div className={styles.type} data-tooltip="apple">
          <img src={typeImg} alt="nft image" />    
        </div>      
      </div> */}

      <div className={styles.buffsContainer}>
          <img src={boostImg} alt="type img" data-toggle="tooltip" data-placement="bottom"
            title="+0.25 apple" />           
          <img src={specialImg} alt="type img" data-toggle="tooltip" data-placement="bottom"
            title="+1 food every 24 hours"/>  
      </div>
      
    </div>
  );
}