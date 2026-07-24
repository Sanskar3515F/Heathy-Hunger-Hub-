// =============================================================================
// HEALTHY & HUNGER HUB — CENTRAL BUSINESS DATA
// =============================================================================
// HOW TO USE THIS FILE:
// Every field below is marked as either VERIFIED (confirmed from the business's
// real Google Maps listing) or PLACEHOLDER (not yet available — replace before
// launch). Search this file for "TODO" to find every place that needs a real
// value. Nothing marked PLACEHOLDER is shown to visitors as if it were real —
// the UI visibly labels it as "coming soon" / "add on Google" etc.
// =============================================================================

export const business = {
  name: "Healthy & Hunger Hub", // VERIFIED
  tagline: "Healthy Choices. Hungry Cravings. One Hub.",
  category: "Food & Beverage — Local Eatery", // TODO: confirm exact category (e.g. "Quick Service Restaurant", "Cafe", "Cloud Kitchen") from listing

  // ---------------------------------------------------------------------------
  // LOCATION — VERIFIED via Google Maps share-link redirect metadata
  // ---------------------------------------------------------------------------
  address: {
    line1: "Sebi Rd", // VERIFIED
    area: "Rasayani, Navin Posari", // VERIFIED
    state: "Maharashtra",
    pincode: "410222", // VERIFIED
    full: "Sebi Rd, Rasayani, Navin Posari, Maharashtra 410222",
    landmark: "", // TODO: add a nearby landmark (e.g. "Near XYZ School / Bus Stop") — not yet verified
  },

  // Real Google Place identifiers pulled directly from the listing's own
  // redirect data — this is what makes "Get Directions" and the map embed
  // point to the *actual* verified location rather than a guessed address.
  google: {
    placeId: "0x3be7e5004125dc81:0xfdaec5529bbe7a23", // VERIFIED
    cid: "18279764896134363683", // VERIFIED (decimal form of the place CID)
    mapsUrl: "https://www.google.com/maps?cid=18279764896134363683", // VERIFIED — opens the real listing
    mapsEmbedUrl: "https://www.google.com/maps?cid=18279764896134363683&output=embed", // VERIFIED
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Healthy%20%26%20Hunger%20Hub%2C%20Sebi%20Rd%2C%20Rasayani%2C%20Navin%20Posari%2C%20Maharashtra%20410222&destination_place_id=", // VERIFIED address-based fallback
    reviewsUrl: "https://www.google.com/maps?cid=18279764896134363683", // VERIFIED — "View on Google" links here
  },

  // ---------------------------------------------------------------------------
  // CONTACT — NOT YET VERIFIED (Maps listing photos/details are JS-rendered
  // and could not be read automatically). Replace these before launch.
  // ---------------------------------------------------------------------------
  contact: {
    phone: "8308121672", // TODO: add phone number, e.g. "+91 98765 43210"
    phoneDisplay: "+91 83081 21672",
    whatsapp: "918308121672",
    whatsappMessage:
      "Hi Healthy & Hunger Hub! I saw your website and want to place an order. Please share today's menu, prices, and available specials.",
    email: "", // TODO (optional)
  },

  // ---------------------------------------------------------------------------
  // HOURS — NOT YET VERIFIED
  // ---------------------------------------------------------------------------
  hours: {
    verified: false,
    // TODO: replace with real hours once confirmed, e.g. { day: "Mon–Sun", time: "11:00 AM – 10:30 PM" }
    schedule: [
      { day: "Mon–Sat", time: "08:00 AM – 01:00 PM & 05:00 PM – 11:00 PM" },
      { day: "Sunday", time: "05:00 PM – 11:00 PM" },
    ],
    // "Open now" logic is intentionally NOT computed live because we don't
    // have verified hours yet — the UI shows a neutral "Check hours on Google" state instead.
  },

  // ---------------------------------------------------------------------------
  // RATING / REVIEWS — NOT YET VERIFIED
  // ---------------------------------------------------------------------------
  rating: {
    verified: false,
    value: null as number | null, // TODO: add real rating e.g. 4.3
    count: null as number | null, // TODO: add real review count
  },

  // Real reviews must be pasted in verbatim (with reviewer's public display
  // name) from the Google listing. Do NOT invent entries here.
  reviews: [] as { name: string; rating: number; text: string; date?: string }[],

  // ---------------------------------------------------------------------------
  // SERVICE OPTIONS — NOT YET VERIFIED
  // ---------------------------------------------------------------------------
  services: {
    dineIn: null as boolean | null, // TODO
    takeaway: null as boolean | null, // TODO
    delivery: null as boolean | null, // TODO
  },

  social: {
    instagram: "https://www.instagram.com/healt.hyhungerhub", // VERIFIED
    facebook: "", // TODO (optional)
  },

  owner: {
    name: "Sandesh Mundhe",
    role: "Founder, Healthy & Hunger Hub",
    photo: "/images/owner/owner1.jpg",
    message:
      "Sandesh Mundhe is the owner of Healthy & Hunger Hub, bringing his care for good food, friendly service, and local customers into the way the place is run every day.",
  },
};

