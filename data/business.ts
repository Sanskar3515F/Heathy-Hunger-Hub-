export const business = {
  name: "Healthy & Hunger Hub",
  tagline: "Healthy Choices. Hungry Cravings. One Hub.",
  category: "Food & Beverage — Local Eatery",
  address: {
    line1: "Sebi Rd",
    area: "Rasayani, Navin Posari",
    state: "Maharashtra",
    pincode: "410222",
    full: "Sebi Rd, Rasayani, Navin Posari, Maharashtra 410222",
    landmark: "",
  },
  google: {
    placeId: "0x3be7e5004125dc81:0xfdaec5529bbe7a23",
    cid: "18279764896134363683",
    mapsUrl: "https://www.google.com/maps?cid=18279764896134363683",
    mapsEmbedUrl: "https://www.google.com/maps?cid=18279764896134363683&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Healthy%20%26%20Hunger%20Hub%2C%20Sebi%20Rd%2C%20Rasayani%2C%20Navin%20Posari%2C%20Maharashtra%20410222&destination_place_id=",
    reviewsUrl: "https://www.google.com/maps?cid=18279764896134363683",
  },
  contact: {
    phone: "8308121672",
    phoneDisplay: "+91 83081 21672",
    whatsapp: "918308121672",
    whatsappMessage: "Hi Healthy & Hunger Hub! I saw your website and want to place an order. Please share today's menu, prices, and available specials.",
    email: "",
  },
  hours: {
    verified: true,
    schedule: [
      { day: "Mon–Sat", time: "08:00 AM – 01:00 PM & 05:00 PM – 11:00 PM" },
      { day: "Sunday", time: "05:00 PM – 11:00 PM" },
    ],
  },
  rating: {
    verified: false,
    value: null as number | null,
    count: null as number | null,
  },
  reviews: [] as { name: string; rating: number; text: string; date?: string }[],
  services: {
    dineIn: null as boolean | null,
    takeaway: null as boolean | null,
    delivery: null as boolean | null,
  },
  social: {
    instagram: "https://www.instagram.com/healt.hyhungerhub",
    facebook: "",
  },
  owner: {
    name: "Sandesh Mundhe",
    role: "Founder, Healthy & Hunger Hub",
    photo: "/images/owner/owner1.jpg",
    message: "Sandesh Mundhe is the owner of Healthy & Hunger Hub, bringing his care for good food, friendly service, and local customers into the way the place is run every day.",
  },
};

export type MenuCategory = "sandwiches" | "burgers" | "fries" | "maggi" | "chaat" | "chips" | "potato" | "momos" | "oats" | "breads" | "sprouts" | "shakes" | "chia_seeds";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
  veg: boolean | null;
  bestseller?: boolean;
}

export const menuCategoriesMeta: Record<MenuCategory, { name: string; image: string; description: string }> = {
  sandwiches: { name: "Sandwiches", image: "/images/menu/sandwich.jpg", description: "Grilled & loaded sandwiches" },
  burgers: { name: "Burgers", image: "/images/menu/burger.jpg", description: "Juicy & cheesy burgers" },
  fries: { name: "Fries", image: "/images/menu/fries.jpg", description: "Crispy golden potato fries" },
  maggi: { name: "Maggi", image: "/images/menu/maggi.jpg", description: "Hot & spicy comfort noodles" },
  chaat: { name: "Chaat", image: "/images/menu/corn.jpg", description: "Tangy & spicy street style chaat" },
  chips: { name: "BYOB Chips", image: "/images/menu/BYOB.jpg", description: "Build Your Own Bag chips" },
  potato: { name: "Spiral Potato", image: "/images/menu/spiralpotato.jpg", description: "Crispy spiral cut potatoes" },
  momos: { name: "Momos Fry", image: "/images/menu/momo.jpg", description: "Crispy fried momos (4 Pcs)" },
  oats: { name: "Protein Oats Bowl", image: "/images/menu/oats.jpg", description: "Healthy & filling oats bowls" },
  breads: { name: "Brown Breads", image: "/images/menu/Brown-Bread.jpg", description: "Nutritious brown bread meals" },
  sprouts: { name: "Healthy Sprouts", image: "/images/menu/spourt.jpg", description: "Fresh & wholesome sprouts" },
  shakes: { name: "Protein Shake", image: "/images/menu/whey-protein.png", description: "High-protein recovery shakes" },
  chia_seeds: { name: "Chia Seeds Bowl", image: "/images/menu/cheaseed.jpg", description: "Superfood chia seed bowls" },
};

