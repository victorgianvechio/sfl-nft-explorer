export const BASE_URL =
  "https://opensea.io/assets/matic/0x22d5f9b75c524fec1d6619787e582644cd4d7422";

const category = {
  CROPS: "crops",
  RESOURCES: "resources",
  XP: "xp",
  FRUITS: "fruits",
  OTHER: "other",
  CHICKEN: "chicken",
};

const buff = {
  CABBAGE: "cabbage",
  CARROT: "carrot",
  POTATO: "potato",
  APPLE: "apple",
  PUMPKIN: "pumpkin",
  BLUEBERRY: "blueberry",
  ORANGE: "orange",
  PARSNIP: "parsnip",
  CAULIFLOWER: "cauliflower",
  CROP: "crops",
  FRUIT: "fruits",
  EGG: "egg",
  GOLD: "gold",
  IRON: "iron",
  STONE: "stone",
  WOOD: "wood",
  XP: "xp",
  OTHER: "other",
};

const buffType = {
  BOOST: "boost",
  COOLDOWN: "cooldown",
  SPECIAL: "special",
  COMBO: "combo",
  ALERT: "alert",
  MUTANT_CHICKEN: "mutant_chicken",
};

export const boosters = {
  crops: [
    {
      name: "Cabbage Boy",
      category: category.CROPS,
      buff: buff.CABBAGE,
      buffsType: [
        {
          type: buffType.BOOST,
          description: "+0.25 cabbage",
        },
        {
          type: buffType.COMBO,
          description: "+0.15 cabbage with Cabbage Girl",
        },
        {
          type: buffType.ALERT,
          description: "Karkinos has no effect with Cabbage Boy",
        },
      ],
      currentPrice: 0,
      offerPrice: 0,
      url: "434",
      urlImg:
        "https://i.seadn.io/gcs/files/02a0eacbf56270f822db210f8cdce4ad.png?auto=format&w=384",
      collection: "Sunflower Land Collectibles",
      isSelling: true,
    },
    {
      name: "Cabbage Girl",
      category: category.CROPS,
      buff: buff.CABBAGE,
      buffsType: [
        {
          type: buffType.COOLDOWN,
          description: "-50% cabbage production time",
        },
        {
          type: buffType.COMBO,
          description: "+0.15 cabbage with Cabbage Boy",
        },
      ],
      currentPrice: 0,
      offerPrice: 0,
      url: "435",
      urlImg:
        "https://i.seadn.io/gcs/files/7d3a80576797b264c0704e71629f3275.png?auto=format&w=384",
      collection: "Sunflower Land Collectibles",
      isSelling: true,
    },
    {
      name: "Karkinos",
      category: category.CROPS,
      buff: buff.CABBAGE,
      buffsType: [
        {
          type: buffType.BOOST,
          description: "+0.1 cabbage",
        },
        {
          type: buffType.ALERT,
          description: "Karkinos has no effect with Cabbage Boy",
        },
      ],
      currentPrice: 0,
      offerPrice: 0,
      url: "455",
      urlImg: "",
      collection: "Sunflower Land Collectibles",
      isSelling: true,
    },
    {
      name: "Lunar Calendar",
      category: category.CROPS,
      buff: buff.CROP,
      buffsType: [
        {
          type: buffType.COOLDOWN,
          description: "-10% crop production time",
        },
      ],
      currentPrice: 0,
      offerPrice: 0,
      url: "448",
      urlImg:
        "https://i.seadn.io/gcs/files/46c3891d1c0b7a64bbe295bea122a9c3.png?auto=format&w=384",
      collection: "Sunflower Land Collectibles",
      isSelling: true,
    },
    {
      name: "Nancy",
      category: category.CROPS,
      buff: buff.CROP,
      buffsType: [
        {
          type: buffType.COOLDOWN,
          description: "-15% crop production time",
        },
      ],
      currentPrice: 0,
      offerPrice: 0,
      url: "420",
      urlImg:
        "https://i.seadn.io/gcs/files/1f3bc72b9fef92024deadbce39cb44c2.png?auto=format&w=384",
      collection: "Sunflower Land Collectibles",
      isSelling: true,
    },
    {
      name: "Scarecrow",
      category: category.CROPS,
      buff: buff.CROP,
      buffsType: [
        {
          type: buffType.BOOST,
          description: "+20% crop",
        },
        {
          type: buffType.COOLDOWN,
          description: "-15% crop production time",
        },
      ],
      currentPrice: 0,
      offerPrice: 0,
      url: "404",
      urlImg:
        "https://i.seadn.io/gcs/files/c01d91c4cb22d12f54ca2b9cad011f3a.png?auto=format&w=384",
      collection: "Sunflower Land Collectibles",
      isSelling: true,
    },
    {
      name: "Kuebiko",
      category: category.CROPS,
      buff: buff.CROP,
      buffsType: [
        {
          type: buffType.BOOST,
          description: "+20% crop",
        },
        {
          type: buffType.COOLDOWN,
          description: "-15% crop production time",
        },
        {
          type: buffType.SPECIAL,
          description: "free seeds",
        },
      ],
      currentPrice: 0,
      offerPrice: 0,
      url: "421",
      urlImg:
        "https://i.seadn.io/gcs/files/09aa31be98562261634f0033d4314d02.gif?auto=format&w=384",
      collection: "Sunflower Land Collectibles",
      isSelling: true,
    },
  ],
  resources: [
    {
      name: "Tiki Totem",
      category: category.RESOURCES,
      buff: buff.WOOD,
      buffsType: [
        {
          type: buffType.BOOST,
          description: "+0.1 wood",
        },
      ],
      currentPrice: 0,
      offerPrice: 0,
      url: "447",
      urlImg:
        "https://i.seadn.io/gcs/files/98850f52a5b332a61fec3513117596af.png?auto=format&w=384",
      collection: "Sunflower Land Collectibles",
      isSelling: true,
    },
    {
      name: "Nugget",
      category: category.RESOURCES,
      buff: buff.GOLD,
      buffsType: [
        {
          type: buffType.BOOST,
          description: "+25% gold",
        },
      ],
      currentPrice: 0,
      offerPrice: 0,
      url: "430",
      urlImg:
        "https://i.seadn.io/gcs/files/0d42db9656d796cde7f85a3e4fb84f06.gif?auto=format&w=384",
      collection: "Sunflower Land Collectibles",
      isSelling: true,
    },
  ],
  fruits: [
    {
      name: "Lady Bug",
      category: category.FRUITS,
      buff: buff.APPLE,
      buffsType: [
        {
          type: buffType.BOOST,
          description: "+0.25 apple",
        },
      ],
      currentPrice: 0,
      offerPrice: 0,
      url: "442",
      urlImg:
        "https://i.seadn.io/gcs/files/e59d0681c41fce422d2f91b8c3d5e0bd.gif?auto=format&w=384",
      collection: "Sunflower Land Collectibles",
      isSelling: true,
    },
  ],
  xp: [
    {
      name: "Maneki Neko",
      category: category.XP,
      buff: buff.XP,
      buffsType: [
        {
          type: buffType.SPECIAL,
          description: "+1 food each 24 hours",
        },
      ],
      currentPrice: 0,
      offerPrice: 0,
      url: "446",
      urlImg:
        "https://i.seadn.io/gcs/files/d0ec6cb215da3190f2e70d6f2a3e8b1b.gif?auto=format&w=384",
      collection: "Sunflower Land Collectibles",
      isSelling: true,
    },
    {
      name: "Observatory",
      category: category.XP,
      buff: buff.XP,
      buffsType: [
        {
          type: buffType.BOOST,
          description: "+5% xp",
        },
      ],
      currentPrice: 0,
      offerPrice: 0,
      url: "911",
      urlImg:
        "https://i.seadn.io/gcs/files/688137bb65b5a7e02e844706c6c7bad7.gif?auto=format&w=384",
      collection: "Sunflower Land Collectibles",
      isSelling: true,
    },
  ],
};

