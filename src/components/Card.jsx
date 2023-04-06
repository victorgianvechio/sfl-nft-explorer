import { useEffect, useState } from 'react';

import { getBackgroundColor, getBuffImg, getNftImg, getResourceImg } from '../utils/getImages'

import styles from './Card.module.css';
import { boosters, BASE_URL } from '../utils/collection';

export function Card(props) {

  const [nftList, setNftList] = useState(boosters);

  return (
    <>
      {nftList.map(item => (
        // Card
        <div key={item.slug} className={getBackgroundColor(item.buff, styles)}>
          <a className="redirect" href={`${BASE_URL}/${item.url}`} target="_blank">

            {/* Header - Type/Icon */}
            <div className={styles.header}>
              <div className={styles.headerDescription}>          
                <span>{item.buff}</span> 
              </div>
              <div className={styles.headerImg}>
                <img src={getResourceImg(item.buff)} />    
              </div>
            </div>

            {/* NFT Name */}
            <div className={styles.titleContainer}>
              <span className={styles.title}>{item.name}</span>
            </div>

            {/* NFT Image */}
            <div className={styles.imgContainer}>
              <img src={getNftImg(item.slug)} />        
            </div>
          
            {/* Buffs */}
            <div className={styles.buffsContainer}>
              {item.buffsType.map((buff, index) => (
                <img key={index} src={getBuffImg(buff.type)} data-toggle="tooltip" data-placement="bottom"
                title={buff.description}/>
              ))}            
            </div>

           </a>
        </div>
      ))}
    </>
  )
}