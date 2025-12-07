'use client';

import Link from 'next/link';
import { CheckCircle, Package, Mail, Phone } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  return (
    <div className="min-h-screen py-16 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Order Placed Successfully! 🎉
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for your order. We're preparing your items and will notify you once they're on their way.
          </p>

          {/* Order ID */}
          {orderId && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-2">Your Order ID</p>
              <p className="text-2xl font-bold text-primary font-mono">{orderId}</p>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8 text-left">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">What Happens Next?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Order Confirmation Email</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll receive an email with your order details and tracking information shortly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Order Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team will carefully prepare your order according to your specifications.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Delivery Updates</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll keep you updated via SMS and email throughout the delivery process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn btn-primary text-lg px-8 py-4">
              Continue Shopping
            </Link>
            <Link href="/track-order" className="btn btn-outline text-lg px-8 py-4">
              Track Your Order
            </Link>
          </div>

          {/* Support */}
          <div className="mt-12 p-6 bg-white rounded-xl shadow-md">
            <p className="text-sm text-muted-foreground mb-2">Need help with your order?</p>
            <p className="text-lg font-semibold">
              Contact us at{' '}
              <a href="tel:+911234567890" className="text-primary hover:underline">
                +91 1234 567 890
              </a>
            </p>
            <p className="text-sm text-muted-foreground">Available Mon-Sat, 9 AM - 8 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
