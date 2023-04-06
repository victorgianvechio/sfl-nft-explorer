// NFT IMAGES
import CABBAGE_BOY from "../assets/nft/cabbage_boy.png";
import CABBAGE_GIRL from "../assets/nft/cabbage_girl.png";
import CALENDAR from "../assets/nft/calendar.png";
import KARKINOS from "../assets/nft/karkinos.png";
import KUEBIKO from "../assets/nft/kuebiko.png";
import LADYBUG from "../assets/nft/ladybug.png";
import MANEKI_NEKO from "../assets/nft/maneki_neko.png";
import NANCY from "../assets/nft/nancy.png";
import NUGGET from "../assets/nft/nugget.png";
import OBSERVATORY from "../assets/nft/observatory.png";
import SCARECROW from "../assets/nft/scarecrow.png";
import TIKI_TOTEM from "../assets/nft/tikitotem.png";
import SQUIRREL_MONKEY from "../assets/nft/squirrel_monkey.png";
import BLACK_BEARRY from "../assets/nft/black_bearry.png";
import IRON_IDOL from "../assets/nft/iron_idol.png";
import IMMORTAL_PEAR from "../assets/nft/immortal_pear.png";
import PABLO from "../assets/nft/pablo.png";
import SPEED_CHICKEN from "../assets/nft/speed_chicken.png";
import FAT_CHICKEN from "../assets/nft/fat_chicken.png";
import RICH_CHICKEN from "../assets/nft/rich_chicken.png";
import ROOSTER from "../assets/nft/rooster.png";
import UNDEAD_ROOSTER from "../assets/nft/undead_rooster.png";
import CHICKEN_COOP from "../assets/nft/chicken_coop.png";
import GOLD_EGG from "../assets/nft/gold_egg.png";
import DAVY_JONES from "../assets/nft/davy_jones.png";
import TREASURE_MAP from "../assets/nft/treasure_map.png";
import EASTER_BUNNY from "../assets/nft/easter_bunny.png";
import CHRISTMAS_TREE from "../assets/nft/christmas_tree.png";

import APPRENTICE_BEAVER from "../assets/nft/apprentice_beaver.png";
import CARROT_SWORD from "../assets/nft/carrot_sword.png";
import FOREMAN_BEAVER from "../assets/nft/foreman_beaver.png";
import GOLDEN_CAULIFLOWER from "../assets/nft/golden_cauliflower.png";
import MYSTERIOUS_PARSNIP from "../assets/nft/mysterious_parsnip.png";
import PEELED_POTATO from "../assets/nft/peeled_potato.png";
import ROCK_GOLEM from "../assets/nft/rock_golem.png";
import ROCKY_MOLE from "../assets/nft/rocky_mole.png";
import TUNNEL_MOLE from "../assets/nft/tunnel_mole.png";
import VICTORIA_SISTERS from "../assets/nft/victoria_sisters.png";
import WENDY from "../assets/nft/wendy.png";
import WOODY_BEAVER from "../assets/nft/woody_beaver.png";

// RESOURCES IMAGES
import CABBAGE_IMG from "../assets/resource/cabbage.png";
import APPLE_IMG from "../assets/resource/apple.png";
import BLUEBERRY_IMG from "../assets/resource/blueberry.png";
import CARROT_IMG from "../assets/resource/carrot.png";
import CAULIFLOWER_IMG from "../assets/resource/cauliflower.png";
import CROPS_IMG from "../assets/resource/crops.png";
import FRUITS_IMG from "../assets/resource/fruits.png";
import EGG_IMG from "../assets/resource/egg.png";
import GOLD_IMG from "../assets/resource/gold.png";
import IRON_IMG from "../assets/resource/iron.png";
import STONE_IMG from "../assets/resource/stone.png";
import XP_IMG from "../assets/resource/xp.png";
import WOOD_IMG from "../assets/resource/wood.png";
import ORANGE_IMG from "../assets/resource/orange.png";
import POTATO_IMG from "../assets/resource/potato.png";
import PUMPKIN_IMG from "../assets/resource/pumpkin.png";
import OTHER_IMG from "../assets/resource/other.png";
import PARSNIP_IMG from "../assets/resource/parsnip.png";

// BUFFS IMAGES
import BOOST_IMG from "../assets/buff/boost.png";
import COOLDOWN_IMG from "../assets/buff/cooldown3.png";
import SPECIAL_IMG from "../assets/buff/special.png";
import WARNING_IMG from "../assets/buff/warning.png";
import COMBO_IMG from "../assets/buff/combo.png";
import CHICKEN_IMG from "../assets/buff/chicken.png";

export function getResourceImg(resourceName) {
  let img = "";
  switch (resourceName) {
    case "cabbage":
      img = CABBAGE_IMG;
      break;
    case "apple":
      img = APPLE_IMG;
      break;
    case "crops":
      img = CROPS_IMG;
      break;
    case "gold":
      img = GOLD_IMG;
      break;
    case "wood":
      img = WOOD_IMG;
      break;
    case "xp":
      img = XP_IMG;
      break;
    case "pumpkin":
      img = PUMPKIN_IMG;
      break;
    case "potato":
      img = POTATO_IMG;
      break;
    case "orange":
      img = ORANGE_IMG;
      break;
    case "stone":
      img = STONE_IMG;
      break;
    case "iron":
      img = IRON_IMG;
      break;
    case "egg":
      img = EGG_IMG;
      break;
    case "cauliflower":
      img = CAULIFLOWER_IMG;
      break;
    case "carrot":
      img = CARROT_IMG;
      break;
    case "blueberry":
      img = BLUEBERRY_IMG;
      break;
    case "fruits":
      img = FRUITS_IMG;
      break;
    case "other":
      img = OTHER_IMG;
      break;
    case "parsnip":
      img = PARSNIP_IMG;
      break;
  }

  return img;
}