export const nft = [
  {
    name: "Cabbage Boy",
    slug: "cabbage_boy",
    category: category.CROPS,
    buff: buff.CABBAGE,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+0.25 cabbage",
      },
      {
        type: buffType.COMBO,
        description: "Combo: +0.15 cabbage with Cabbage Girl",
      },
      {
        type: buffType.ALERT,
        description: "Karkinos has no effect with Cabbage Boy",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "434",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Cabbage Girl",
    slug: "cabbage_girl",
    category: category.CROPS,
    buff: buff.CABBAGE,
    buffsType: [
      {
        type: buffType.COOLDOWN,
        description: "-50% cabbage production time",
      },
      {
        type: buffType.COMBO,
        description: "Combo: +0.15 cabbage with Cabbage Boy",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "435",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Karkinos",
    slug: "karkinos",
    category: category.CROPS,
    buff: buff.CABBAGE,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+0.1 cabbage",
      },
      {
        type: buffType.ALERT,
        description: "Karkinos has no effect with Cabbage Boy",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "455",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Lunar Calendar",
    slug: "lunar_calendar",
    category: category.CROPS,
    buff: buff.CROP,
    buffsType: [
      {
        type: buffType.COOLDOWN,
        description: "-10% crop production time",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "448",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Nancy",
    slug: "nancy",
    category: category.CROPS,
    buff: buff.CROP,
    buffsType: [
      {
        type: buffType.COOLDOWN,
        description: "-15% crop production time",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "420",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Scarecrow",
    slug: "scarecrow",
    category: category.CROPS,
    buff: buff.CROP,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+20% crop",
      },
      {
        type: buffType.COOLDOWN,
        description: "-15% crop production time",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "404",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Kuebiko",
    slug: "kuebiko",
    category: category.CROPS,
    buff: buff.CROP,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+20% crop",
      },
      {
        type: buffType.COOLDOWN,
        description: "-15% crop production time",
      },
      {
        type: buffType.SPECIAL,
        description: "free seeds",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "421",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Tiki Totem",
    slug: "tiki_totem",
    category: category.RESOURCES,
    buff: buff.WOOD,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+0.1 wood",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "447",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Nugget",
    slug: "nugget",
    category: category.RESOURCES,
    buff: buff.GOLD,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+25% gold",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "430",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Lady Bug",
    slug: "ladybug",
    category: category.FRUITS,
    buff: buff.APPLE,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+0.25 apple",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "442",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Squirrel Monkey",
    slug: "squirrel_monkey",
    category: category.FRUITS,
    buff: buff.ORANGE,
    buffsType: [
      {
        type: buffType.COOLDOWN,
        description: "-50% orange production time",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "443",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Black Bearry",
    slug: "black_bearry",
    category: category.FRUITS,
    buff: buff.BLUEBERRY,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+1 blueberry",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "444",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Immortal Pear",
    slug: "immortal_pear",
    category: category.FRUITS,
    buff: buff.FRUIT,
    buffsType: [
      {
        type: buffType.SPECIAL,
        description: "+1 bonus harvest",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "441",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Maneki Neko",
    slug: "maneki_neko",
    category: category.XP,
    buff: buff.XP,
    buffsType: [
      {
        type: buffType.SPECIAL,
        description: "+1 food each 24 hours",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "446",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Observatory",
    slug: "observatory",
    category: category.XP,
    buff: buff.XP,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+5% xp",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "911",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Christmas Tree",
    slug: "christmas_tree",
    category: category.OTHER,
    buff: buff.OTHER,
    buffsType: [
      {
        type: buffType.SPECIAL,
        description: "give 1 airdrop each year",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "403",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Heart of Davy Jones",
    slug: "davy_jones",
    category: category.OTHER,
    buff: buff.OTHER,
    buffsType: [
      {
        type: buffType.SPECIAL,
        description: "+25 holes to dig in Treasure Island",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "450",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Treasure Map",
    slug: "treasure_map",
    category: category.OTHER,
    buff: buff.OTHER,
    buffsType: [
      {
        type: buffType.SPECIAL,
        description: "+20% profit from beach bounty",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "449",
    collection: "Sunflower Land Collectibles",
    isSelling: false,
  },
  {
    name: "Fat Chicken",
    slug: "fat_chicken",
    category: category.CHICKEN,
    buff: buff.EGG,
    buffsType: [
      {
        type: buffType.SPECIAL,
        description: "Reduce wheat requirement for chickens 10%",
      },
      {
        type: buffType.MUTANT_CHICKEN,
        description: "+0.001 chance to get a mutant chicken",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "611",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Speed Chicken",
    slug: "speed_chicken",
    category: category.CHICKEN,
    buff: buff.EGG,
    buffsType: [
      {
        type: buffType.COOLDOWN,
        description: "-10% egg production time",
      },
      {
        type: buffType.MUTANT_CHICKEN,
        description: "+0.001 chance to get a mutant chicken",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "610",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Rich Chicken",
    slug: "rich_chicken",
    category: category.CHICKEN,
    buff: buff.EGG,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+10% egg",
      },
      {
        type: buffType.MUTANT_CHICKEN,
        description: "+0.001 chance to get a mutant chicken",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "612",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Rooster",
    slug: "rooster",
    category: category.CHICKEN,
    buff: buff.EGG,
    buffsType: [
      {
        type: buffType.MUTANT_CHICKEN,
        description: "2x chance to get mutant chicken",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "613",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Undead Rooster",
    slug: "undead_rooster",
    category: category.CHICKEN,
    buff: buff.EGG,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+10% egg",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "1114",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Chicken Coop",
    slug: "chicken_coop",
    category: category.CHICKEN,
    buff: buff.EGG,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+200% egg",
      },
      {
        type: buffType.SPECIAL,
        description: "+5 chicken per hen",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "408",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Gold Egg",
    slug: "gold_egg",
    category: category.CHICKEN,
    buff: buff.EGG,
    buffsType: [
      {
        type: buffType.SPECIAL,
        description: "Feed chickens without wheat",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "409",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Wood Nymph Wendy",
    slug: "wendy",
    category: category.RESOURCES,
    buff: buff.WOOD,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+0.2 wood",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "436",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Rock Golem",
    slug: "rock_golem",
    category: category.RESOURCES,
    buff: buff.STONE,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "10% to get 3x stone",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "427",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Iron Idol",
    slug: "iron_idol",
    category: category.RESOURCES,
    buff: buff.IRON,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+1 iron",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "454",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Woody the Beaver",
    slug: "woody_beaver",
    category: category.RESOURCES,
    buff: buff.WOOD,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+20% wood",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "415",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Apprentice Beaver",
    slug: "apprentice_beaver",
    category: category.RESOURCES,
    buff: buff.WOOD,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+20% wood",
      },
      {
        type: buffType.COOLDOWN,
        description: "-50% tree recovery time",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "416",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Foreman Beaver",
    slug: "foreman_beaver",
    category: category.RESOURCES,
    buff: buff.WOOD,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+20% wood",
      },
      {
        type: buffType.COOLDOWN,
        description: "-50% tree recovery time",
      },
      {
        type: buffType.SPECIAL,
        description: "cut trees without axe",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "417",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Tunnel Mole",
    slug: "tunnel_mole",
    category: category.RESOURCES,
    buff: buff.STONE,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+25% stone",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "428",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Rocky the Mole",
    slug: "rocky_mole",
    category: category.RESOURCES,
    buff: buff.IRON,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+25% iron",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "429",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Easter Bunny",
    slug: "easter_bunny",
    category: category.CROPS,
    buff: buff.CARROT,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+20% carrot",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "909",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Victoria Sisters",
    slug: "victoria_sisters",
    category: category.CROPS,
    buff: buff.PUMPKIN,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+20% pumpkin",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "432",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Peeled Potato",
    slug: "peeled_potato",
    category: category.CROPS,
    buff: buff.POTATO,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+20% potato",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "433",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Mysterious Parsnip",
    slug: "mysterious_parsnip",
    category: category.CROPS,
    buff: buff.PARSNIP,
    buffsType: [
      {
        type: buffType.COOLDOWN,
        description: "-50% parsnip production time",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "418",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Golden Cauliflower",
    slug: "golden_cauliflower",
    category: category.CROPS,
    buff: buff.CAULIFLOWER,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+200% cauliflower",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "410",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Carrot Sword",
    slug: "carrot_sword",
    category: category.CROPS,
    buff: buff.CROP,
    buffsType: [
      {
        type: buffType.SPECIAL,
        description: "increases the chance of finding a mutant crop",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "419",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
  {
    name: "Pablo The Bunny",
    slug: "pablo",
    category: category.CROPS,
    buff: buff.CARROT,
    buffsType: [
      {
        type: buffType.BOOST,
        description: "+0.1 carrot",
      },
    ],
    currentPrice: 0,
    offerPrice: 0,
    url: "1",
    collection: "Sunflower Land Collectibles",
    isSelling: true,
  },
];
