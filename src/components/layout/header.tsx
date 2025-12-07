'use client';

// ============================================
// Header Component
// Main navigation with logo, search, and cart
// ============================================

import Link from 'next/link';
import { ShoppingCart, Search, Menu, Gift, Cake, PartyPopper, Heart, User } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useState } from 'react';

export function Header() {
  const { itemCount, cart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Top banner */}
      <div className="bg-gradient-celebration text-white text-center py-2 px-4">
        <p className="text-sm font-medium">
          🎉 Free delivery on orders above ₹5000 | Order now for celebrations!
        </p>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-celebration rounded-lg flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                CelebrationHub
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Gifts, Cakes & More</p>
            </div>
          </Link>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search for cakes, gifts, party supplies..."
                className="w-full pl-12 pr-4 py-3 border-2 border-border rounded-full focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="hidden lg:flex items-center gap-2 px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Wishlist</span>
            </Link>

            {/* Account */}
            <Link
              href="/account"
              className="hidden lg:flex items-center gap-2 px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Account</span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-semibold">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Search bar - Mobile */}
        <div className="md:hidden mt-4">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 border-2 border-border rounded-full focus:border-primary focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Main navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 mt-4 pt-4 border-t border-border">
          <Link
            href="/cakes"
            className="flex items-center gap-2 px-4 py-2 hover:text-primary hover:bg-muted rounded-lg transition-all font-medium"
          >
            <Cake className="w-5 h-5" />
            Cakes
          </Link>
          <Link
            href="/gifts"
            className="flex items-center gap-2 px-4 py-2 hover:text-primary hover:bg-muted rounded-lg transition-all font-medium"
          >
            <Gift className="w-5 h-5" />
            Gifts
          </Link>
          <Link
            href="/party-supplies"
            className="flex items-center gap-2 px-4 py-2 hover:text-primary hover:bg-muted rounded-lg transition-all font-medium"
          >
            <PartyPopper className="w-5 h-5" />
            Party Supplies
          </Link>
          <Link
            href="/occasions"
            className="px-4 py-2 hover:text-primary hover:bg-muted rounded-lg transition-all font-medium"
          >
            Shop by Occasion
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 hover:text-primary hover:bg-muted rounded-lg transition-all font-medium"
          >
            About Us
          </Link>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border flex flex-col gap-2">
            <Link
              href="/cakes"
              className="flex items-center gap-2 px-4 py-3 hover:bg-muted rounded-lg transition-all font-medium"
            >
              <Cake className="w-5 h-5" />
              Cakes
            </Link>
            <Link
              href="/gifts"
              className="flex items-center gap-2 px-4 py-3 hover:bg-muted rounded-lg transition-all font-medium"
            >
              <Gift className="w-5 h-5" />
              Gifts
            </Link>
            <Link
              href="/party-supplies"
              className="flex items-center gap-2 px-4 py-3 hover:bg-muted rounded-lg transition-all font-medium"
            >
              <PartyPopper className="w-5 h-5" />
              Party Supplies
            </Link>
            <Link
              href="/occasions"
              className="px-4 py-3 hover:bg-muted rounded-lg transition-all font-medium"
            >
              Shop by Occasion
            </Link>
            <Link
              href="/wishlist"
              className="flex items-center gap-2 px-4 py-3 hover:bg-muted rounded-lg transition-all font-medium"
            >
              <Heart className="w-5 h-5" />
              Wishlist
            </Link>
            <Link
              href="/account"
              className="flex items-center gap-2 px-4 py-3 hover:bg-muted rounded-lg transition-all font-medium"
            >
              <User className="w-5 h-5" />
              My Account
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