export function getNftImg(nftName) {
  let img = "";
  switch (nftName) {
    case "cabbage_boy":
      img = CABBAGE_BOY;
      break;
    case "cabbage_girl":
      img = CABBAGE_GIRL;
      break;
    case "lunar_calendar":
      img = CALENDAR;
      break;
    case "karkinos":
      img = KARKINOS;
      break;
    case "kuebiko":
      img = KUEBIKO;
      break;
    case "ladybug":
      img = LADYBUG;
      break;
    case "maneki_neko":
      img = MANEKI_NEKO;
      break;
    case "nancy":
      img = NANCY;
      break;
    case "nugget":
      img = NUGGET;
      break;
    case "observatory":
      img = OBSERVATORY;
      break;
    case "scarecrow":
      img = SCARECROW;
      break;
    case "tiki_totem":
      img = TIKI_TOTEM;
      break;
    case "squirrel_monkey":
      img = SQUIRREL_MONKEY;
      break;
    case "black_bearry":
      img = BLACK_BEARRY;
      break;
    case "immortal_pear":
      img = IMMORTAL_PEAR;
      break;
    case "iron_idol":
      img = IRON_IDOL;
      break;
    case "pablo":
      img = PABLO;
      break;
    case "speed_chicken":
      img = SPEED_CHICKEN;
      break;
    case "rich_chicken":
      img = RICH_CHICKEN;
      break;
    case "fat_chicken":
      img = FAT_CHICKEN;
      break;
    case "rooster":
      img = ROOSTER;
      break;
    case "undead_rooster":
      img = UNDEAD_ROOSTER;
      break;
    case "gold_egg":
      img = GOLD_EGG;
      break;
    case "chicken_coop":
      img = CHICKEN_COOP;
      break;
    case "easter_bunny":
      img = EASTER_BUNNY;
      break;
    case "christmas_tree":
      img = CHRISTMAS_TREE;
      break;
    case "davy_jones":
      img = DAVY_JONES;
      break;
    case "treasure_map":
      img = TREASURE_MAP;
      break;
    case "apprentice_beaver":
      img = APPRENTICE_BEAVER;
      break;
    case "carrot_sword":
      img = CARROT_SWORD;
      break;
    case "foreman_beaver":
      img = FOREMAN_BEAVER;
      break;
    case "golden_cauliflower":
      img = GOLDEN_CAULIFLOWER;
      break;
    case "mysterious_parsnip":
      img = MYSTERIOUS_PARSNIP;
      break;
    case "peeled_potato":
      img = PEELED_POTATO;
      break;
    case "rock_golem":
      img = ROCK_GOLEM;
      break;
    case "rocky_mole":
      img = ROCKY_MOLE;
      break;
    case "tunnel_mole":
      img = TUNNEL_MOLE;
      break;
    case "victoria_sisters":
      img = VICTORIA_SISTERS;
      break;
    case "wendy":
      img = WENDY;
      break;
    case "woody_beaver":
      img = WOODY_BEAVER;
      break;
  }

  return img;
}

export function getBuffImg(buffName) {
  let img = "";
  switch (buffName) {
    case "boost":
      img = BOOST_IMG;
      break;
    case "cooldown":
      img = COOLDOWN_IMG;
      break;
    case "special":
      img = SPECIAL_IMG;
      break;
    case "alert":
      img = WARNING_IMG;
      break;
    case "combo":
      img = COMBO_IMG;
      break;
    case "mutant_chicken":
      img = CHICKEN_IMG;
      break;
  }
  return img;
}

export function getBackgroundColor(resourceName, styles) {
  let style = `${styles.card} `;
  switch (resourceName) {
    case "cabbage":
      style += `${styles.bgCabbage}`;
      break;
    case "apple":
      style += `${styles.bgApple}`;
      break;
    case "crops":
      style += `${styles.bgCrops}`;
      break;
    case "fruits":
      style += `${styles.bgFruits}`;
      break;
    case "gold":
      style += `${styles.bgGold}`;
      break;
    case "stone":
      style += `${styles.bgStone}`;
      break;
    case "iron":
      style += `${styles.bgIron}`;
      break;
    case "wood":
      style += `${styles.bgWood}`;
      break;
    case "xp":
      style += `${styles.bgXp}`;
      break;
    case "blueberry":
      style += `${styles.bgBlueberry}`;
      break;
    case "orange":
      style += `${styles.bgOrange}`;
      break;
    case "cauliflower":
      style += `${styles.bgCauliflower}`;
      break;
    case "egg":
      style += `${styles.bgEgg}`;
      break;
    case "pumpkin":
      style += `${styles.bgPumpkin}`;
      break;
    case "carrot":
      style += `${styles.bgCarrot}`;
      break;
    case "parsnip":
      style += `${styles.bgParsnip}`;
      break;
    case "potato":
      style += `${styles.bgPotato}`;
      break;
    case "other":
      style += `${styles.bgOther}`;
      break;
  }

  return style;
}
