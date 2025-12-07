'use client';

import { ProductCard } from '@/components/products/product-card';
import { getProductsByCategory } from '@/lib/data/products';
import { useCart } from '@/lib/cart-context';
import { toast } from 'sonner';
import { PartyPopper } from 'lucide-react';

export default function PartySuppliesPage() {
  const { addToCart } = useCart();
  const partySupplies = getProductsByCategory('party-supplies');

  const handleQuickAdd = (product: any) => {
    addToCart(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <PartyPopper className="w-12 h-12 text-primary" />
            <h1 className="text-5xl font-heading font-bold">Party Supplies</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to throw the perfect party. Decorations, balloons, tableware, and more to make your celebration memorable.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {partySupplies.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleQuickAdd} />
          ))}
        </div>
      </div>
    </div>
  );
}
