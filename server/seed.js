const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

// FORCE CONNECT to 'smartcart' database
mongoose.connect('mongodb://localhost:27017/smartcart')
  .then(() => console.log('🔌 Connected to DB for Pexels Fix...'))
  .catch(err => console.log(err));

// Helper function to get stable Pexels URL
const pexels = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;

const products = [
  // --- 1. MOBILES (Using High-Quality Phone Stock) ---
  {
    title: "iPhone 15 Pro",
    category: "Mobiles",
    price: 134900,
    image: pexels(788946), // iPhone on table
    description: "Titanium design. A17 Pro chip.",
    specs: ["256GB", "Titanium Grey"],
    stock: 10
  },
  {
    title: "Samsung Galaxy S24 Ultra",
    category: "Mobiles",
    price: 129999,
    image: pexels(404280), // Sleek smartphone
    description: "Galaxy AI is here.",
    specs: ["Snapdragon 8 Gen 3", "S-Pen"],
    stock: 15
  },
  {
    title: "Google Pixel 8 Pro",
    category: "Mobiles",
    price: 98999,
    image: pexels(1092671), // Modern phone in hand
    description: "The most advanced Pixel cameras.",
    specs: ["Tensor G3", "Obsidian Black"],
    stock: 20
  },
  {
    title: "OnePlus 11 5G",
    category: "Mobiles",
    price: 56999,
    image: pexels(607812), // Phone screen
    description: "Shape of power.",
    specs: ["16GB RAM", "100W Charging"],
    stock: 12
  },
  {
    title: "Nothing Phone (2)",
    category: "Mobiles",
    price: 39999,
    image: pexels(6991279), // Tech/Phone vibe
    description: "Iconic Glyph Interface.",
    specs: ["Glyph Interface", "Nothing OS"],
    stock: 25
  },

  // --- 2. LAPTOPS (Office/Desk setups) ---
  {
    title: "MacBook Air M2",
    category: "Laptops",
    price: 114900,
    image: pexels(18105), // Classic MacBook
    description: "Supercharged by M2. Thin and fast.",
    specs: ["M2 Chip", "Midnight"],
    stock: 10
  },
  {
    title: "Dell XPS 13",
    category: "Laptops",
    price: 145000,
    image: pexels(1229861), // Silver Laptop
    description: "Minimalist design, maximum power.",
    specs: ["Intel i7", "OLED Touch"],
    stock: 8
  },
  {
    title: "HP Spectre x360",
    category: "Laptops",
    price: 135000,
    image: pexels(374074), // Coding on laptop
    description: "2-in-1 Laptop with long battery life.",
    specs: ["Convertible", "OLED"],
    stock: 7
  },
  {
    title: "ASUS ROG Gaming",
    category: "Laptops",
    price: 165000,
    image: pexels(7974), // Tech setup
    description: "World's most powerful 14-inch gaming laptop.",
    specs: ["RTX 4060", "AniMe Matrix"],
    stock: 5
  },
  {
    title: "Lenovo ThinkPad",
    category: "Laptops",
    price: 180000,
    image: pexels(1181244), // Professional working
    description: "The gold standard for business.",
    specs: ["Carbon Fiber", "Intel vPro"],
    stock: 12
  },

  // --- 3. HEADPHONES (Lifestyle Audio) ---
  {
    title: "Sony WH-1000XM5",
    category: "Headphones",
    price: 26990,
    image: pexels(1649771), // Headphones
    description: "Best noise cancellation.",
    specs: ["30hr Battery", "Black"],
    stock: 20
  },
  {
    title: "AirPods Max",
    category: "Headphones",
    price: 59900,
    image: pexels(374703), // Girl with headphones
    description: "High-fidelity audio.",
    specs: ["Space Grey", "20Hr Battery"],
    stock: 10
  },
  {
    title: "Marshall Major IV",
    category: "Headphones",
    price: 11999,
    image: pexels(3394650), // Headphones on table
    description: "Iconic sound, retro look.",
    specs: ["Wireless Charging", "Brown"],
    stock: 25
  },
  {
    title: "JBL Flip 6",
    category: "Headphones",
    price: 9999,
    image: pexels(159613), // Speaker/Audio vibe
    description: "Bold sound for every adventure.",
    specs: ["Waterproof", "Red"],
    stock: 30
  },
  {
    title: "Galaxy Buds Pro",
    category: "Headphones",
    price: 14990,
    image: pexels(3780681), // Earbuds case
    description: "Immersive sound, intelligent ANC.",
    specs: ["Violet", "24-bit Hi-Fi"],
    stock: 18
  },

  // --- 4. WATCHES (Wrist shots) ---
  {
    title: "Apple Watch Series 9",
    category: "Smartwatches",
    price: 41900,
    image: pexels(437037), // Smartwatch
    description: "Smarter. Brighter. Mightier.",
    specs: ["S9 SiP", "Starlight"],
    stock: 20
  },
  {
    title: "Samsung Galaxy Watch",
    category: "Smartwatches",
    price: 29999,
    image: pexels(277390), // Watch on wrist
    description: "Your wellness journey starts here.",
    specs: ["Sleep Coach", "Black"],
    stock: 25
  },
  {
    title: "Garmin Fenix 7",
    category: "Smartwatches",
    price: 89990,
    image: pexels(1108099), // Sporty watch
    description: "Ultimate multisport GPS watch.",
    specs: ["Solar Charging", "Titanium"],
    stock: 5
  },
  {
    title: "Fossil Gen 6",
    category: "Smartwatches",
    price: 23995,
    image: pexels(280250), // Classic watch face
    description: "Way more, way faster.",
    specs: ["Wear OS", "Leather"],
    stock: 15
  },
  {
    title: "Fitbit Versa 4",
    category: "Smartwatches",
    price: 19999,
    image: pexels(51011), // Digital watch
    description: "Get better results from your workout.",
    specs: ["6+ Day Battery", "Pink"],
    stock: 30
  },

  // --- 5. SHOES (Sneakers) ---
  {
    title: "Nike Air Jordan 1",
    category: "Shoes",
    price: 16995,
    image: pexels(2529148), // Sneakers on street
    description: "The classic high-top sneaker.",
    specs: ["Leather", "Red/White"],
    stock: 20
  },
  {
    title: "Adidas Ultraboost",
    category: "Shoes",
    price: 18999,
    image: pexels(1598505), // Cool sneakers
    description: "Epic energy. Lightest ever.",
    specs: ["Boost Sole", "White"],
    stock: 25
  },
  {
    title: "Vans Old Skool",
    category: "Shoes",
    price: 5499,
    image: pexels(1598508), // Casual shoes
    description: "Classic skate shoe.",
    specs: ["Canvas", "Black"],
    stock: 30
  },
  {
    title: "Converse Chuck Taylor",
    category: "Shoes",
    price: 4499,
    image: pexels(267320), // Shoe close up
    description: "Most iconic sneaker in the world.",
    specs: ["High Top", "Black"],
    stock: 35
  },
  {
    title: "Puma RS-X",
    category: "Shoes",
    price: 8999,
    image: pexels(298863), // Men's shoes
    description: "Extreme design.",
    specs: ["Chunky Sole", "Multi-color"],
    stock: 18
  },

  // --- 6. CAMERAS & HOME ---
  {
    title: "Sony Alpha A7 IV",
    category: "Cameras",
    price: 214990,
    image: pexels(51383), // Camera lens
    description: "Full-frame hybrid.",
    specs: ["33MP", "4K Video"],
    stock: 5
  },
  {
    title: "GoPro Hero 12",
    category: "Cameras",
    price: 44990,
    image: pexels(212372), // Action cam style
    description: "Unbelievable image quality.",
    specs: ["Waterproof", "5.3K Video"],
    stock: 30
  },
  {
    title: "Coffee Maker",
    category: "Home",
    price: 14999,
    image: pexels(302899), // Espresso pouring
    description: "Barista style coffee at home.",
    specs: ["Espresso", "Black"],
    stock: 15
  },
  {
    title: "Desk Lamp",
    category: "Home",
    price: 2499,
    image: pexels(1112598), // Desk lamp
    description: "Minimalist design.",
    specs: ["LED", "Black"],
    stock: 45
  },
  {
    title: "Dyson Vacuum",
    category: "Home",
    price: 45000,
    image: pexels(4107284), // Clean home/cleaning
    description: "Deep cleaning power.",
    specs: ["Cordless", "V15"],
    stock: 8
  }
];

const seedDB = async () => {
  try {
    console.log("💥 Deleting ALL data...");
    await Product.deleteMany({});
    
    console.log("🌱 Inserting 30 Pexels-Powered Products...");
    await Product.insertMany(products);
    
    console.log(`✅ SUCCESS! All products updated with STABLE images.`);
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

seedDB();