import { useEffect, useState } from 'react';

import styles from './Card.module.css';

// NFT IMAGES
import CABBAGE_BOY from '../assets/nft/cabbage_boy.png';
import CABBAGE_GIRL from '../assets/nft/cabbage_girl.png';
import CALENDAR from '../assets/nft/calendar.png';
import KARKINOS from '../assets/nft/karkinos.png';
import KUEBIKO from '../assets/nft/kuebiko.png';
import LADYBUG from '../assets/nft/ladybug.png';
import MANEKI_NEKO from '../assets/nft/maneki_neko.png';
import NANCY from '../assets/nft/nancy.png';
import NUGGET from '../assets/nft/nugget.png';
import OBSERVATORY from '../assets/nft/observatory.png';
import SCARECROW from '../assets/nft/scarecrow.png';
import TIKI_TOTEM from '../assets/nft/tikitotem.png';
import SQUIRREL_MONKEY from '../assets/nft/squirrel_monkey.png';
import BLACK_BEARRY from '../assets/nft/black_bearry.png';
import IRON_IDOL from '../assets/nft/iron_idol.png';
import IMMORTAL_PEAR from '../assets/nft/immortal_pear.png';
import PABLO from '../assets/nft/pablo.png';

// RESOURCES IMAGES
import CABBAGE_IMG from '../assets/resource/cabbage.png';
import APPLE_IMG from '../assets/resource/apple.png';
import BLUEBERRY_IMG from '../assets/resource/blueberry.png';
import CARROT_IMG from '../assets/resource/carrot.png';
import CAULIFLOWER_IMG from '../assets/resource/cauliflower.png';
import CROPS_IMG from '../assets/resource/crops.png';
import FRUITS_IMG from '../assets/resource/fruits.png';
import EGG_IMG from '../assets/resource/egg.png';
import GOLD_IMG from '../assets/resource/gold.png';
import IRON_IMG from '../assets/resource/iron.png';
import STONE_IMG from '../assets/resource/stone.png';
import XP_IMG from '../assets/resource/xp.png';
import WOOD_IMG from '../assets/resource/wood.png';
import ORANGE_IMG from '../assets/resource/orange.png';
import POTATO_IMG from '../assets/resource/potato.png';
import PUMPKIN_IMG from '../assets/resource/pumpkin.png';
import OTHER_IMG from '../assets/resource/other.png';
import PARSNIP_IMG from '../assets/resource/parsnip.png';

// BUFFS IMAGES
import BOOST_IMG from '../assets/buff/boost.png';
import COOLDOWN_IMG from '../assets/buff/cooldown3.png';
import SPECIAL_IMG from '../assets/buff/special.png';
import WARNING_IMG from '../assets/buff/warning.png';
import COMBO_IMG from '../assets/buff/combo.png';
import CHICKEN_IMG from '../assets/buff/chicken.png';

// COLLECTION
import { nft } from '../collectibles';

