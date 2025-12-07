'use client';

// ============================================
// Shopping Cart Page
// View and manage cart items
// ============================================

import { useCart } from '@/lib/cart-context';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, itemCount } = useCart();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      toast.success('Item removed from cart');
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemove = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast.success(`${productName} removed from cart`);
  };

  if (itemCount === 0) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-16 h-16 text-muted-foreground" />
            </div>
            <h1 className="text-4xl font-heading font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet. Start shopping and find the perfect items for your celebration!
            </p>
            <Link href="/" className="btn btn-primary text-lg px-8 py-4 inline-flex">
              Continue Shopping
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <div
                key={`${item.product.id}-${JSON.stringify(item.customizations)}`}
                className="bg-white rounded-xl shadow-sm p-6 flex gap-6"
              >
                {/* Image */}
                <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="text-xl font-heading font-semibold hover:text-primary transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-muted-foreground capitalize">
                        {item.product.category.replace('-', ' ')}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemove(item.product.id, item.product.name)}
                      className="p-2 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Customizations */}
                  {item.customizations && Object.keys(item.customizations).length > 0 && (
                    <div className="mb-3 p-3 bg-muted rounded-lg">
                      <p className="text-sm font-medium mb-1">Customizations:</p>
                      {Object.entries(item.customizations).map(([key, value]) => (
                        <p key={key} className="text-sm text-muted-foreground">
                          {key}: {value}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Quantity and Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg border-2 border-border hover:border-primary transition-colors flex items-center justify-center font-bold"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg border-2 border-border hover:border-primary transition-colors flex items-center justify-center font-bold"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        ₹{item.product.price} × {item.quantity}
                      </p>
                      <p className="text-2xl font-bold text-foreground">₹{item.totalPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-heading font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">₹{cart.subtotal}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="font-semibold">₹{cart.deliveryFee}</span>
                </div>
                {cart.subtotal >= 5000 && (
                  <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm">
                    🎉 You qualify for free delivery!
                  </div>
                )}
                <div className="pt-4 border-t border-border flex justify-between text-xl">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-primary">₹{cart.total}</span>
                </div>
              </div>

              <Link href="/checkout" className="btn btn-primary w-full text-lg py-4 mb-4">
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/"
                className="block text-center text-primary font-medium hover:underline"
              >
                Continue Shopping
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Free delivery over ₹5000</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Easy returns & refunds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
