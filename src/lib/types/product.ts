// ============================================
// Product Type Definitions
// Types for gifting marketplace products
// ============================================

export type ProductCategory = 'cakes' | 'gifts' | 'party-supplies';

export type OccasionType =
  | 'birthday'
  | 'wedding'
  | 'anniversary'
  | 'corporate'
  | 'festival'
  | 'graduation'
  | 'baby-shower'
  | 'general';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: ProductCategory;
  occasions: OccasionType[];
  price: number;
  compareAtPrice?: number;
  images: string[];
  inStock: boolean;
  quantity?: number;
  featured: boolean;
  bestseller: boolean;
  customizable: boolean;
  customizationOptions?: CustomizationOption[];
  rating: number;
  reviewCount: number;
  deliveryDays: number;
  tags: string[];
}

export interface CustomizationOption {
  id: string;
  name: string;
  type: 'text' | 'select' | 'radio' | 'checkbox' | 'date';
  required: boolean;
  options?: string[];
  priceModifier?: number;
  placeholder?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  customizations?: Record<string, string>;
  totalPrice: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
}

export interface OrderDetails {
  deliveryDate: string;
  deliveryTime?: string;
  recipientName: string;
  recipientPhone: string;
  deliveryAddress: string;
  giftMessage?: string;
  specialInstructions?: string;
}

export interface Review {
  id: string;
  productId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  images?: string[];
}
