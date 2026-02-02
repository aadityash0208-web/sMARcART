// client/src/pages/products.js

// =====================================================================
// MASTER CATALOG - REAL PARENT PRODUCTS (With Verified Images)
// =====================================================================

const masterCatalog = [
  // --- 1. MOBILES (Smartphones) ---
  {
    baseName: "Apple iPhone 15 Pro",
    brand: "Apple",
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=80",
    basePrice: 134900,
    rating: 4.8,
    desc: "Forged in titanium. Features the groundbreaking A17 Pro chip and customizable Action button.",
    variants: ["Natural Titanium", "Blue Titanium", "Black Titanium", "White Titanium", "Silver", "Gold", "Deep Purple", "Space Black"]
  },
  {
    baseName: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1706606991536-e3204910385e?auto=format&fit=crop&w=500&q=80",
    basePrice: 129999,
    rating: 4.7,
    desc: "Galaxy AI is here. Epic processing power and a built-in S-Pen.",
    variants: ["Titanium Grey", "Titanium Violet", "Titanium Black", "Titanium Yellow", "Cream", "Lavender", "Green", "Phantom Black"]
  },
  {
    baseName: "Google Pixel 8 Pro",
    brand: "Google",
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1696321743526-2775f284e1b1?auto=format&fit=crop&w=500&q=80",
    basePrice: 106999,
    rating: 4.5,
    desc: "The AI-powered phone from Google. Pro-level camera system.",
    variants: ["Bay Blue", "Obsidian", "Porcelain", "Hazel", "Rose", "Mint", "Charcoal", "Snow"]
  },
  {
    baseName: "OnePlus 12",
    brand: "OnePlus",
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1706038816999-73df9f688034?auto=format&fit=crop&w=500&q=80",
    basePrice: 64999,
    rating: 4.6,
    desc: "Smooth Beyond Belief. Snapdragon 8 Gen 3 processor.",
    variants: ["Flowy Emerald", "Silky Black", "Glacial White", "Eternal Green", "Titan Black", "Moonstone", "Stellar Black", "Jupiter Rock"]
  },

  // --- 2. LAPTOPS ---
  {
    baseName: "MacBook Air M3",
    brand: "Apple",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=500&q=80",
    basePrice: 114900,
    rating: 4.9,
    desc: "Lean. Mean. M3 Machine. The world's most popular laptop.",
    variants: ["Midnight", "Starlight", "Space Grey", "Silver", "Gold", "Rose Gold", "Matte Black", "Classic Silver"]
  },
  {
    baseName: "Dell XPS 15",
    brand: "Dell",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=500&q=80",
    basePrice: 185000,
    rating: 4.5,
    desc: "Immersive InfinityEdge display. Powerful performance for creators.",
    variants: ["Platinum Silver", "Frost White", "Black", "Titanium Grey", "Graphite", "Carbon Fiber", "Aluminum", "Arctic White"]
  },
  {
    baseName: "ASUS ROG Zephyrus G14",
    brand: "ASUS",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80",
    basePrice: 149990,
    rating: 4.7,
    desc: "The world's most powerful 14-inch gaming laptop.",
    variants: ["Moonlight White", "Eclipse Grey", "Holographic White", "Matte Black", "AniMe Matrix", "Cyber Grey", "Electric Blue", "Neon Green"]
  },

  // --- 3. SMARTWATCHES ---
  {
    baseName: "Apple Watch Series 9",
    brand: "Apple",
    category: "Smartwatches",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80",
    basePrice: 41900,
    rating: 4.8,
    desc: "Smarter. Brighter. Mightier. Double tap gesture control.",
    variants: ["Midnight", "Starlight", "Silver", "Red", "Pink", "Green", "Blue", "Graphite"]
  },
  {
    baseName: "Samsung Galaxy Watch 6",
    brand: "Samsung",
    category: "Smartwatches",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=500&q=80",
    basePrice: 29999,
    rating: 4.6,
    desc: "Know your health inside out. The largest screen on a Galaxy Watch.",
    variants: ["Graphite", "Gold", "Silver", "Black", "Cream", "Icy Blue", "Mint", "Lavender"]
  },
  {
    baseName: "Fossil Gen 6",
    brand: "Fossil",
    category: "Smartwatches",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=500&q=80",
    basePrice: 18495,
    rating: 4.3,
    desc: "Classic design. Modern tech. Wear OS by Google.",
    variants: ["Smoke Stainless", "Brown Leather", "Black Silicone", "Rose Gold", "Gunmetal", "Blue Leather", "Tan Leather", "Silver Mesh"]
  },

  // --- 4. ELECTRONICS ACCESSORIES (Trimmers, Chargers, Earpods) ---
  {
    baseName: "Sony WH-1000XM5",
    brand: "Sony",
    category: "Electronics Accessories",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80",
    basePrice: 26990,
    rating: 4.9,
    desc: "Industry-leading noise cancelling headphones.",
    variants: ["Black", "Silver", "Midnight Blue", "Platinum", "Graphite", "White", "Beige", "Matte Grey"]
  },
  {
    baseName: "Apple AirPods Pro",
    brand: "Apple",
    category: "Electronics Accessories",
    image: "https://images.unsplash.com/photo-1629367494173-c78a56567877?auto=format&fit=crop&w=500&q=80",
    basePrice: 24900,
    rating: 4.8,
    desc: "Active Noise Cancellation. Transparency mode.",
    variants: ["White", "Engraved", "Matte Black (Custom)", "Carbon Fiber (Custom)", "Red (Custom)", "Blue (Custom)", "Pink (Custom)", "Yellow (Custom)"]
  },
  {
    baseName: "Philips Multi-Grooming Kit",
    brand: "Philips",
    category: "Electronics Accessories",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=500&q=80",
    basePrice: 1999,
    rating: 4.4,
    desc: "9-in-1 face, hair and body trimmer. Self-sharpening blades.",
    variants: ["Black", "Silver", "Blue", "Grey", "Chrome", "Neon Green", "Orange", "Matte Black"]
  },
  {
    baseName: "Anker PowerCore 20000mAh",
    brand: "Anker",
    category: "Electronics Accessories",
    image: "https://images.unsplash.com/photo-1609560029880-432a5146c29f?auto=format&fit=crop&w=500&q=80",
    basePrice: 3999,
    rating: 4.6,
    desc: "Ultra-high capacity portable charger. Fast charging technology.",
    variants: ["Black", "White", "Blue", "Red", "Camo", "Grey", "Pink", "Mint"]
  },

  // --- 5. CLOTHING (Men/Women) ---
  {
    baseName: "Levi's Denim Jacket",
    brand: "Levi's",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=500&q=80",
    basePrice: 4599,
    rating: 4.6,
    desc: "The original jean jacket since 1967.",
    variants: ["Indigo", "Black", "Light Wash", "Acid Wash", "Dark Grey", "Sherpa Lined", "Vintage Blue", "White"]
  },
  {
    baseName: "H&M Cotton Hoodie",
    brand: "H&M",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80",
    basePrice: 1999,
    rating: 4.3,
    desc: "Relaxed-fit hoodie in soft sweatshirt fabric.",
    variants: ["White", "Black", "Grey", "Beige", "Navy", "Olive", "Maroon", "Mustard"]
  },
  {
    baseName: "Zara Casual Shirt",
    brand: "Zara",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80",
    basePrice: 2290,
    rating: 4.2,
    desc: "Linen blend shirt with a relaxed fit and spread collar.",
    variants: ["White", "Beige", "Navy Blue", "Light Blue", "Pink", "Striped", "Checked", "Green"]
  },
  {
    baseName: "Adidas Track Jacket",
    brand: "Adidas",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1552831388-6a0b3575b32a?auto=format&fit=crop&w=500&q=80",
    basePrice: 3999,
    rating: 4.4,
    desc: "Iconic 3-Stripes track jacket. Sporty and comfortable.",
    variants: ["Black", "Red", "Navy", "Green", "White", "Royal Blue", "Yellow", "Purple"]
  },

  // --- 6. FOOTWEAR (Sports & Formal) ---
  {
    baseName: "Nike Air Jordan 1",
    brand: "Nike",
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    basePrice: 16995,
    rating: 4.9,
    desc: "The classic High Top that started it all.",
    variants: ["Chicago Red", "Royal Blue", "Shadow Grey", "Panda Black", "University Blue", "Mocha", "Green", "Yellow Toe"]
  },
  {
    baseName: "Adidas Ultraboost",
    brand: "Adidas",
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&w=500&q=80",
    basePrice: 14999,
    rating: 4.7,
    desc: "Epic energy return with Light BOOST technology.",
    variants: ["Cloud White", "Core Black", "Solar Red", "Blue", "Grey", "Neon Green", "Triple Black", "Orange"]
  },
  {
    baseName: "Bata Formal Derbys",
    brand: "Bata",
    category: "Formal Shoes",
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=500&q=80",
    basePrice: 2499,
    rating: 4.1,
    desc: "Classic leather lace-up formal shoes for men.",
    variants: ["Black", "Brown", "Tan", "Burgundy", "Oxblood", "Matte Black", "Coffee", "Dark Tan"]
  },
  {
    baseName: "Red Tape Oxfords",
    brand: "Red Tape",
    category: "Formal Shoes",
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=500&q=80",
    basePrice: 3299,
    rating: 4.3,
    desc: "Premium leather finish. Perfect for business meetings.",
    variants: ["Teak", "Black", "Tan", "Brown", "Cordovan", "Cognac", "Charcoal", "Deep Brown"]
  },

  // --- 7. CLOTHING ACCESSORIES (Belts, Wallets, Caps, Socks) ---
  {
    baseName: "Tommy Hilfiger Belt",
    brand: "Tommy Hilfiger",
    category: "Clothing Accessories",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=500&q=80",
    basePrice: 2999,
    rating: 4.5,
    desc: "Genuine leather belt with classic buckle.",
    variants: ["Black", "Brown", "Tan", "Navy", "Reversible", "Cognac", "Dark Brown", "Matte Black"]
  },
  {
    baseName: "Ray-Ban Aviator",
    brand: "Ray-Ban",
    category: "Clothing Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80",
    basePrice: 8990,
    rating: 4.8,
    desc: "Classic pilot shape. 100% UV protection.",
    variants: ["Gold/Green", "Silver/Grey", "Black", "Gunmetal", "Bronze", "Blue Gradient", "Mirror", "Polarized"]
  },
  {
    baseName: "Wildhorn Wallet",
    brand: "Wildhorn",
    category: "Clothing Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=500&q=80",
    basePrice: 1499,
    rating: 4.2,
    desc: "Slim RFID blocking bi-fold leather wallet.",
    variants: ["Hunter Brown", "Black", "Blue", "Tan", "Vintage Brown", "Carbon Fiber", "Navy", "Coffee"]
  },
  {
    baseName: "New Era Yankees Cap",
    brand: "New Era",
    category: "Clothing Accessories",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&q=80",
    basePrice: 1999,
    rating: 4.6,
    desc: "Official MLB 9FORTY adjustable cap.",
    variants: ["Navy", "Black", "Red", "White", "Grey", "Camo", "Olive", "Pink"]
  },
  {
    baseName: "Puma Ankle Socks",
    brand: "Puma",
    category: "Clothing Accessories",
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=500&q=80",
    basePrice: 499,
    rating: 4.1,
    desc: "Cotton rich sporty ankle socks. Moisture wicking.",
    variants: ["White", "Black", "Grey", "Navy", "Multicolor", "Neon", "Striped", "Patterned"]
  },

  // --- 8. ARTIFICIAL JEWELLERY ---
  {
    baseName: "Zaveri Pearls Set",
    brand: "Zaveri Pearls",
    category: "Jewellery",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=500&q=80",
    basePrice: 1299,
    rating: 4.3,
    desc: "Traditional Kundan choker set with earrings.",
    variants: ["Gold", "Rose Gold", "Silver", "Antique Gold", "Pearl", "Ruby", "Emerald", "Diamond Look"]
  },
  {
    baseName: "Swarovski Pendant",
    brand: "Swarovski",
    category: "Jewellery",
    image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=500&q=80",
    basePrice: 5990,
    rating: 4.7,
    desc: "Elegant crystal pendant necklace with rhodium plating.",
    variants: ["Blue Crystal", "White Crystal", "Pink Crystal", "Red Crystal", "Green Crystal", "Black Swan", "Purple", "Teal"]
  },
  {
    baseName: "Giva Silver Earrings",
    brand: "Giva",
    category: "Jewellery",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80",
    basePrice: 1899,
    rating: 4.5,
    desc: "925 Sterling Silver stud earrings with cubic zirconia.",
    variants: ["Silver", "Rose Gold", "Gold Plated", "Oxidised", "Pearl", "Solitaire", "Heart Shape", "Floral"]
  },

  // --- 9. HOME DECOR ---
  {
    baseName: "Ceramic Flower Vase",
    brand: "Home Centre",
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1581783342308-f792ca11df53?auto=format&fit=crop&w=500&q=80",
    basePrice: 999,
    rating: 4.2,
    desc: "Modern minimalist ceramic vase for living room.",
    variants: ["White", "Black", "Terracotta", "Blue", "Green", "Grey", "Beige", "Marble"]
  },
  {
    baseName: "Macrame Wall Hanging",
    brand: "Generic",
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
    basePrice: 1200,
    rating: 4.6,
    desc: "Handmade cotton macrame wall art.",
    variants: ["Beige", "Grey", "White", "Mustard", "Sage Green", "Pink", "Rust", "Teal"]
  },
  {
    baseName: "Scented Soy Candle",
    brand: "Bath & Body Works",
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=500&q=80",
    basePrice: 1499,
    rating: 4.8,
    desc: "3-Wick Candle with essential oils. 45 hours burn time.",
    variants: ["Lavender", "Vanilla", "Mahogany", "Rose", "Eucalyptus", "Citrus", "Berry", "Cinnamon"]
  },

  // --- 10. FURNITURE ---
  {
    baseName: "IKEA Wing Chair",
    brand: "IKEA",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=80",
    basePrice: 19990,
    rating: 4.7,
    desc: "Classic high-back armchair. Great for reading corners.",
    variants: ["Dark Grey", "Yellow", "Green", "Blue", "Red", "Beige", "Patterned", "Velvet"]
  },
  {
    baseName: "Coffee Table",
    brand: "Urban Ladder",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=500&q=80",
    basePrice: 8999,
    rating: 4.4,
    desc: "Solid wood coffee table with walnut finish.",
    variants: ["Walnut", "Teak", "Oak", "Mahogany", "Black", "White", "Glass Top", "Marble Top"]
  },
  {
    baseName: "Office Chair",
    brand: "Green Soul",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=500&q=80",
    basePrice: 12999,
    rating: 4.5,
    desc: "High back mesh chair with lumbar support.",
    variants: ["Black", "Grey", "Blue", "Red", "White", "Green", "Orange", "Mesh"]
  },

  // --- 11. HOME APPLIANCES ---
  {
    baseName: "Philips Air Fryer",
    brand: "Philips",
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1556911220-e670416310a2?auto=format&fit=crop&w=500&q=80",
    basePrice: 8999,
    rating: 4.6,
    desc: "Great tasting fries with 90% less fat. Rapid Air Tech.",
    variants: ["Black", "White", "Silver", "Red", "Digital", "Analog", "XL Size", "XXL Size"]
  },
  {
    baseName: "Dyson V15 Vacuum",
    brand: "Dyson",
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1558317374-a309d917a274?auto=format&fit=crop&w=500&q=80",
    basePrice: 55900,
    rating: 4.9,
    desc: "Powerful cordless vacuum with laser dust detection.",
    variants: ["Iron", "Gold", "Nickel", "Blue", "Purple", "Red", "Absolute", "Complete"]
  },
  {
    baseName: "Prestige Mixer Grinder",
    brand: "Prestige",
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1585237671728-6e65d833299c?auto=format&fit=crop&w=500&q=80",
    basePrice: 3299,
    rating: 4.1,
    desc: "750W powerful motor with 3 stainless steel jars.",
    variants: ["White", "Blue", "Red", "Black", "Purple", "Grey", "Juicer Model", "Silent Model"]
  },

  // --- 12. SPORTS ---
  {
    baseName: "Yonex Badminton Racket",
    brand: "Yonex",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1626224583764-8478ab2e1539?auto=format&fit=crop&w=500&q=80",
    basePrice: 2499,
    rating: 4.5,
    desc: "Lightweight graphite racket for precision shots.",
    variants: ["Black/Blue", "Red/White", "Neon Green", "Yellow", "Orange", "Matte Black", "Gold", "Silver"]
  },
  {
    baseName: "Nivia Football",
    brand: "Nivia",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?auto=format&fit=crop&w=500&q=80",
    basePrice: 899,
    rating: 4.3,
    desc: "Professional standard football. Durable stitching.",
    variants: ["White/Black", "Yellow/Blue", "Orange", "Green", "Red", "Multicolor", "Match Ball", "Training Ball"]
  },
  {
    baseName: "Cosco Cricket Bat",
    brand: "Cosco",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=500&q=80",
    basePrice: 1599,
    rating: 4.4,
    desc: "Kashmir Willow cricket bat. Full size.",
    variants: ["Natural Wood", "Painted Back"]
  }
];

