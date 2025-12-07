// ============================================
// Mock Product Data
// Comprehensive product catalog for gifting marketplace
// ============================================

import { Product } from '../types/product';

export const products: Product[] = [
  // ========== CUSTOM CAKES ==========
  {
    id: 'cake-001',
    name: 'Chocolate Birthday Celebration Cake',
    slug: 'chocolate-birthday-cake',
    description:
      'Rich, moist chocolate cake with layers of smooth chocolate ganache and buttercream frosting. Perfect for birthday celebrations of all ages. Our signature chocolate cake is made with premium cocoa and can be customized with your choice of message and decorations.',
    shortDescription: 'Rich chocolate cake with premium ganache and customizable decorations',
    category: 'cakes',
    occasions: ['birthday', 'general'],
    price: 4500,
    compareAtPrice: 5500,
    images: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800',
      'https://images.unsplash.com/photo-1562440499-64c9a74f0f78?w=800',
    ],
    inStock: true,
    quantity: 50,
    featured: true,
    bestseller: true,
    customizable: true,
    customizationOptions: [
      {
        id: 'size',
        name: 'Cake Size',
        type: 'select',
        required: true,
        options: ['8 inch (serves 8-10)', '10 inch (serves 12-15)', '12 inch (serves 20-25)'],
        priceModifier: 0,
      },
      {
        id: 'message',
        name: 'Cake Message',
        type: 'text',
        required: false,
        placeholder: 'e.g., Happy Birthday Sarah!',
      },
      {
        id: 'flavor-filling',
        name: 'Filling Flavor',
        type: 'select',
        required: true,
        options: ['Chocolate Ganache', 'Vanilla Buttercream', 'Raspberry Cream', 'Salted Caramel'],
      },
    ],
    rating: 4.8,
    reviewCount: 127,
    deliveryDays: 2,
    tags: ['chocolate', 'birthday', 'customizable', 'premium'],
  },
  {
    id: 'cake-002',
    name: 'Elegant Wedding Tier Cake',
    slug: 'wedding-tier-cake',
    description:
      'Stunning three-tier wedding cake featuring elegant vanilla sponge with your choice of filling. Decorated with delicate fondant flowers and pearl accents. Can be customized to match your wedding theme and color palette.',
    shortDescription: 'Three-tier vanilla wedding cake with elegant decorations',
    category: 'cakes',
    occasions: ['wedding', 'anniversary'],
    price: 15000,
    compareAtPrice: 18000,
    images: [
      'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800',
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800',
    ],
    inStock: true,
    quantity: 10,
    featured: true,
    bestseller: false,
    customizable: true,
    customizationOptions: [
      {
        id: 'tiers',
        name: 'Number of Tiers',
        type: 'select',
        required: true,
        options: ['2 tiers (serves 30-40)', '3 tiers (serves 50-70)', '4 tiers (serves 80-100)'],
        priceModifier: 0,
      },
      {
        id: 'flavor',
        name: 'Cake Flavor',
        type: 'select',
        required: true,
        options: ['Vanilla', 'Chocolate', 'Red Velvet', 'Lemon', 'Mixed Tiers'],
      },
      {
        id: 'theme-colors',
        name: 'Theme Colors',
        type: 'text',
        required: false,
        placeholder: 'e.g., Blush pink and gold',
      },
    ],
    rating: 5.0,
    reviewCount: 43,
    deliveryDays: 5,
    tags: ['wedding', 'elegant', 'premium', 'customizable'],
  },
  {
    id: 'cake-003',
    name: 'Red Velvet Anniversary Delight',
    slug: 'red-velvet-anniversary-cake',
    description:
      'Classic red velvet cake with cream cheese frosting, perfect for celebrating love and milestones. Moist, flavorful, and beautifully decorated with edible gold accents.',
    shortDescription: 'Classic red velvet with cream cheese frosting',
    category: 'cakes',
    occasions: ['anniversary', 'birthday'],
    price: 5200,
    images: ['https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800'],
    inStock: true,
    quantity: 35,
    featured: false,
    bestseller: true,
    customizable: true,
    customizationOptions: [
      {
        id: 'size',
        name: 'Cake Size',
        type: 'select',
        required: true,
        options: ['8 inch', '10 inch', '12 inch'],
      },
      {
        id: 'message',
        name: 'Personalized Message',
        type: 'text',
        required: false,
        placeholder: 'Your special message',
      },
    ],
    rating: 4.9,
    reviewCount: 89,
    deliveryDays: 2,
    tags: ['red-velvet', 'anniversary', 'premium'],
  },
  {
    id: 'cake-004',
    name: 'Strawberry Dreams Kids Cake',
    slug: 'strawberry-kids-birthday-cake',
    description:
      'Fun and colorful strawberry-flavored cake perfect for kids\' birthday parties. Features fresh strawberries, vanilla buttercream, and can be decorated with your child\'s favorite characters or themes.',
    shortDescription: 'Strawberry cake with fun decorations for kids',
    category: 'cakes',
    occasions: ['birthday'],
    price: 3800,
    images: ['https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800'],
    inStock: true,
    quantity: 40,
    featured: true,
    bestseller: true,
    customizable: true,
    customizationOptions: [
      {
        id: 'theme',
        name: 'Theme',
        type: 'select',
        required: true,
        options: ['Princess', 'Superhero', 'Dinosaur', 'Unicorn', 'Space', 'Custom'],
      },
      {
        id: 'age',
        name: 'Age Number',
        type: 'text',
        required: false,
        placeholder: 'e.g., 5',
      },
    ],
    rating: 4.7,
    reviewCount: 156,
    deliveryDays: 2,
    tags: ['strawberry', 'kids', 'birthday', 'fun'],
  },

  // ========== GIFT ITEMS ==========
  {
    id: 'gift-001',
    name: 'Personalized Photo Frame Gift Set',
    slug: 'personalized-photo-frame',
    description:
      'Beautiful wooden photo frame with custom engraving. Perfect for preserving precious memories. Comes in an elegant gift box with tissue paper and ribbon.',
    shortDescription: 'Custom engraved wooden photo frame with gift packaging',
    category: 'gifts',
    occasions: ['birthday', 'anniversary', 'wedding', 'general'],
    price: 1800,
    compareAtPrice: 2400,
    images: ['https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800'],
    inStock: true,
    quantity: 75,
    featured: true,
    bestseller: true,
    customizable: true,
    customizationOptions: [
      {
        id: 'size',
        name: 'Frame Size',
        type: 'select',
        required: true,
        options: ['4x6 inches', '5x7 inches', '8x10 inches'],
      },
      {
        id: 'engraving',
        name: 'Engraving Text',
        type: 'text',
        required: true,
        placeholder: 'Names, dates, or special message',
      },
    ],
    rating: 4.6,
    reviewCount: 98,
    deliveryDays: 3,
    tags: ['personalized', 'photo-frame', 'custom', 'gift'],
  },
  {
    id: 'gift-002',
    name: 'Luxury Jewelry Box Collection',
    slug: 'custom-jewelry-box',
    description:
      'Handcrafted wooden jewelry box with velvet lining and mirror. Features multiple compartments for rings, earrings, and necklaces. Can be personalized with monogram or name.',
    shortDescription: 'Handcrafted jewelry box with custom personalization',
    category: 'gifts',
    occasions: ['birthday', 'anniversary', 'wedding'],
    price: 3200,
    images: ['https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800'],
    inStock: true,
    quantity: 30,
    featured: false,
    bestseller: false,
    customizable: true,
    customizationOptions: [
      {
        id: 'wood-type',
        name: 'Wood Type',
        type: 'select',
        required: true,
        options: ['Walnut', 'Oak', 'Cherry', 'Maple'],
        priceModifier: 0,
      },
      {
        id: 'personalization',
        name: 'Personalization',
        type: 'text',
        required: false,
        placeholder: 'Initials or name',
      },
    ],
    rating: 4.8,
    reviewCount: 54,
    deliveryDays: 4,
    tags: ['jewelry', 'luxury', 'personalized', 'handcrafted'],
  },
  {
    id: 'gift-003',
    name: 'Engraved Wine Glasses Set',
    slug: 'engraved-wine-glasses',
    description:
      'Set of two elegant wine glasses with custom engraving. Perfect for couples celebrating anniversaries, weddings, or special occasions. Crystal clear glass with premium gift packaging.',
    shortDescription: 'Set of 2 crystal wine glasses with custom engraving',
    category: 'gifts',
    occasions: ['anniversary', 'wedding', 'corporate'],
    price: 2400,
    images: ['https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800'],
    inStock: true,
    quantity: 60,
    featured: true,
    bestseller: false,
    customizable: true,
    customizationOptions: [
      {
        id: 'engraving-line1',
        name: 'First Line',
        type: 'text',
        required: true,
        placeholder: 'e.g., John & Sarah',
      },
      {
        id: 'engraving-line2',
        name: 'Second Line',
        type: 'text',
        required: false,
        placeholder: 'e.g., Est. 2024',
      },
    ],
    rating: 4.7,
    reviewCount: 72,
    deliveryDays: 3,
    tags: ['wine', 'engraved', 'couple', 'anniversary'],
  },
  {
    id: 'gift-004',
    name: 'Premium Celebration Gift Basket',
    slug: 'celebration-gift-basket',
    description:
      'Curated gift basket filled with gourmet treats, chocolates, wine, and celebration essentials. Beautifully arranged in a wicker basket with cellophane wrap and bow.',
    shortDescription: 'Gourmet gift basket with treats and celebration items',
    category: 'gifts',
    occasions: ['birthday', 'corporate', 'general'],
    price: 5500,
    images: ['https://images.unsplash.com/photo-1529973625058-80de8e1a7e86?w=800'],
    inStock: true,
    quantity: 25,
    featured: true,
    bestseller: true,
    customizable: false,
    rating: 4.9,
    reviewCount: 134,
    deliveryDays: 1,
    tags: ['basket', 'gourmet', 'premium', 'corporate'],
  },

  // ========== PARTY SUPPLIES ==========
  {
    id: 'party-001',
    name: 'Birthday Balloon Bouquet Deluxe',
    slug: 'birthday-balloon-bouquet',
    description:
      'Stunning balloon arrangement featuring mylar and latex balloons in coordinated colors. Includes number balloons, confetti balloons, and foil accents. Helium-filled and ready to display.',
    shortDescription: 'Deluxe helium balloon bouquet with number and confetti balloons',
    category: 'party-supplies',
    occasions: ['birthday'],
    price: 1200,
    images: ['https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800'],
    inStock: true,
    quantity: 100,
    featured: false,
    bestseller: true,
    customizable: true,
    customizationOptions: [
      {
        id: 'age-number',
        name: 'Age Number',
        type: 'text',
        required: true,
        placeholder: 'e.g., 25',
      },
      {
        id: 'color-scheme',
        name: 'Color Scheme',
        type: 'select',
        required: true,
        options: ['Gold & White', 'Rose Gold & Pink', 'Blue & Silver', 'Rainbow', 'Black & Gold'],
      },
    ],
    rating: 4.5,
    reviewCount: 203,
    deliveryDays: 1,
    tags: ['balloons', 'birthday', 'party', 'helium'],
  },
  {
    id: 'party-002',
    name: 'Complete Party Decoration Kit',
    slug: 'party-decoration-kit',
    description:
      'Everything you need to decorate for the perfect party! Includes banners, streamers, table decorations, confetti, and more. Available in various themes and color schemes.',
    shortDescription: 'Complete decoration set with banners, streamers, and table decor',
    category: 'party-supplies',
    occasions: ['birthday', 'wedding', 'baby-shower'],
    price: 2800,
    images: ['https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800'],
    inStock: true,
    quantity: 45,
    featured: true,
    bestseller: false,
    customizable: true,
    customizationOptions: [
      {
        id: 'theme',
        name: 'Party Theme',
        type: 'select',
        required: true,
        options: [
          'Elegant Gold',
          'Rustic Charm',
          'Modern Minimalist',
          'Tropical Paradise',
          'Vintage Romance',
        ],
      },
    ],
    rating: 4.6,
    reviewCount: 87,
    deliveryDays: 2,
    tags: ['decorations', 'party-kit', 'complete', 'themed'],
  },
  {
    id: 'party-003',
    name: 'Premium Table Setting Package',
    slug: 'table-setting-package',
    description:
      'Elegant table setting supplies including disposable plates, cups, napkins, and cutlery. Premium quality with beautiful designs. Available for 10, 20, or 50 guests.',
    shortDescription: 'Premium disposable tableware for celebrations',
    category: 'party-supplies',
    occasions: ['birthday', 'wedding', 'corporate'],
    price: 1500,
    images: ['https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800'],
    inStock: true,
    quantity: 80,
    featured: false,
    bestseller: true,
    customizable: true,
    customizationOptions: [
      {
        id: 'guest-count',
        name: 'Number of Guests',
        type: 'select',
        required: true,
        options: ['10 guests', '20 guests', '50 guests'],
        priceModifier: 0,
      },
      {
        id: 'color',
        name: 'Color Theme',
        type: 'select',
        required: true,
        options: ['Gold', 'Rose Gold', 'Silver', 'Pastel Mix', 'White & Gold'],
      },
    ],
    rating: 4.4,
    reviewCount: 115,
    deliveryDays: 2,
    tags: ['tableware', 'plates', 'premium', 'party'],
  },
  {
    id: 'party-004',
    name: 'Custom Banner & Signage',
    slug: 'custom-party-banner',
    description:
      'Personalized party banner with your custom message and design. High-quality printing on durable material. Perfect for birthdays, graduations, and special celebrations.',
    shortDescription: 'Personalized party banner with custom message',
    category: 'party-supplies',
    occasions: ['birthday', 'graduation', 'general'],
    price: 800,
    images: ['https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800'],
    inStock: true,
    quantity: 150,
    featured: false,
    bestseller: false,
    customizable: true,
    customizationOptions: [
      {
        id: 'banner-text',
        name: 'Banner Message',
        type: 'text',
        required: true,
        placeholder: 'e.g., Happy Birthday Sarah!',
      },
      {
        id: 'size',
        name: 'Banner Size',
        type: 'select',
        required: true,
        options: ['3 feet', '5 feet', '8 feet'],
        priceModifier: 0,
      },
    ],
    rating: 4.3,
    reviewCount: 91,
    deliveryDays: 2,
    tags: ['banner', 'custom', 'signage', 'personalized'],
  },
];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.bestseller);
}

export function getProductsByOccasion(occasion: string): Product[] {
  return products.filter((p) => p.occasions.includes(occasion as any));
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}
