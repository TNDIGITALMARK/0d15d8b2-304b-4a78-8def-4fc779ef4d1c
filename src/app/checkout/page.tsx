'use client';

// ============================================
// Checkout Page
// Complete order with delivery details and payment
// ============================================

import { useCart } from '@/lib/cart-context';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { CreditCard, Wallet, Building2, Check, Gift, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, clearCart, itemCount } = useCart();
  const router = useRouter();

  const [step, setStep] = useState<'details' | 'payment' | 'confirm'>('details');
  const [orderDetails, setOrderDetails] = useState({
    recipientName: '',
    recipientPhone: '',
    deliveryAddress: '',
    deliveryDate: '',
    deliveryTime: 'morning',
    giftMessage: '',
    specialInstructions: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'cod'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  if (itemCount === 0) {
    router.push('/cart');
    return null;
  }

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !orderDetails.recipientName ||
      !orderDetails.recipientPhone ||
      !orderDetails.deliveryAddress ||
      !orderDetails.deliveryDate
    ) {
      toast.error('Please fill in all required fields');
      return;
    }
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirm');
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const orderId = `ORD-${Date.now()}`;

    toast.success('Order placed successfully!');
    clearCart();

    // Redirect to success page
    router.push(`/order-success?orderId=${orderId}`);
  };

  return (
    <div className="min-h-screen py-8 bg-muted">
      <div className="container mx-auto px-4">
        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step === 'details' || step === 'payment' || step === 'confirm'
                    ? 'bg-primary text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                1
              </div>
              <span className="font-medium">Delivery Details</span>
            </div>
            <div className="flex-1 h-1 bg-gray-300 mx-4">
              <div
                className={`h-full bg-primary transition-all ${
                  step === 'payment' || step === 'confirm' ? 'w-full' : 'w-0'
                }`}
              />
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step === 'payment' || step === 'confirm'
                    ? 'bg-primary text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                2
              </div>
              <span className="font-medium">Payment</span>
            </div>
            <div className="flex-1 h-1 bg-gray-300 mx-4">
              <div
                className={`h-full bg-primary transition-all ${step === 'confirm' ? 'w-full' : 'w-0'}`}
              />
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step === 'confirm' ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'
                }`}
              >
                3
              </div>
              <span className="font-medium">Confirm</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              {/* Step 1: Delivery Details */}
              {step === 'details' && (
                <form onSubmit={handleDetailsSubmit}>
                  <h2 className="text-3xl font-heading font-bold mb-6">Delivery Details</h2>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Recipient Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={orderDetails.recipientName}
                          onChange={(e) =>
                            setOrderDetails({ ...orderDetails, recipientName: e.target.value })
                          }
                          placeholder="Full name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={orderDetails.recipientPhone}
                          onChange={(e) =>
                            setOrderDetails({ ...orderDetails, recipientPhone: e.target.value })
                          }
                          placeholder="+91 1234567890"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Delivery Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        value={orderDetails.deliveryAddress}
                        onChange={(e) =>
                          setOrderDetails({ ...orderDetails, deliveryAddress: e.target.value })
                        }
                        placeholder="Complete address with landmarks"
                        rows={3}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <Calendar className="w-4 h-4 inline mr-2" />
                          Delivery Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          value={orderDetails.deliveryDate}
                          onChange={(e) =>
                            setOrderDetails({ ...orderDetails, deliveryDate: e.target.value })
                          }
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Preferred Time</label>
                        <select
                          value={orderDetails.deliveryTime}
                          onChange={(e) =>
                            setOrderDetails({ ...orderDetails, deliveryTime: e.target.value })
                          }
                        >
                          <option value="morning">Morning (9 AM - 12 PM)</option>
                          <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                          <option value="evening">Evening (4 PM - 8 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Gift className="w-4 h-4 inline mr-2" />
                        Gift Message (Optional)
                      </label>
                      <textarea
                        value={orderDetails.giftMessage}
                        onChange={(e) =>
                          setOrderDetails({ ...orderDetails, giftMessage: e.target.value })
                        }
                        placeholder="Add a personal message to the gift"
                        rows={2}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Special Instructions (Optional)
                      </label>
                      <textarea
                        value={orderDetails.specialInstructions}
                        onChange={(e) =>
                          setOrderDetails({ ...orderDetails, specialInstructions: e.target.value })
                        }
                        placeholder="Any special requirements or instructions"
                        rows={2}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary w-full mt-8 text-lg py-4">
                    Continue to Payment
                  </button>
                </form>
              )}

              {/* Step 2: Payment */}
              {step === 'payment' && (
                <form onSubmit={handlePaymentSubmit}>
                  <button
                    type="button"
                    onClick={() => setStep('details')}
                    className="text-primary hover:underline mb-4"
                  >
                    ← Back to Details
                  </button>

                  <h2 className="text-3xl font-heading font-bold mb-6">Payment Method</h2>

                  <div className="space-y-4 mb-8">
                    {/* Card Payment */}
                    <label
                      className={`flex items-center gap-4 p-6 border-2 rounded-xl cursor-pointer transition-all ${
                        paymentMethod === 'card'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="w-5 h-5"
                      />
                      <CreditCard className="w-8 h-8 text-primary" />
                      <div>
                        <p className="font-semibold">Credit/Debit Card</p>
                        <p className="text-sm text-muted-foreground">Visa, Mastercard, RuPay</p>
                      </div>
                    </label>

                    {/* UPI */}
                    <label
                      className={`flex items-center gap-4 p-6 border-2 rounded-xl cursor-pointer transition-all ${
                        paymentMethod === 'upi'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="upi"
                        checked={paymentMethod === 'upi'}
                        onChange={() => setPaymentMethod('upi')}
                        className="w-5 h-5"
                      />
                      <Wallet className="w-8 h-8 text-primary" />
                      <div>
                        <p className="font-semibold">UPI Payment</p>
                        <p className="text-sm text-muted-foreground">GPay, PhonePe, Paytm</p>
                      </div>
                    </label>

                    {/* Cash on Delivery */}
                    <label
                      className={`flex items-center gap-4 p-6 border-2 rounded-xl cursor-pointer transition-all ${
                        paymentMethod === 'cod'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="w-5 h-5"
                      />
                      <Building2 className="w-8 h-8 text-primary" />
                      <div>
                        <p className="font-semibold">Cash on Delivery</p>
                        <p className="text-sm text-muted-foreground">Pay when you receive</p>
                      </div>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary w-full text-lg py-4">
                    Review Order
                  </button>
                </form>
              )}

              {/* Step 3: Confirmation */}
              {step === 'confirm' && (
                <div>
                  <button
                    type="button"
                    onClick={() => setStep('payment')}
                    className="text-primary hover:underline mb-4"
                  >
                    ← Back to Payment
                  </button>

                  <h2 className="text-3xl font-heading font-bold mb-6">Review Your Order</h2>

                  {/* Delivery Info */}
                  <div className="mb-6 p-6 bg-muted rounded-xl">
                    <h3 className="font-heading font-semibold text-lg mb-4">Delivery Information</h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Recipient:</strong> {orderDetails.recipientName}
                      </p>
                      <p>
                        <strong>Phone:</strong> {orderDetails.recipientPhone}
                      </p>
                      <p>
                        <strong>Address:</strong> {orderDetails.deliveryAddress}
                      </p>
                      <p>
                        <strong>Delivery Date:</strong> {orderDetails.deliveryDate}
                      </p>
                      {orderDetails.giftMessage && (
                        <p>
                          <strong>Gift Message:</strong> {orderDetails.giftMessage}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-6 p-6 bg-muted rounded-xl">
                    <h3 className="font-heading font-semibold text-lg mb-2">Payment Method</h3>
                    <p className="text-sm capitalize">{paymentMethod.replace('-', ' ')}</p>
                  </div>

                  {/* Terms */}
                  <div className="mb-6 p-6 border border-border rounded-xl">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1" required />
                      <span className="text-sm text-muted-foreground">
                        I agree to the{' '}
                        <Link href="/terms" className="text-primary hover:underline">
                          Terms & Conditions
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                  </div>

                  <button
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className="btn btn-primary w-full text-lg py-4 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      'Processing...'
                    ) : (
                      <>
                        <Check className="w-6 h-6" />
                        Place Order - ₹{cart.total}
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-heading font-bold mb-4">Order Summary</h3>

              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {cart.items.map((item) => (
                  <div key={item.product.id} className="flex gap-3 pb-3 border-b border-border">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold">₹{item.totalPrice}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pb-4 border-b border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">₹{cart.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-semibold">₹{cart.deliveryFee}</span>
                </div>
              </div>

              <div className="flex justify-between pt-4 text-xl">
                <span className="font-bold">Total</span>
                <span className="font-bold text-primary">₹{cart.total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