// =====================================================================
// CATALOG ENGINE (Generates 500+ Items)
// =====================================================================
const generateProducts = () => {
  const products = [];
  let uniqueId = 10000;

  masterCatalog.forEach((item) => {
    item.variants.forEach((variant) => {
      // 1. Create a distinct price for each variant (± ₹500)
      const priceVariation = Math.floor(Math.random() * 500); 
      const finalPrice = item.basePrice + priceVariation;

      // 2. Push Unique Product Object
      products.push({
        id: uniqueId++,
        name: `${item.baseName} - ${variant}`, // E.g. "iPhone 15 Pro - Blue Titanium"
        baseName: item.baseName,
        brand: item.brand,
        category: item.category,
        image: item.image, // Reliable Unsplash Image
        price: finalPrice,
        rating: item.rating,
        reviews: Math.floor(Math.random() * 1500) + 50,
        isNew: Math.random() > 0.85,
        desc: item.desc,
        color: variant,
        specs: {
          "Brand": item.brand,
          "Variant": variant,
          "Category": item.category,
          "Warranty": "1 Year Manufacturer"
        }
      });
    });
  });

  // 3. Shuffle so categories are mixed
  for (let i = products.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [products[i], products[j]] = [products[j], products[i]];
  }

  return products;
};

export const products = generateProducts();