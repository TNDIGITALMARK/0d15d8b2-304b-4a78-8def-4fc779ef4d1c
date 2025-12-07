'use client';

// ============================================
// Product Card Component
// Reusable card for displaying products in grids
// ============================================

import { Product } from '@/lib/types/product';
import Link from 'next/link';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.bestseller && (
          <span className="bg-gradient-celebration text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
            Bestseller
          </span>
        )}
        {discount > 0 && (
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Wishlist button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
        aria-label="Add to wishlist"
      >
        <Heart
          className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
        />
      </button>

      {/* Image */}
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Quick add overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                onAddToCart?.(product);
              }}
              className="btn btn-primary"
            >
              <ShoppingCart className="w-5 h-5" />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">
          {product.category.replace('-', ' ')}
        </p>

        {/* Title */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-heading font-semibold text-lg mb-2 text-foreground hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium ml-1">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-bold text-foreground">₹{product.price}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.compareAtPrice}
            </span>
          )}
        </div>

        {/* Delivery info */}
        <p className="text-xs text-muted-foreground mb-4">
          Delivery in {product.deliveryDays} {product.deliveryDays === 1 ? 'day' : 'days'}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart?.(product)}
          disabled={!product.inStock}
          className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ShoppingCart className="w-5 h-5" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>

        {/* Customizable badge */}
        {product.customizable && (
          <p className="text-xs text-center text-secondary mt-2 font-medium">
            ✨ Customizable
          </p>
        )}
      </div>
    </div>
  );
}
