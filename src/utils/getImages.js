export function getResourceImg(resourceName) {
  return new URL(`../assets/resource/${String(resourceName).toLowerCase()}.png`, import.meta.url)
}

export function getNftImg(nftName) {
  return new URL(`../assets/nft/${String(nftName).toLowerCase()}.png`, import.meta.url)
}

export function getBuffImg(buffName) {
  return new URL(`../assets/buff/${String(buffName).toLowerCase()}.png`, import.meta.url)
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