// =============================================================================
// MENU — SAMPLE / EDITABLE PLACEHOLDER DATA
// =============================================================================
// The real menu could not be extracted from the listing. Every item below is
// a clearly-marked SAMPLE so the page has a realistic, working layout you can
// edit in place. Replace `name`, `description`, `price`, and `image` with real
// items. Keep `category` as one of: "healthy" | "hungry" | "drinks" | "snacks"
// Set `isSample: false` once you've replaced an item with a real one.
// =============================================================================

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
  isSample?: boolean;
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
  chia_seeds: { name: "Chia Seeds Bowl", image: "/images/menu/cheaseed.jpg", description: "Superfood chia seed bowls" }
};

export const menuItems: MenuItem[] = [
  // --- SANDWICHES ---
  {
    id: "toast-sandwich", name: "Toast Sandwich", description: "Classic veg toast sandwich", price: "₹ 50", category: "sandwiches", image: "/images/menu/sandwich.jpg", veg: true
  },
  {
    id: "cheese-toast-sandwich", name: "Cheese Toast Sandwich", description: "Loaded with melted cheese", price: "₹ 70", category: "sandwiches", image: "/images/menu/chesesandwich.jpg", veg: true
  },
  {
    id: "paneer-sandwich", name: "Paneer Sandwich", description: "Delicious paneer filling", price: "₹ 99", category: "sandwiches", image: "/images/menu/pannersandwich.jpg", veg: true
  },
  
  // --- BURGERS ---
  {
    id: "burger-peri-peri", name: "Burger With Peri Peri", description: "Spicy peri peri burger", price: "₹ 50", category: "burgers", image: "/images/menu/periperibuger.jpg", veg: true
  },
  {
    id: "burger-cheese", name: "Burger With Cheese", description: "Classic cheese veg burger", price: "₹ 70", category: "burgers", image: "/images/menu/burger.jpg", veg: true
  },

  // --- FRIES ---
  {
    id: "plain-fries", name: "Plain Fries", description: "Golden plain fries", price: "₹ 50", category: "fries", image: "/images/menu/fries.jpg", veg: true
  },
  {
    id: "peri-peri-fries", name: "Peri Peri Fries", description: "Spicy peri peri seasoned fries", price: "₹ 60", category: "fries", image: "/images/menu/Peri Peri Fries.jpg", veg: true
  },
  {
    id: "cheese-fries", name: "Cheese Fries", description: "Fries loaded with cheese sauce", price: "₹ 80", category: "fries", image: "/images/menu/Cheese Fries.jpg", veg: true
  },

  // --- MAGGI ---
  {
    id: "masala-maggie", name: "Masala Maggie", description: "Classic spicy maggi", price: "₹ 49", category: "maggi", image: "/images/menu/maggi.jpg", veg: true
  },
  {
    id: "cheese-maggie", name: "Cheese Maggie", description: "Cheesy and creamy maggi", price: "₹ 79", category: "maggi", image: "/images/menu/Cheese Maggie.jpg", veg: true
  },

  // --- CHAAT ---
  {
    id: "corn-chat", name: "Corn Chat", description: "Tangy sweet corn chaat", price: "₹ 30", category: "chaat", image: "/images/menu/Corn Chat.jpg", veg: true
  },
  {
    id: "cheese-corn-chat", name: "Cheese Corn Chat", description: "Corn chaat topped with cheese", price: "₹ 50", category: "chaat", image: "/images/menu/corn.jpg", veg: true
  },

  // --- CHIPS (BYOB) ---
  {
    id: "byob-chips", name: "BYOB Chips", description: "Build your own bag chips", price: "₹ 50", category: "chips", image: "/images/menu/BYOB.jpg", veg: true
  },
  {
    id: "panner-byob-chips", name: "Panner BYOB Chips", description: "Paneer loaded BYOB chips", price: "₹ 80", category: "chips", image: "/images/menu/byobnew.JPG", veg: true
  },
  {
    id: "jumbo-byob-chips", name: "Jumbo BYOB Chips", description: "Extra large BYOB chips", price: "₹ 89", category: "chips", image: "/images/menu/byobnew.JPG", veg: true
  },

  // --- SPIRAL POTATO ---
  {
    id: "peri-peri-spiral", name: "Peri Peri Spiral Potatoes", description: "Crispy spiral potatoes with peri peri", price: "₹ 50", category: "potato", image: "/images/menu/spiralpotato.jpg", veg: true
  },
  {
    id: "loaded-spiral", name: "Loaded Spiral Potatoe", description: "Fully loaded spiral potatoes", price: "₹ 70", category: "potato", image: "/images/menu/loadedpoptato.jpg", veg: true
  },

  // --- MOMOS ---
  {
    id: "veg-momos-fry", name: "Veg Momos Fry", description: "Crispy fried veg momos (4 Pcs)", price: "₹ 50", category: "momos", image: "/images/menu/momo.jpg", veg: true
  },
  {
    id: "paneer-momos-fry", name: "Paneer Momos Fry", description: "Fried paneer filled momos (4 Pcs)", price: "₹ 60", category: "momos", image: "/images/menu/Paneer Momos Fry.jpg", veg: true
  },
  {
    id: "cheese-momos-fry", name: "Cheese Momos Fry", description: "Fried momos with cheese filling (4 Pcs)", price: "₹ 70", category: "momos", image: "/images/menu/Cheese Momos Fry.jpg", veg: true
  },

  // --- OATS ---
  {
    id: "peanut-butter-oats", name: "Peanut Butter Banana Oats", description: "Oats, peanut butter, milk, banana, honey, watermelon seeds, til", price: "₹ 70", category: "oats", image: "/images/menu/oats.jpg", veg: true
  },
  {
    id: "dry-fruits-oats", name: "Dry Fruits Oats Bowl", description: "Oats, milk, almond, cashew, raisins, honey, pumpkin seed, alsi, banana", price: "₹ 80", category: "oats", image: "/images/menu/Dry Fruits Oats Bowl.jpg", veg: true
  },
  {
    id: "chocolate-oats", name: "Chocolate Oats Bowl", description: "Oats, milk, coco powder, banana, dark chocolate, honey, pump seeds, til, alsi", price: "₹ 70", category: "oats", image: "/images/menu/Chocolate Oats Bowl.jpg", veg: true
  },
  {
    id: "whey-protein-oats", name: "Whey Protein Oats Bowl", description: "Whey protein, oats, milk, peanut butter, sunflower seeds, til, banana, honey", price: "₹ 155", category: "oats", image: "/images/menu/Whey Protein Oats Bowl.jpg", veg: true
  },

  // --- BREADS ---
  {
    id: "protein-powder-bread", name: "Protein Powder Bread", description: "Brown bread, peanut butter, honey, banana, pumpkin seed, sunflower seeds, alsi, til", price: "₹ 70", category: "breads", image: "/images/menu/Brown-Bread.jpg", veg: true
  },
  {
    id: "dark-chocolate-bread", name: "Dark Chocolate Bread", description: "Brown bread, dark chocolate, honey, banana, almond, cashews, raisins", price: "₹ 80", category: "breads", image: "/images/menu/brownbreadnew.JPG", veg: true
  },

  // --- SPROUTS ---
  {
    id: "plain-sprouts", name: "Plain Sprouts", description: "3 types sprouts, vegetables, peanut", price: "₹ 40", category: "sprouts", image: "/images/menu/spourt.jpg", veg: true, bestseller: true
  },
  {
    id: "special-sprouts", name: "Special Sprouts", description: "3 types sprouts, vegetables, mix seeds, peanut, raisins", price: "₹ 60", category: "sprouts", image: "/images/menu/specialsprots.jpg", veg: true
  },
  {
    id: "sprouts-paneer", name: "Sprouts With Panner", description: "3 types sprouts, panner, vegetables, mix seeds, peanut, raisins", price: "₹ 90", category: "sprouts", image: "/images/menu/sprotwithpanner.jpg", veg: true
  },

  // --- SHAKES ---
  {
    id: "whey-shake", name: "Whey Protein Shake", description: "Whey protein, water", price: "₹ 111", category: "shakes", image: "/images/menu/whey-protein.png", veg: true
  },
  {
    id: "seeds-whey-shake", name: "Seeds Whey Protein Shake", description: "Whey protein, peanut butter, milk, banana, honey, pumpkin seeds, sunflower seeds", price: "₹ 149", category: "shakes", image: "/images/menu/seedproteinshake.jpg", veg: true
  },
  {
    id: "dry-fruits-whey-shake", name: "Dry Fruits Whey Protein Shake", description: "Whey protein, milk, banana, almond, cashew, raisins", price: "₹ 159", category: "shakes", image: "/images/menu/Dry Fruits Whey Protein Shake.jpg", veg: true
  },
  {
    id: "milk-shake-smoothie", name: "Milk Shake Smoothie", description: "Milk, peanut butter, banana, honey, almond, cashew, raisins, pumpkin seeds, sunflower seeds", price: "₹ 99", category: "shakes", image: "/images/menu/smoothie.png", veg: true
  },

  // --- CHIA SEEDS ---
  {
    id: "chia-dry-fruits", name: "Chia Seeds With Dry Fruits", description: "Chia seeds, milk, banana, honey, almond, cashew, raisins, til", price: "₹ 70", category: "chia_seeds", image: "/images/menu/cheaseed.jpg", veg: true
  },
  {
    id: "chia-dark-chocolate", name: "Chia Seeds With Dark Chocolate", description: "Chia seeds, milk, banana, dark chocolate, coco powder, sunflower seeds, pumpkin seeds, magaj", price: "₹ 75", category: "chia_seeds", image: "/images/menu/Chia Seeds With Dark Chocolate.jpg", veg: true
  }
];

// =============================================================================
// GALLERY — PLACEHOLDER SLOTS
// =============================================================================
// Drop real, authorized photo files into public/images/gallery/ using these
// exact filenames (or update the `src` values to match whatever you name
// them). Recommended sizes: 1200x1200 for square, 1200x1600 for portrait.
// =============================================================================

export interface GalleryImage {
  src: string;
  alt: string;
  category: "food" | "shop" | "interior" | "customers";
  size: "square" | "wide" | "tall";
}

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/food-1.png", alt: "Placeholder — add a real food photo here", category: "food", size: "wide" },
  { src: "/images/gallery/shop-1.png", alt: "Placeholder — add a real storefront photo here", category: "shop", size: "tall" },
  { src: "/images/gallery/food-2.png", alt: "Placeholder — add a real food photo here", category: "food", size: "square" },
  { src: "/images/gallery/interior-1.png", alt: "Placeholder — add a real interior photo here", category: "interior", size: "square" },
  { src: "/images/gallery/food-3.png", alt: "Placeholder — add a real food photo here", category: "food", size: "square" },
  { src: "/images/gallery/shop-2.png", alt: "Placeholder — add a real storefront photo here", category: "shop", size: "wide" },
];
