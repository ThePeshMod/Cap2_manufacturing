// Default Capitalism 2 items and recipe data auto-generated from game CSV files.

export interface ItemInfo {
  code: string;
  name: string;
  class: string;
}

export interface RecipeInput {
  code: string;
  qty: number;
  quality: number;
}

export interface Recipe {
  class: string;
  output_qty: number;
  prod_speed: number;
  machine: number;
  tech: number | null;
  inputs: RecipeInput[];
}

export const DEFAULT_ITEMS: ItemInfo[] = [
  {
    "code": "JACKET",
    "name": "Leather Jacket",
    "class": "APPAREL"
  },
  {
    "code": "JEAN",
    "name": "Jeans",
    "class": "APPAREL"
  },
  {
    "code": "SWEATER",
    "name": "Sweater",
    "class": "APPAREL"
  },
  {
    "code": "CAR",
    "name": "Car",
    "class": "AUTO"
  },
  {
    "code": "MOTORCYC",
    "name": "Motorcycle",
    "class": "AUTO"
  },
  {
    "code": "LOTION",
    "name": "Bath Lotion",
    "class": "BATH_SUP"
  },
  {
    "code": "SHAMPOO",
    "name": "Shampoo",
    "class": "BATH_SUP"
  },
  {
    "code": "SOAP",
    "name": "Soap",
    "class": "BATH_SUP"
  },
  {
    "code": "B_MILK",
    "name": "Bottled Milk",
    "class": "BEVERAGE"
  },
  {
    "code": "COLA",
    "name": "Cola",
    "class": "BEVERAGE"
  },
  {
    "code": "G_JUICE",
    "name": "Grape Juice",
    "class": "BEVERAGE"
  },
  {
    "code": "WINE",
    "name": "Wine",
    "class": "BEVERAGE"
  },
  {
    "code": "DETERGEN",
    "name": "Detergent",
    "class": "CHEMGOOD"
  },
  {
    "code": "TOOTHPAS",
    "name": "Toothpaste",
    "class": "CHEMGOOD"
  },
  {
    "code": "T_CLEAN",
    "name": "Toilet Cleaner",
    "class": "CHEMGOOD"
  },
  {
    "code": "COMPUTER",
    "name": "Desktop Computer",
    "class": "COMPUTER"
  },
  {
    "code": "NOTEBOOK",
    "name": "Notebook Computer",
    "class": "COMPUTER"
  },
  {
    "code": "PDA",
    "name": "Palm Computer",
    "class": "COMPUTER"
  },
  {
    "code": "PRINTER",
    "name": "Printer",
    "class": "COMPUTER"
  },
  {
    "code": "EYESHADO",
    "name": "Eye Shadow",
    "class": "COSMETIC"
  },
  {
    "code": "H_COLOR",
    "name": "Hair Color",
    "class": "COSMETIC"
  },
  {
    "code": "LIPSTICK",
    "name": "Lipstick",
    "class": "COSMETIC"
  },
  {
    "code": "PERFUME",
    "name": "Perfume",
    "class": "COSMETIC"
  },
  {
    "code": "CAKES",
    "name": "Cakes",
    "class": "DESSERT"
  },
  {
    "code": "ICECREAM",
    "name": "Ice Cream",
    "class": "DESSERT"
  },
  {
    "code": "YOGURT",
    "name": "Yogurt",
    "class": "DESSERT"
  },
  {
    "code": "COLD",
    "name": "Cold Tablets",
    "class": "DRUGS"
  },
  {
    "code": "COUGH",
    "name": "Cough Syrup",
    "class": "DRUGS"
  },
  {
    "code": "HEADACHE",
    "name": "Headache Pills",
    "class": "DRUGS"
  },
  {
    "code": "AIRCOND",
    "name": "Air Conditioner",
    "class": "ELAL_PRO"
  },
  {
    "code": "HIFI",
    "name": "Hi-fi",
    "class": "ELAL_PRO"
  },
  {
    "code": "MICROWAV",
    "name": "Microwave",
    "class": "ELAL_PRO"
  },
  {
    "code": "TV",
    "name": "Television",
    "class": "ELAL_PRO"
  },
  {
    "code": "DVD",
    "name": "DVD Player",
    "class": "ELIC_PRO"
  },
  {
    "code": "MOBILE",
    "name": "Mobile Phone",
    "class": "ELIC_PRO"
  },
  {
    "code": "VCAMERA",
    "name": "Video Camera",
    "class": "ELIC_PRO"
  },
  {
    "code": "VCR",
    "name": "Video Recorder",
    "class": "ELIC_PRO"
  },
  {
    "code": "BREAD",
    "name": "Bread",
    "class": "FOOD"
  },
  {
    "code": "CAN_CORN",
    "name": "Canned Corn",
    "class": "FOOD"
  },
  {
    "code": "CAN_SOUP",
    "name": "Canned Soup",
    "class": "FOOD"
  },
  {
    "code": "CORN_FLK",
    "name": "Corn Flakes",
    "class": "FOOD"
  },
  {
    "code": "SANDALS",
    "name": "Sandals",
    "class": "FOOTWEAR"
  },
  {
    "code": "SHOE",
    "name": "Shoes",
    "class": "FOOTWEAR"
  },
  {
    "code": "SOCKS",
    "name": "Socks",
    "class": "FOOTWEAR"
  },
  {
    "code": "S_SHOE",
    "name": "Sport Shoes",
    "class": "FOOTWEAR"
  },
  {
    "code": "BED",
    "name": "Bed",
    "class": "FURN"
  },
  {
    "code": "CHAIR",
    "name": "Chair",
    "class": "FURN"
  },
  {
    "code": "SOFA",
    "name": "Sofa",
    "class": "FURN"
  },
  {
    "code": "NECKLACE",
    "name": "Silver Necklace",
    "class": "JEWELRY"
  },
  {
    "code": "RING",
    "name": "Gold Ring",
    "class": "JEWELRY"
  },
  {
    "code": "BAG",
    "name": "Leather Bag",
    "class": "LEATHER"
  },
  {
    "code": "BELT",
    "name": "Leather Belt",
    "class": "LEATHER"
  },
  {
    "code": "BRFCASE",
    "name": "Leather Briefcase",
    "class": "LEATHER"
  },
  {
    "code": "WALLET",
    "name": "Leather Wallet",
    "class": "LEATHER"
  },
  {
    "code": "EGG",
    "name": "Eggs",
    "class": "LPRODUCT"
  },
  {
    "code": "MCATTLE",
    "name": "Frozen Beef",
    "class": "LPRODUCT"
  },
  {
    "code": "MCHICKEN",
    "name": "Frozen Chicken",
    "class": "LPRODUCT"
  },
  {
    "code": "MPIG",
    "name": "Frozen Pork",
    "class": "LPRODUCT"
  },
  {
    "code": "MSHEEP",
    "name": "Frozen Lamb",
    "class": "LPRODUCT"
  },
  {
    "code": "LEATHER",
    "name": "Leather",
    "class": "LSEMI"
  },
  {
    "code": "MILK",
    "name": "Milk",
    "class": "LSEMI"
  },
  {
    "code": "WOOL",
    "name": "Wool",
    "class": "LSEMI"
  },
  {
    "code": "CATTLE",
    "name": "Cattle",
    "class": "LSTOCK"
  },
  {
    "code": "CHICKEN",
    "name": "Chicken",
    "class": "LSTOCK"
  },
  {
    "code": "PIG",
    "name": "Pig",
    "class": "LSTOCK"
  },
  {
    "code": "SHEEP",
    "name": "Sheep",
    "class": "LSTOCK"
  },
  {
    "code": "CAMERA",
    "name": "Camera",
    "class": "PHOTO"
  },
  {
    "code": "FILM",
    "name": "Camera Film",
    "class": "PHOTO"
  },
  {
    "code": "FLAX",
    "name": "Flax",
    "class": "PLANT"
  },
  {
    "code": "RUBBER_P",
    "name": "Rubber Plant",
    "class": "PLANT"
  },
  {
    "code": "STRAWBEY",
    "name": "Strawberry",
    "class": "PLANT"
  },
  {
    "code": "SUGARCAN",
    "name": "Sugar Cane",
    "class": "PLANT"
  },
  {
    "code": "BARLEY",
    "name": "Barley",
    "class": "PSEMI"
  },
  {
    "code": "COCOA",
    "name": "Cocoa",
    "class": "PSEMI"
  },
  {
    "code": "COCO_NUT",
    "name": "Coconut",
    "class": "PSEMI"
  },
  {
    "code": "CORN",
    "name": "Corn",
    "class": "PSEMI"
  },
  {
    "code": "COTTON",
    "name": "Cotton",
    "class": "PSEMI"
  },
  {
    "code": "FLAXFIBR",
    "name": "Flax Fiber",
    "class": "PSEMI"
  },
  {
    "code": "GRAPE",
    "name": "Grapes",
    "class": "PSEMI"
  },
  {
    "code": "LEMON",
    "name": "Lemon",
    "class": "PSEMI"
  },
  {
    "code": "RUBBER",
    "name": "Rubber",
    "class": "PSEMI"
  },
  {
    "code": "SUGAR",
    "name": "Sugar",
    "class": "PSEMI"
  },
  {
    "code": "TOBACCO",
    "name": "Tobacco",
    "class": "PSEMI"
  },
  {
    "code": "WHEAT",
    "name": "Wheat",
    "class": "PSEMI"
  },
  {
    "code": "ALUMINIU",
    "name": "Aluminum",
    "class": "RAW"
  },
  {
    "code": "CHEMICAL",
    "name": "Chemical Minerals",
    "class": "RAW"
  },
  {
    "code": "COAL",
    "name": "Coal",
    "class": "RAW"
  },
  {
    "code": "GOLD",
    "name": "Gold",
    "class": "RAW"
  },
  {
    "code": "IRON",
    "name": "Iron Ore",
    "class": "RAW"
  },
  {
    "code": "OIL",
    "name": "Oil",
    "class": "RAW"
  },
  {
    "code": "SILICA",
    "name": "Silica",
    "class": "RAW"
  },
  {
    "code": "SILVER",
    "name": "Silver",
    "class": "RAW"
  },
  {
    "code": "SULFUR",
    "name": "Sulfur",
    "class": "RAW"
  },
  {
    "code": "TIMBER",
    "name": "Timber",
    "class": "RAW"
  },
  {
    "code": "ACID",
    "name": "Citric Acid",
    "class": "SEMI"
  },
  {
    "code": "CARBODY",
    "name": "Car Body",
    "class": "SEMI"
  },
  {
    "code": "COCO_OIL",
    "name": "Coconut Oil",
    "class": "SEMI"
  },
  {
    "code": "CORNSYRP",
    "name": "Corn Syrup",
    "class": "SEMI"
  },
  {
    "code": "CPU",
    "name": "CPU",
    "class": "SEMI"
  },
  {
    "code": "DYESTUFF",
    "name": "Dyestuff",
    "class": "SEMI"
  },
  {
    "code": "ELECOMP",
    "name": "Electronic Components",
    "class": "SEMI"
  },
  {
    "code": "ENGINE",
    "name": "Engine",
    "class": "SEMI"
  },
  {
    "code": "FLOUR",
    "name": "Flour",
    "class": "SEMI"
  },
  {
    "code": "GLASS",
    "name": "Glass",
    "class": "SEMI"
  },
  {
    "code": "LINEN",
    "name": "Linen",
    "class": "SEMI"
  },
  {
    "code": "PAPER",
    "name": "Paper",
    "class": "SEMI"
  },
  {
    "code": "PLASTIC",
    "name": "Plastic",
    "class": "SEMI"
  },
  {
    "code": "POLYESTE",
    "name": "Polyester",
    "class": "SEMI"
  },
  {
    "code": "SILICON",
    "name": "Silicon",
    "class": "SEMI"
  },
  {
    "code": "STEEL",
    "name": "Steel",
    "class": "SEMI"
  },
  {
    "code": "TEXTILE",
    "name": "Textiles",
    "class": "SEMI"
  },
  {
    "code": "WGERMOIL",
    "name": "Wheat Germ Oil",
    "class": "SEMI"
  },
  {
    "code": "WHEEL",
    "name": "Wheel & Tire",
    "class": "SEMI"
  },
  {
    "code": "CHOCOLAT",
    "name": "Chocolate Bar",
    "class": "SNACKS"
  },
  {
    "code": "COOKIE",
    "name": "Cookies",
    "class": "SNACKS"
  },
  {
    "code": "FRUIT_S",
    "name": "Fruit Snacks",
    "class": "SNACKS"
  },
  {
    "code": "GUM",
    "name": "Chewing Gum",
    "class": "SNACKS"
  },
  {
    "code": "BACKPACK",
    "name": "Back Pack",
    "class": "SPORT_EQ"
  },
  {
    "code": "GOLFCLUB",
    "name": "Golf Clubs",
    "class": "SPORT_EQ"
  },
  {
    "code": "SKATES",
    "name": "In-line Skates",
    "class": "SPORT_EQ"
  },
  {
    "code": "CIGARET",
    "name": "Cigarettes",
    "class": "TOBACCO"
  },
  {
    "code": "CIGARS",
    "name": "Cigars",
    "class": "TOBACCO"
  },
  {
    "code": "HANDH_G",
    "name": "Hand-held Game Device",
    "class": "TOY"
  },
  {
    "code": "TOY_CAR",
    "name": "Toy Racing Car",
    "class": "TOY"
  },
  {
    "code": "TOY_DOLL",
    "name": "Toy Doll",
    "class": "TOY"
  },
  {
    "code": "VIDEO_G",
    "name": "Video Game Console",
    "class": "TOY"
  },
  {
    "code": "E_WATCH",
    "name": "Elegant Watch",
    "class": "WATCH"
  },
  {
    "code": "S_WATCH",
    "name": "Sports Watch",
    "class": "WATCH"
  }
];

