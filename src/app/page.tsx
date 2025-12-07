'use client';

// ============================================
// Homepage - CelebrationHub
// Main landing page with hero, featured products, and categories
// ============================================

import { ProductCard } from '@/components/products/product-card';
import { getFeaturedProducts, getBestsellers } from '@/lib/data/products';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';
import {
  Cake,
  Gift,
  PartyPopper,
  Heart,
  Star,
  Truck,
  Shield,
  Clock,
  ChevronRight,
} from 'lucide-react';
import { toast } from 'sonner';

export default function HomePage() {
  const { addToCart } = useCart();
  const featuredProducts = getFeaturedProducts();
  const bestsellers = getBestsellers();

  const handleQuickAdd = (product: any) => {
    addToCart(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-soft py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center md:text-left animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                Make Every
                <span className="text-primary"> Celebration </span>
                Unforgettable
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Order custom cakes, personalized gifts, and party supplies for birthdays,
                weddings, and all special occasions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/cakes" className="btn btn-primary text-lg px-8 py-4">
                  <Cake className="w-6 h-6" />
                  Shop Cakes
                </Link>
                <Link href="/gifts" className="btn btn-outline text-lg px-8 py-4">
                  <Gift className="w-6 h-6" />
                  Browse Gifts
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800"
                  alt="Celebration"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-3">
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  <div>
                    <div className="text-2xl font-bold">4.9</div>
                    <div className="text-sm text-muted-foreground">1000+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-border bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Same-day available</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Customizable</h3>
              <p className="text-sm text-muted-foreground">Personalize your gifts</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">100% satisfaction</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">We're here to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground">
              Find the perfect items for your celebration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Cakes Category */}
            <Link
              href="/cakes"
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
                alt="Custom Cakes"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Cake className="w-8 h-8" />
                  <h3 className="text-3xl font-heading font-bold">Custom Cakes</h3>
                </div>
                <p className="text-white/90 mb-4">Delicious cakes for every occasion</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  Shop Now
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Gifts Category */}
            <Link
              href="/gifts"
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <img
                src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800"
                alt="Gift Items"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Gift className="w-8 h-8" />
                  <h3 className="text-3xl font-heading font-bold">Gift Items</h3>
                </div>
                <p className="text-white/90 mb-4">Personalized gifts that delight</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  Shop Now
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Party Supplies Category */}
            <Link
              href="/party-supplies"
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800"
                alt="Party Supplies"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <PartyPopper className="w-8 h-8" />
                  <h3 className="text-3xl font-heading font-bold">Party Supplies</h3>
                </div>
                <p className="text-white/90 mb-4">Everything for the perfect party</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  Shop Now
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                Featured Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Handpicked favorites for your celebrations
              </p>
            </div>
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={handleQuickAdd} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link href="/products" className="btn btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ Customer Favorites
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Bestsellers</h2>
            <p className="text-lg text-muted-foreground">
              Our most loved products, ordered again and again
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={handleQuickAdd} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of happy customers celebrating with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Priya Sharma',
                rating: 5,
                comment:
                  'The customized birthday cake was absolutely perfect! My daughter loved it and it tasted amazing. Fast delivery too!',
                occasion: 'Birthday Cake',
              },
              {
                name: 'Rajesh Kumar',
                rating: 5,
                comment:
                  'Ordered a gift basket for my parents\' anniversary. The quality and presentation were top-notch. Highly recommend!',
                occasion: 'Anniversary Gift',
              },
              {
                name: 'Anita Patel',
                rating: 5,
                comment:
                  'Love the party supplies selection! Made my son\'s birthday party setup so easy. Everything arrived on time.',
                occasion: 'Party Supplies',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &quot;{testimonial.comment}&quot;
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.occasion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-celebration text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Celebrate?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our complete collection and find everything you need for your special occasion.
          </p>
          <Link href="/products" className="btn btn-secondary text-lg px-8 py-4 inline-flex">
            Shop All Products
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
