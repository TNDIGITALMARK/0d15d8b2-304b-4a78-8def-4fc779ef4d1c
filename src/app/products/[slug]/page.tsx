'use client';

// ============================================
// Product Detail Page
// Individual product page with customization options
// ============================================

import { getProductBySlug, products } from '@/lib/data/products';
import { useCart } from '@/lib/cart-context';
import { useState } from 'react';
import { Star, ShoppingCart, Heart, Truck, Shield, Check } from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [customizations, setCustomizations] = useState<Record<string, string>>({});
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    notFound();
  }

  const handleCustomizationChange = (optionId: string, value: string) => {
    setCustomizations((prev) => ({
      ...prev,
      [optionId]: value,
    }));
  };

  const handleAddToCart = () => {
    // Validate required customizations
    const missingRequired = product.customizationOptions?.filter(
      (opt) => opt.required && !customizations[opt.id]
    );

    if (missingRequired && missingRequired.length > 0) {
      toast.error('Please fill in all required customizations');
      return;
    }

    addToCart(product, quantity, customizations);
    toast.success(`${product.name} added to cart!`);
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8 flex items-center gap-2 text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href={`/${product.category}`} className="hover:text-primary capitalize">
            {product.category.replace('-', ' ')}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            {/* Main Image */}
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary shadow-md'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.bestseller && (
                <span className="bg-gradient-celebration text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Bestseller
                </span>
              )}
              {product.customizable && (
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Customizable
                </span>
              )}
              {product.inStock ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  In Stock
                </span>
              ) : (
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-foreground">₹{product.price}</span>
              {product.compareAtPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ₹{product.compareAtPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Customization Options */}
            {product.customizable && product.customizationOptions && (
              <div className="space-y-6 mb-8 p-6 bg-muted rounded-xl">
                <h3 className="text-xl font-heading font-semibold">Customize Your Order</h3>
                {product.customizationOptions.map((option) => (
                  <div key={option.id}>
                    <label className="block text-sm font-medium mb-2">
                      {option.name}
                      {option.required && <span className="text-red-500 ml-1">*</span>}
                    </label>

                    {option.type === 'select' && option.options && (
                      <select
                        value={customizations[option.id] || ''}
                        onChange={(e) => handleCustomizationChange(option.id, e.target.value)}
                        className="w-full"
                        required={option.required}
                      >
                        <option value="">Select {option.name}</option>
                        {option.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    )}

                    {option.type === 'text' && (
                      <input
                        type="text"
                        value={customizations[option.id] || ''}
                        onChange={(e) => handleCustomizationChange(option.id, e.target.value)}
                        placeholder={option.placeholder || `Enter ${option.name}`}
                        required={option.required}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-lg border-2 border-border hover:border-primary transition-colors font-bold text-xl"
                >
                  −
                </button>
                <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-lg border-2 border-border hover:border-primary transition-colors font-bold text-xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="mb-8 p-4 bg-gradient-soft rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Total Price:</span>
                <span className="text-3xl font-bold text-primary">₹{totalPrice}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-6 h-6" />
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="btn btn-outline p-4"
                aria-label="Add to wishlist"
              >
                <Heart
                  className={`w-6 h-6 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`}
                />
              </button>
            </div>

            {/* Features */}
            <div className="space-y-3 p-6 bg-white rounded-xl border border-border">
              <div className="flex items-start gap-3">
                <Truck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Fast Delivery</p>
                  <p className="text-sm text-muted-foreground">
                    Delivery in {product.deliveryDays} {product.deliveryDays === 1 ? 'day' : 'days'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Quality Guaranteed</p>
                  <p className="text-sm text-muted-foreground">
                    100% satisfaction or money back
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Secure Payment</p>
                  <p className="text-sm text-muted-foreground">
                    All major payment methods accepted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="border-b border-border mb-8">
            <h2 className="text-2xl font-heading font-bold pb-4">Product Details</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            <h3 className="font-heading font-semibold mt-6">Perfect For:</h3>
            <ul className="space-y-2">
              {product.occasions.map((occasion) => (
                <li key={occasion} className="capitalize">
                  {occasion.replace('-', ' ')} celebrations
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Products Section would go here */}
      </div>
    </div>
  );
}