export const DEFAULT_RECIPES: Record<string, Recipe> = {
  "JACKET": {
    "class": "APPAREL",
    "output_qty": 6.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 50,
    "inputs": [
      {
        "code": "LEATHER",
        "qty": 5.0,
        "quality": 45.0
      },
      {
        "code": "TEXTILE",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "JEAN": {
    "class": "APPAREL",
    "output_qty": 2.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 50,
    "inputs": [
      {
        "code": "DYESTUFF",
        "qty": 1.0,
        "quality": 10.0
      },
      {
        "code": "TEXTILE",
        "qty": 2.0,
        "quality": 40.0
      }
    ]
  },
  "SWEATER": {
    "class": "APPAREL",
    "output_qty": 3.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 40,
    "inputs": [
      {
        "code": "WOOL",
        "qty": 3.0,
        "quality": 50.0
      },
      {
        "code": "DYESTUFF",
        "qty": 1.0,
        "quality": 10.0
      }
    ]
  },
  "CAR": {
    "class": "AUTO",
    "output_qty": 1.0,
    "prod_speed": 300.0,
    "machine": 2,
    "tech": 30,
    "inputs": [
      {
        "code": "CARBODY",
        "qty": 1.0,
        "quality": 30.0
      },
      {
        "code": "ENGINE",
        "qty": 1.0,
        "quality": 30.0
      },
      {
        "code": "WHEEL",
        "qty": 4.0,
        "quality": 10.0
      }
    ]
  },
  "MOTORCYC": {
    "class": "AUTO",
    "output_qty": 1.0,
    "prod_speed": 200.0,
    "machine": 2,
    "tech": 50,
    "inputs": [
      {
        "code": "ENGINE",
        "qty": 1.0,
        "quality": 30.0
      },
      {
        "code": "STEEL",
        "qty": 50.0,
        "quality": 10.0
      },
      {
        "code": "WHEEL",
        "qty": 2.0,
        "quality": 10.0
      }
    ]
  },
  "LOTION": {
    "class": "BATH_SUP",
    "output_qty": 10.0,
    "prod_speed": 100.0,
    "machine": 4,
    "tech": 60,
    "inputs": [
      {
        "code": "CHEMICAL",
        "qty": 1.0,
        "quality": 20.0
      },
      {
        "code": "COCO_OIL",
        "qty": 1.0,
        "quality": 15.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "SHAMPOO": {
    "class": "BATH_SUP",
    "output_qty": 15.0,
    "prod_speed": 100.0,
    "machine": 4,
    "tech": 75,
    "inputs": [
      {
        "code": "CHEMICAL",
        "qty": 3.0,
        "quality": 20.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "SOAP": {
    "class": "BATH_SUP",
    "output_qty": 8.0,
    "prod_speed": 100.0,
    "machine": 4,
    "tech": 60,
    "inputs": [
      {
        "code": "ACID",
        "qty": 1.0,
        "quality": 15.0
      },
      {
        "code": "COCO_OIL",
        "qty": 1.0,
        "quality": 20.0
      },
      {
        "code": "PAPER",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "B_MILK": {
    "class": "BEVERAGE",
    "output_qty": 8.0,
    "prod_speed": 100.0,
    "machine": 5,
    "tech": 30,
    "inputs": [
      {
        "code": "MILK",
        "qty": 2.0,
        "quality": 65.0
      },
      {
        "code": "GLASS",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "COLA": {
    "class": "BEVERAGE",
    "output_qty": 17.0,
    "prod_speed": 100.0,
    "machine": 5,
    "tech": 80,
    "inputs": [
      {
        "code": "SUGAR",
        "qty": 5.0,
        "quality": 10.0
      },
      {
        "code": "ALUMINIU",
        "qty": 1.0,
        "quality": 10.0
      }
    ]
  },
  "G_JUICE": {
    "class": "BEVERAGE",
    "output_qty": 20.0,
    "prod_speed": 100.0,
    "machine": 5,
    "tech": 45,
    "inputs": [
      {
        "code": "GRAPE",
        "qty": 10.0,
        "quality": 40.0
      },
      {
        "code": "ACID",
        "qty": 1.0,
        "quality": 10.0
      },
      {
        "code": "GLASS",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "WINE": {
    "class": "BEVERAGE",
    "output_qty": 6.0,
    "prod_speed": 100.0,
    "machine": 5,
    "tech": 45,
    "inputs": [
      {
        "code": "GRAPE",
        "qty": 5.0,
        "quality": 50.0
      },
      {
        "code": "GLASS",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "DETERGEN": {
    "class": "CHEMGOOD",
    "output_qty": 10.0,
    "prod_speed": 100.0,
    "machine": 3,
    "tech": 65,
    "inputs": [
      {
        "code": "CHEMICAL",
        "qty": 3.0,
        "quality": 20.0
      },
      {
        "code": "ACID",
        "qty": 1.0,
        "quality": 10.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "TOOTHPAS": {
    "class": "CHEMGOOD",
    "output_qty": 20.0,
    "prod_speed": 100.0,
    "machine": 3,
    "tech": 70,
    "inputs": [
      {
        "code": "CHEMICAL",
        "qty": 3.0,
        "quality": 25.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "T_CLEAN": {
    "class": "CHEMGOOD",
    "output_qty": 6.0,
    "prod_speed": 100.0,
    "machine": 3,
    "tech": 70,
    "inputs": [
      {
        "code": "CHEMICAL",
        "qty": 3.0,
        "quality": 25.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "COMPUTER": {
    "class": "COMPUTER",
    "output_qty": 1.0,
    "prod_speed": 200.0,
    "machine": 2,
    "tech": 40,
    "inputs": [
      {
        "code": "CPU",
        "qty": 1.0,
        "quality": 40.0
      },
      {
        "code": "ELECOMP",
        "qty": 1.0,
        "quality": 15.0
      },
      {
        "code": "STEEL",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "NOTEBOOK": {
    "class": "COMPUTER",
    "output_qty": 2.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 40,
    "inputs": [
      {
        "code": "CPU",
        "qty": 2.0,
        "quality": 40.0
      },
      {
        "code": "ELECOMP",
        "qty": 1.5,
        "quality": 15.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "PDA": {
    "class": "COMPUTER",
    "output_qty": 3.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 40,
    "inputs": [
      {
        "code": "CPU",
        "qty": 3.0,
        "quality": 40.0
      },
      {
        "code": "ELECOMP",
        "qty": 1.0,
        "quality": 15.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "PRINTER": {
    "class": "COMPUTER",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 75,
    "inputs": [
      {
        "code": "ELECOMP",
        "qty": 1.0,
        "quality": 20.0
      },
      {
        "code": "PLASTIC",
        "qty": 2.0,
        "quality": 5.0
      }
    ]
  },
  "EYESHADO": {
    "class": "COSMETIC",
    "output_qty": 10.0,
    "prod_speed": 100.0,
    "machine": 3,
    "tech": 70,
    "inputs": [
      {
        "code": "CHEMICAL",
        "qty": 1.0,
        "quality": 25.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "H_COLOR": {
    "class": "COSMETIC",
    "output_qty": 10.0,
    "prod_speed": 100.0,
    "machine": 3,
    "tech": 60,
    "inputs": [
      {
        "code": "DYESTUFF",
        "qty": 2.0,
        "quality": 25.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 5.0
      },
      {
        "code": "WGERMOIL",
        "qty": 1.0,
        "quality": 10.0
      }
    ]
  },
  "LIPSTICK": {
    "class": "COSMETIC",
    "output_qty": 40.0,
    "prod_speed": 100.0,
    "machine": 3,
    "tech": 65,
    "inputs": [
      {
        "code": "DYESTUFF",
        "qty": 3.0,
        "quality": 20.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 5.0
      },
      {
        "code": "WGERMOIL",
        "qty": 1.0,
        "quality": 10.0
      }
    ]
  },
  "PERFUME": {
    "class": "COSMETIC",
    "output_qty": 8.0,
    "prod_speed": 100.0,
    "machine": 3,
    "tech": 65,
    "inputs": [
      {
        "code": "CHEMICAL",
        "qty": 1.0,
        "quality": 30.0
      },
      {
        "code": "GLASS",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "CAKES": {
    "class": "DESSERT",
    "output_qty": 4.0,
    "prod_speed": 100.0,
    "machine": 4,
    "tech": 40,
    "inputs": [
      {
        "code": "EGG",
        "qty": 1.0,
        "quality": 20.0
      },
      {
        "code": "COCOA",
        "qty": 1.0,
        "quality": 20.0
      },
      {
        "code": "FLOUR",
        "qty": 3.0,
        "quality": 20.0
      }
    ]
  },
  "ICECREAM": {
    "class": "DESSERT",
    "output_qty": 20.0,
    "prod_speed": 100.0,
    "machine": 4,
    "tech": 50,
    "inputs": [
      {
        "code": "MILK",
        "qty": 2.0,
        "quality": 20.0
      },
      {
        "code": "STRAWBEY",
        "qty": 2.0,
        "quality": 20.0
      },
      {
        "code": "SUGAR",
        "qty": 1.0,
        "quality": 10.0
      }
    ]
  },
  "YOGURT": {
    "class": "DESSERT",
    "output_qty": 8.0,
    "prod_speed": 100.0,
    "machine": 4,
    "tech": 50,
    "inputs": [
      {
        "code": "MILK",
        "qty": 2.0,
        "quality": 20.0
      },
      {
        "code": "STRAWBEY",
        "qty": 1.0,
        "quality": 20.0
      },
      {
        "code": "ACID",
        "qty": 1.0,
        "quality": 10.0
      }
    ]
  },
  "COLD": {
    "class": "DRUGS",
    "output_qty": 20.0,
    "prod_speed": 100.0,
    "machine": 5,
    "tech": 83,
    "inputs": [
      {
        "code": "CHEMICAL",
        "qty": 1.0,
        "quality": 15.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 2.0
      }
    ]
  },
  "COUGH": {
    "class": "DRUGS",
    "output_qty": 20.0,
    "prod_speed": 100.0,
    "machine": 5,
    "tech": 83,
    "inputs": [
      {
        "code": "CHEMICAL",
        "qty": 2.0,
        "quality": 15.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 2.0
      }
    ]
  },
  "HEADACHE": {
    "class": "DRUGS",
    "output_qty": 20.0,
    "prod_speed": 100.0,
    "machine": 5,
    "tech": 83,
    "inputs": [
      {
        "code": "CHEMICAL",
        "qty": 2.0,
        "quality": 15.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 2.0
      }
    ]
  },
  "AIRCOND": {
    "class": "ELAL_PRO",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 90,
    "inputs": [
      {
        "code": "ELECOMP",
        "qty": 1.0,
        "quality": 5.0
      },
      {
        "code": "STEEL",
        "qty": 6.0,
        "quality": 5.0
      }
    ]
  },
  "HIFI": {
    "class": "ELAL_PRO",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 75,
    "inputs": [
      {
        "code": "ALUMINIU",
        "qty": 2.0,
        "quality": 5.0
      },
      {
        "code": "ELECOMP",
        "qty": 2.0,
        "quality": 15.0
      },
      {
        "code": "STEEL",
        "qty": 3.0,
        "quality": 5.0
      }
    ]
  },
  "MICROWAV": {
    "class": "ELAL_PRO",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 75,
    "inputs": [
      {
        "code": "ELECOMP",
        "qty": 1.0,
        "quality": 15.0
      },
      {
        "code": "GLASS",
        "qty": 1.0,
        "quality": 5.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "TV": {
    "class": "ELAL_PRO",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 70,
    "inputs": [
      {
        "code": "ELECOMP",
        "qty": 3.0,
        "quality": 20.0
      },
      {
        "code": "GLASS",
        "qty": 2.0,
        "quality": 5.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "DVD": {
    "class": "ELIC_PRO",
    "output_qty": 2.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 80,
    "inputs": [
      {
        "code": "ALUMINIU",
        "qty": 2.0,
        "quality": 5.0
      },
      {
        "code": "ELECOMP",
        "qty": 1.0,
        "quality": 15.0
      }
    ]
  },
  "MOBILE": {
    "class": "ELIC_PRO",
    "output_qty": 5.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 80,
    "inputs": [
      {
        "code": "ELECOMP",
        "qty": 1.0,
        "quality": 15.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "VCAMERA": {
    "class": "ELIC_PRO",
    "output_qty": 3.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 70,
    "inputs": [
      {
        "code": "ELECOMP",
        "qty": 1.0,
        "quality": 20.0
      },
      {
        "code": "GLASS",
        "qty": 1.0,
        "quality": 5.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "VCR": {
    "class": "ELIC_PRO",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 75,
    "inputs": [
      {
        "code": "ELECOMP",
        "qty": 1.0,
        "quality": 15.0
      },
      {
        "code": "GLASS",
        "qty": 1.0,
        "quality": 5.0
      },
      {
        "code": "STEEL",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "BREAD": {
    "class": "FOOD",
    "output_qty": 10.0,
    "prod_speed": 100.0,
    "machine": 4,
    "tech": 60,
    "inputs": [
      {
        "code": "FLOUR",
        "qty": 9.0,
        "quality": 40.0
      }
    ]
  },
  "CAN_CORN": {
    "class": "FOOD",
    "output_qty": 2.0,
    "prod_speed": 100.0,
    "machine": 4,
    "tech": 40,
    "inputs": [
      {
        "code": "CORN",
        "qty": 1.0,
        "quality": 60.0
      }
    ]
  },
  "CAN_SOUP": {
    "class": "FOOD",
    "output_qty": 2.0,
    "prod_speed": 100.0,
    "machine": 4,
    "tech": 40,
    "inputs": [
      {
        "code": "MCHICKEN",
        "qty": 1.0,
        "quality": 60.0
      }
    ]
  },
  "CORN_FLK": {
    "class": "FOOD",
    "output_qty": 9.0,
    "prod_speed": 100.0,
    "machine": 4,
    "tech": 40,
    "inputs": [
      {
        "code": "CORN",
        "qty": 2.0,
        "quality": 50.0
      },
      {
        "code": "SUGAR",
        "qty": 1.0,
        "quality": 10.0
      }
    ]
  },
  "SANDALS": {
    "class": "FOOTWEAR",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 70,
    "inputs": [
      {
        "code": "RUBBER",
        "qty": 1.0,
        "quality": 30.0
      }
    ]
  },
  "SHOE": {
    "class": "FOOTWEAR",
    "output_qty": 4.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 50,
    "inputs": [
      {
        "code": "LEATHER",
        "qty": 5.0,
        "quality": 45.0
      },
      {
        "code": "TEXTILE",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "SOCKS": {
    "class": "FOOTWEAR",
    "output_qty": 20.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 75,
    "inputs": [
      {
        "code": "WOOL",
        "qty": 1.0,
        "quality": 25.0
      }
    ]
  },
  "S_SHOE": {
    "class": "FOOTWEAR",
    "output_qty": 2.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 55,
    "inputs": [
      {
        "code": "COTTON",
        "qty": 1.0,
        "quality": 10.0
      },
      {
        "code": "RUBBER",
        "qty": 1.0,
        "quality": 15.0
      },
      {
        "code": "POLYESTE",
        "qty": 2.0,
        "quality": 20.0
      }
    ]
  },
  "BED": {
    "class": "FURN",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 50,
    "inputs": [
      {
        "code": "TIMBER",
        "qty": 80.0,
        "quality": 50.0
      }
    ]
  },
  "CHAIR": {
    "class": "FURN",
    "output_qty": 2.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 45,
    "inputs": [
      {
        "code": "TIMBER",
        "qty": 20.0,
        "quality": 40.0
      },
      {
        "code": "TEXTILE",
        "qty": 1.0,
        "quality": 15.0
      }
    ]
  },
  "SOFA": {
    "class": "FURN",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 40,
    "inputs": [
      {
        "code": "LEATHER",
        "qty": 5.0,
        "quality": 30.0
      },
      {
        "code": "COTTON",
        "qty": 5.0,
        "quality": 15.0
      },
      {
        "code": "TIMBER",
        "qty": 30.0,
        "quality": 15.0
      }
    ]
  },
  "NECKLACE": {
    "class": "JEWELRY",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 30,
    "inputs": [
      {
        "code": "SILVER",
        "qty": 3.0,
        "quality": 70.0
      }
    ]
  },
  "RING": {
    "class": "JEWELRY",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 30,
    "inputs": [
      {
        "code": "GOLD",
        "qty": 1.0,
        "quality": 70.0
      }
    ]
  },
  "BAG": {
    "class": "LEATHER",
    "output_qty": 18.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 50,
    "inputs": [
      {
        "code": "LEATHER",
        "qty": 5.0,
        "quality": 45.0
      },
      {
        "code": "TEXTILE",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "BELT": {
    "class": "LEATHER",
    "output_qty": 35.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 50,
    "inputs": [
      {
        "code": "LEATHER",
        "qty": 6.0,
        "quality": 45.0
      },
      {
        "code": "STEEL",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "BRFCASE": {
    "class": "LEATHER",
    "output_qty": 4.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 45,
    "inputs": [
      {
        "code": "LEATHER",
        "qty": 5.0,
        "quality": 45.0
      },
      {
        "code": "TEXTILE",
        "qty": 1.0,
        "quality": 10.0
      }
    ]
  },
  "WALLET": {
    "class": "LEATHER",
    "output_qty": 3.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 50,
    "inputs": [
      {
        "code": "LEATHER",
        "qty": 1.0,
        "quality": 50.0
      }
    ]
  },
  "CAMERA": {
    "class": "PHOTO",
    "output_qty": 2.0,
    "prod_speed": 100.0,
    "machine": 3,
    "tech": 75,
    "inputs": [
      {
        "code": "ELECOMP",
        "qty": 2.0,
        "quality": 15.0
      },
      {
        "code": "GLASS",
        "qty": 1.0,
        "quality": 5.0
      },
      {
        "code": "PLASTIC",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "FILM": {
    "class": "PHOTO",
    "output_qty": 30.0,
    "prod_speed": 100.0,
    "machine": 3,
    "tech": 80,
    "inputs": [
      {
        "code": "CHEMICAL",
        "qty": 5.0,
        "quality": 10.0
      },
      {
        "code": "SILVER",
        "qty": 1.0,
        "quality": 5.0
      },
      {
        "code": "PLASTIC",
        "qty": 2.0,
        "quality": 5.0
      }
    ]
  },
  "ACID": {
    "class": "SEMI",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 70,
    "inputs": [
      {
        "code": "LEMON",
        "qty": 10.0,
        "quality": 30.0
      }
    ]
  },
  "CARBODY": {
    "class": "SEMI",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 50,
    "inputs": [
      {
        "code": "GLASS",
        "qty": 30.0,
        "quality": 15.0
      },
      {
        "code": "PLASTIC",
        "qty": 30.0,
        "quality": 15.0
      },
      {
        "code": "STEEL",
        "qty": 300.0,
        "quality": 20.0
      }
    ]
  },
  "COCO_OIL": {
    "class": "SEMI",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 5,
    "tech": 80,
    "inputs": [
      {
        "code": "COCO_NUT",
        "qty": 5.0,
        "quality": 20.0
      }
    ]
  },
  "CORNSYRP": {
    "class": "SEMI",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 40,
    "inputs": [
      {
        "code": "CORN",
        "qty": 4.0,
        "quality": 60.0
      }
    ]
  },
  "CPU": {
    "class": "SEMI",
    "output_qty": 50.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 95,
    "inputs": [
      {
        "code": "SILICON",
        "qty": 1.0,
        "quality": 5.0
      }
    ]
  },
  "DYESTUFF": {
    "class": "SEMI",
    "output_qty": 10.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 50,
    "inputs": [
      {
        "code": "OIL",
        "qty": 1.0,
        "quality": 30.0
      },
      {
        "code": "TIMBER",
        "qty": 30.0,
        "quality": 20.0
      }
    ]
  },
  "ELECOMP": {
    "class": "SEMI",
    "output_qty": 3.0,
    "prod_speed": 400.0,
    "machine": 1,
    "tech": 70,
    "inputs": [
      {
        "code": "CHEMICAL",
        "qty": 1.0,
        "quality": 10.0
      },
      {
        "code": "SILICON",
        "qty": 1.0,
        "quality": 10.0
      },
      {
        "code": "STEEL",
        "qty": 1.0,
        "quality": 10.0
      }
    ]
  },
  "ENGINE": {
    "class": "SEMI",
    "output_qty": 1.0,
    "prod_speed": 200.0,
    "machine": 2,
    "tech": 80,
    "inputs": [
      {
        "code": "STEEL",
        "qty": 100.0,
        "quality": 20.0
      }
    ]
  },
  "FLOUR": {
    "class": "SEMI",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 5,
    "tech": 30,
    "inputs": [
      {
        "code": "WHEAT",
        "qty": 2.0,
        "quality": 70.0
      }
    ]
  },
  "GLASS": {
    "class": "SEMI",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 60,
    "inputs": [
      {
        "code": "SILICA",
        "qty": 2.0,
        "quality": 40.0
      }
    ]
  },
  "LINEN": {
    "class": "SEMI",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 50,
    "inputs": [
      {
        "code": "FLAXFIBR",
        "qty": 2.0,
        "quality": 50.0
      }
    ]
  },
  "PAPER": {
    "class": "SEMI",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 50,
    "inputs": [
      {
        "code": "TIMBER",
        "qty": 1.0,
        "quality": 50.0
      }
    ]
  },
  "PLASTIC": {
    "class": "SEMI",
    "output_qty": 30.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 65,
    "inputs": [
      {
        "code": "OIL",
        "qty": 1.0,
        "quality": 35.0
      }
    ]
  },
  "POLYESTE": {
    "class": "SEMI",
    "output_qty": 6.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 50,
    "inputs": [
      {
        "code": "CHEMICAL",
        "qty": 4.0,
        "quality": 35.0
      },
      {
        "code": "OIL",
        "qty": 2.0,
        "quality": 15.0
      }
    ]
  },
  "SILICON": {
    "class": "SEMI",
    "output_qty": 2.0,
    "prod_speed": 100.0,
    "machine": 3,
    "tech": 60,
    "inputs": [
      {
        "code": "SILICA",
        "qty": 3.0,
        "quality": 40.0
      }
    ]
  },
  "STEEL": {
    "class": "SEMI",
    "output_qty": 2.0,
    "prod_speed": 100.0,
    "machine": 2,
    "tech": 50,
    "inputs": [
      {
        "code": "COAL",
        "qty": 3.0,
        "quality": 20.0
      },
      {
        "code": "IRON",
        "qty": 1.0,
        "quality": 30.0
      }
    ]
  },
  "TEXTILE": {
    "class": "SEMI",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 50,
    "inputs": [
      {
        "code": "COTTON",
        "qty": 2.0,
        "quality": 50.0
      }
    ]
  },
  "WGERMOIL": {
    "class": "SEMI",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 5,
    "tech": 70,
    "inputs": [
      {
        "code": "WHEAT",
        "qty": 10.0,
        "quality": 30.0
      }
    ]
  },
  "WHEEL": {
    "class": "SEMI",
    "output_qty": 1.0,
    "prod_speed": 200.0,
    "machine": 2,
    "tech": 50,
    "inputs": [
      {
        "code": "RUBBER",
        "qty": 20.0,
        "quality": 25.0
      },
      {
        "code": "STEEL",
        "qty": 20.0,
        "quality": 25.0
      }
    ]
  },
  "CHOCOLAT": {
    "class": "SNACKS",
    "output_qty": 10.0,
    "prod_speed": 100.0,
    "machine": 5,
    "tech": 50,
    "inputs": [
      {
        "code": "MILK",
        "qty": 1.0,
        "quality": 20.0
      },
      {
        "code": "COCOA",
        "qty": 1.0,
        "quality": 30.0
      }
    ]
  },
  "COOKIE": {
    "class": "SNACKS",
    "output_qty": 10.0,
    "prod_speed": 100.0,
    "machine": 5,
    "tech": 70,
    "inputs": [
      {
        "code": "SUGAR",
        "qty": 1.0,
        "quality": 10.0
      },
      {
        "code": "FLOUR",
        "qty": 9.0,
        "quality": 20.0
      }
    ]
  },
  "FRUIT_S": {
    "class": "SNACKS",
    "output_qty": 5.0,
    "prod_speed": 100.0,
    "machine": 5,
    "tech": 50,
    "inputs": [
      {
        "code": "STRAWBEY",
        "qty": 1.0,
        "quality": 50.0
      }
    ]
  },
  "GUM": {
    "class": "SNACKS",
    "output_qty": 20.0,
    "prod_speed": 100.0,
    "machine": 5,
    "tech": 75,
    "inputs": [
      {
        "code": "SUGAR",
        "qty": 1.0,
        "quality": 10.0
      },
      {
        "code": "CORNSYRP",
        "qty": 1.0,
        "quality": 15.0
      }
    ]
  },
  "BACKPACK": {
    "class": "SPORT_EQ",
    "output_qty": 15.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 60,
    "inputs": [
      {
        "code": "LINEN",
        "qty": 1.0,
        "quality": 10.0
      },
      {
        "code": "POLYESTE",
        "qty": 4.0,
        "quality": 30.0
      }
    ]
  },
  "GOLFCLUB": {
    "class": "SPORT_EQ",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 65,
    "inputs": [
      {
        "code": "TIMBER",
        "qty": 1.0,
        "quality": 15.0
      },
      {
        "code": "STEEL",
        "qty": 1.0,
        "quality": 20.0
      }
    ]
  },
  "SKATES": {
    "class": "SPORT_EQ",
    "output_qty": 2.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 60,
    "inputs": [
      {
        "code": "LEATHER",
        "qty": 2.0,
        "quality": 20.0
      },
      {
        "code": "RUBBER",
        "qty": 1.0,
        "quality": 10.0
      },
      {
        "code": "STEEL",
        "qty": 1.0,
        "quality": 10.0
      }
    ]
  },
  "CIGARET": {
    "class": "TOBACCO",
    "output_qty": 50.0,
    "prod_speed": 100.0,
    "machine": 3,
    "tech": 50,
    "inputs": [
      {
        "code": "TOBACCO",
        "qty": 1.0,
        "quality": 40.0
      },
      {
        "code": "PAPER",
        "qty": 1.0,
        "quality": 10.0
      }
    ]
  },
  "CIGARS": {
    "class": "TOBACCO",
    "output_qty": 1.0,
    "prod_speed": 100.0,
    "machine": 3,
    "tech": 40,
    "inputs": [
      {
        "code": "TOBACCO",
        "qty": 2.0,
        "quality": 50.0
      },
      {
        "code": "PAPER",
        "qty": 1.0,
        "quality": 10.0
      }
    ]
  },
  "HANDH_G": {
    "class": "TOY",
    "output_qty": 10.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 80,
    "inputs": [
      {
        "code": "ELECOMP",
        "qty": 2.0,
        "quality": 15.0
      },
      {
        "code": "GLASS",
        "qty": 1.0,
        "quality": 2.0
      },
      {
        "code": "PLASTIC",
        "qty": 2.0,
        "quality": 3.0
      }
    ]
  },
  "TOY_CAR": {
    "class": "TOY",
    "output_qty": 8.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 70,
    "inputs": [
      {
        "code": "ELECOMP",
        "qty": 1.0,
        "quality": 20.0
      },
      {
        "code": "PLASTIC",
        "qty": 7.0,
        "quality": 10.0
      }
    ]
  },
  "TOY_DOLL": {
    "class": "TOY",
    "output_qty": 10.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 60,
    "inputs": [
      {
        "code": "COTTON",
        "qty": 2.0,
        "quality": 10.0
      },
      {
        "code": "DYESTUFF",
        "qty": 1.0,
        "quality": 10.0
      },
      {
        "code": "TEXTILE",
        "qty": 2.0,
        "quality": 20.0
      }
    ]
  },
  "VIDEO_G": {
    "class": "TOY",
    "output_qty": 3.0,
    "prod_speed": 100.0,
    "machine": 1,
    "tech": 70,
    "inputs": [
      {
        "code": "ELECOMP",
        "qty": 1.0,
        "quality": 25.0
      },
      {
        "code": "PLASTIC",
        "qty": 2.0,
        "quality": 5.0
      }
    ]
  },
  "E_WATCH": {
    "class": "WATCH",
    "output_qty": 6.0,
    "prod_speed": 100.0,
    "machine": 3,
    "tech": 80,
    "inputs": [
      {
        "code": "GLASS",
        "qty": 1.0,
        "quality": 10.0
      },
      {
        "code": "STEEL",
        "qty": 1.0,
        "quality": 10.0
      }
    ]
  },
  "S_WATCH": {
    "class": "WATCH",
    "output_qty": 30.0,
    "prod_speed": 100.0,
    "machine": 3,
    "tech": 75,
    "inputs": [
      {
        "code": "ELECOMP",
        "qty": 1.0,
        "quality": 15.0
      },
      {
        "code": "GLASS",
        "qty": 1.0,
        "quality": 5.0
      },
      {
        "code": "PLASTIC",
        "qty": 4.0,
        "quality": 5.0
      }
    ]
  }
};