export const menuItems: MenuItem[] = [
  { id: "toast-sandwich", name: "Toast Sandwich", description: "Classic veg toast sandwich", price: "₹ 50", category: "sandwiches", image: "/images/menu/sandwich.jpg", veg: true },
  { id: "cheese-toast-sandwich", name: "Cheese Toast Sandwich", description: "Loaded with melted cheese", price: "₹ 70", category: "sandwiches", image: "/images/menu/chesesandwich.jpg", veg: true },
  { id: "paneer-sandwich", name: "Paneer Sandwich", description: "Delicious paneer filling", price: "₹ 99", category: "sandwiches", image: "/images/menu/pannersandwich.jpg", veg: true },

  { id: "burger-peri-peri", name: "Burger With Peri Peri", description: "Spicy peri peri burger", price: "₹ 50", category: "burgers", image: "/images/menu/periperibuger.jpg", veg: true },
  { id: "burger-cheese", name: "Burger With Cheese", description: "Classic cheese veg burger", price: "₹ 70", category: "burgers", image: "/images/menu/burger.jpg", veg: true },

  { id: "plain-fries", name: "Plain Fries", description: "Golden plain fries", price: "₹ 50", category: "fries", image: "/images/menu/fries.jpg", veg: true },
  { id: "peri-peri-fries", name: "Peri Peri Fries", description: "Spicy peri peri seasoned fries", price: "₹ 60", category: "fries", image: "/images/menu/Peri Peri Fries.jpg", veg: true },
  { id: "cheese-fries", name: "Cheese Fries", description: "Fries loaded with cheese sauce", price: "₹ 80", category: "fries", image: "/images/menu/Cheese Fries.jpg", veg: true },

  { id: "masala-maggie", name: "Masala Maggie", description: "Classic spicy maggi", price: "₹ 49", category: "maggi", image: "/images/menu/maggi.jpg", veg: true },
  { id: "cheese-maggie", name: "Cheese Maggie", description: "Cheesy and creamy maggi", price: "₹ 79", category: "maggi", image: "/images/menu/Cheese Maggie.jpg", veg: true },

  { id: "corn-chat", name: "Corn Chat", description: "Tangy sweet corn chaat", price: "₹ 30", category: "chaat", image: "/images/menu/Corn Chat.jpg", veg: true },
  { id: "cheese-corn-chat", name: "Cheese Corn Chat", description: "Corn chaat topped with cheese", price: "₹ 50", category: "chaat", image: "/images/menu/corn.jpg", veg: true },

  { id: "byob-chips", name: "BYOB Chips", description: "Build your own bag chips", price: "₹ 50", category: "chips", image: "/images/menu/BYOB.jpg", veg: true },
  { id: "panner-byob-chips", name: "Panner BYOB Chips", description: "Paneer loaded BYOB chips", price: "₹ 80", category: "chips", image: "/images/menu/byobnew.JPG", veg: true },
  { id: "jumbo-byob-chips", name: "Jumbo BYOB Chips", description: "Extra large BYOB chips", price: "₹ 89", category: "chips", image: "/images/menu/byobnew.JPG", veg: true },

  { id: "peri-peri-spiral", name: "Peri Peri Spiral Potatoes", description: "Crispy spiral potatoes with peri peri", price: "₹ 50", category: "potato", image: "/images/menu/spiralpotato.jpg", veg: true },
  { id: "loaded-spiral", name: "Loaded Spiral Potato", description: "Fully loaded spiral potatoes", price: "₹ 70", category: "potato", image: "/images/menu/loadedpoptato.jpg", veg: true },

  { id: "veg-momos-fry", name: "Veg Momos Fry", description: "Crispy fried veg momos (4 Pcs)", price: "₹ 50", category: "momos", image: "/images/menu/momo.jpg", veg: true },
  { id: "paneer-momos-fry", name: "Paneer Momos Fry", description: "Fried paneer filled momos (4 Pcs)", price: "₹ 60", category: "momos", image: "/images/menu/Paneer Momos Fry.jpg", veg: true },
  { id: "cheese-momos-fry", name: "Cheese Momos Fry", description: "Fried momos with cheese filling (4 Pcs)", price: "₹ 70", category: "momos", image: "/images/menu/Cheese Momos Fry.jpg", veg: true },

  { id: "peanut-butter-oats", name: "Peanut Butter Banana Oats", description: "Oats, peanut butter, milk, banana, honey, watermelon seeds, til", price: "₹ 70", category: "oats", image: "/images/menu/oats.jpg", veg: true },
  { id: "dry-fruits-oats", name: "Dry Fruits Oats Bowl", description: "Oats, milk, almond, cashew, raisins, honey, pumpkin seed, alsi, banana", price: "₹ 80", category: "oats", image: "/images/menu/Dry Fruits Oats Bowl.jpg", veg: true },
  { id: "chocolate-oats", name: "Chocolate Oats Bowl", description: "Oats, milk, coco powder, banana, dark chocolate, honey, pump seeds, til, alsi", price: "₹ 70", category: "oats", image: "/images/menu/Chocolate Oats Bowl.jpg", veg: true },
  { id: "whey-protein-oats", name: "Whey Protein Oats Bowl", description: "Whey protein, oats, milk, peanut butter, sunflower seeds, til, banana, honey", price: "₹ 155", category: "oats", image: "/images/menu/Whey Protein Oats Bowl.jpg", veg: true },

  { id: "protein-powder-bread", name: "Protein Powder Bread", description: "Brown bread, peanut butter, honey, banana, pumpkin seed, sunflower seeds, alsi, til", price: "₹ 70", category: "breads", image: "/images/menu/Brown-Bread.jpg", veg: true },
  { id: "dark-chocolate-bread", name: "Dark Chocolate Bread", description: "Brown bread, dark chocolate, honey, banana, almond, cashews, raisins", price: "₹ 80", category: "breads", image: "/images/menu/brownbreadnew.JPG", veg: true },

  { id: "plain-sprouts", name: "Plain Sprouts", description: "3 types sprouts, vegetables, peanut", price: "₹ 40", category: "sprouts", image: "/images/menu/spourt.jpg", veg: true, bestseller: true },
  { id: "special-sprouts", name: "Special Sprouts", description: "3 types sprouts, vegetables, mix seeds, peanut, raisins", price: "₹ 60", category: "sprouts", image: "/images/menu/specialsprots.jpg", veg: true },
  { id: "sprouts-paneer", name: "Sprouts With Panner", description: "3 types sprouts, panner, vegetables, mix seeds, peanut, raisins", price: "₹ 90", category: "sprouts", image: "/images/menu/sprotwithpanner.jpg", veg: true },

  { id: "whey-shake", name: "Whey Protein Shake", description: "Whey protein, water", price: "₹ 111", category: "shakes", image: "/images/menu/whey-protein.png", veg: true },
  { id: "seeds-whey-shake", name: "Seeds Whey Protein Shake", description: "Whey protein, peanut butter, milk, banana, honey, pumpkin seeds, sunflower seeds", price: "₹ 149", category: "shakes", image: "/images/menu/seedproteinshake.jpg", veg: true },
  { id: "dry-fruits-whey-shake", name: "Dry Fruits Whey Protein Shake", description: "Whey protein, milk, banana, almond, cashew, raisins", price: "₹ 159", category: "shakes", image: "/images/menu/Dry Fruits Whey Protein Shake.jpg", veg: true },
  { id: "milk-shake-smoothie", name: "Milk Shake Smoothie", description: "Milk, peanut butter, banana, honey, almond, cashew, raisins, pumpkin seeds, sunflower seeds", price: "₹ 99", category: "shakes", image: "/images/menu/smoothie.png", veg: true },

  { id: "chia-dry-fruits", name: "Chia Seeds With Dry Fruits", description: "Chia seeds, milk, banana, honey, almond, cashew, raisins, til", price: "₹ 70", category: "chia_seeds", image: "/images/menu/cheaseed.jpg", veg: true },
  { id: "chia-dark-chocolate", name: "Chia Seeds With Dark Chocolate", description: "Chia seeds, milk, banana, dark chocolate, coco powder, sunflower seeds, pumpkin seeds, magaj", price: "₹ 75", category: "chia_seeds", image: "/images/menu/Chia Seeds With Dark Chocolate.jpg", veg: true },
];