export function Card(props) {

  const [nftList, setNftList] = useState(nft);

  // useEffect(() => {
   
  // }, []);

  function getResourceImg(resourceName) {
    let img = '';
    switch (resourceName) {
      case 'cabbage':
        img = CABBAGE_IMG;
        break;
      case 'apple':
        img = APPLE_IMG;
        break;
      case 'crops':
        img = CROPS_IMG;
        break;
      case 'gold':
        img = GOLD_IMG;
        break;
      case 'wood':
        img = WOOD_IMG;
        break;
      case 'xp':
        img = XP_IMG;
        break;
      case 'crops':
        img = WOOD_IMG;
        break;
      case 'pumpkin':
        img = PUMPKIN_IMG;
        break;
      case 'potato':
        img = POTATO_IMG;
        break;
      case 'orange':
        img = ORANGE_IMG;
        break;
      case 'stone':
        img = STONE_IMG;
        break;
      case 'iron':
        img = IRON_IMG;
        break;
      case 'egg':
        img = EGG_IMG;
        break;
      case 'cauliflower':
        img = CAULIFLOWER_IMG;
        break;
      case 'carrot':
        img = CARROT_IMG;
        break;
      case 'blueberry':
        img = BLUEBERRY_IMG;
        break;
      case 'fruits':
        img = FRUITS_IMG;
        break;
      case 'other':
        img = OTHER_IMG;
        break;
      case 'parsnip':
        img = PARSNIP_IMG;
        break;
    }

    return img;
  }

  function getNftImg(nftName) {
    let img = '';
    switch (nftName) {
      case 'cabbage_boy':
        img = CABBAGE_BOY;
        break;
      case 'cabbage_girl':
        img = CABBAGE_GIRL;
        break;
      case 'lunar_calendar':
        img = CALENDAR;
        break;
      case 'karkinos':
        img = KARKINOS;
        break;
      case 'kuebiko':
        img = KUEBIKO;
        break;
      case 'ladybug':
        img = LADYBUG;
        break;
      case 'maneki_neko':
        img = MANEKI_NEKO;
        break;
      case 'nancy':
        img = NANCY;
        break;
      case 'nugget':
        img = NUGGET;
        break;
      case 'observatory':
        img = OBSERVATORY;
        break;
      case 'scarecrow':
        img = SCARECROW;
        break;
      case 'tiki_totem':
        img = TIKI_TOTEM;
        break;
      case 'squirrel_monkey':
        img = SQUIRREL_MONKEY;
        break;
      case 'black_bearry':
        img = BLACK_BEARRY;
        break;
      case 'immortal_pear':
        img = IMMORTAL_PEAR;
        break;
      case 'iron_idol':
        img = IRON_IDOL;
        break;
      case 'pablo':
        img = PABLO;
        break;
    }

    return img;
  }

  function getBuffImg(buffName) {
    let img = '';
    switch (buffName) {
      case 'boost':
        img = BOOST_IMG;
        break;
      case 'cooldown':
        img = COOLDOWN_IMG;
        break;
      case 'special':
        img = SPECIAL_IMG;
        break;
      case 'alert':
        img = WARNING_IMG;
        break;
      case 'combo':
        img = COMBO_IMG;
        break;
      case 'mutant_chicken':
        img = CHICKEN_IMG;
        break;
    }
    return img;
  }

  function getBackgroundColor(resourceName) {
    let style = `${styles.card} `;
    switch (resourceName) {
      case 'cabbage':
        style += `${styles.bgCabbage}`;
        break;
      case 'apple':
        style += `${styles.bgApple}`;
        break;
      case 'crops':
        style += `${styles.bgCrops}`;
        break;
      case 'fruits':
        style += `${styles.bgFruits}`;
        break;
      case 'gold':
        style += `${styles.bgGold}`;
        break;
      case 'stone':
        style += `${styles.bgStone}`;
        break;
      case 'iron':
        style += `${styles.bgIron}`;
        break;
      case 'wood':
        style += `${styles.bgWood}`;
        break;
      case 'xp':
        style += `${styles.bgXp}`;
        break;
      case 'blueberry':
        style += `${styles.bgBlueberry}`;
        break;
      case 'orange':
        style += `${styles.bgOrange}`;
        break;
      case 'cauliflower':
        style += `${styles.bgCauliflower}`;
        break;
      case 'egg':
        style += `${styles.bgEgg}`;
        break;
      case 'pumpkin':
        style += `${styles.bgPumpkin}`;
        break;
      case 'carrot':
        style += `${styles.bgCarrot}`;
        break;
      case 'parsnip':
        style += `${styles.bgParsnip}`;
        break;
      case 'potato':
        style += `${styles.bgPotato}`;
        break;
      case 'other':
        style += `${styles.bgOther}`;
        break;
    }

    return style;
  }

  return (
    <>
      {nftList.map(item => (
        // Card
        <div key={item.slug} className={getBackgroundColor(item.buff)}>

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

        </div>
      ))}
    </>
  )
}