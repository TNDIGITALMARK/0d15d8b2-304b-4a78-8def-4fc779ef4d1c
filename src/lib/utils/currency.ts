// ============================================
// Currency Utilities for Indian Market
// INR formatting with proper Indian numbering system
// ============================================

/**
 * Formats a number as Indian Rupees (INR)
 * Uses Indian numbering system with commas (e.g., ₹1,29,999)
 */
export function formatINR(amount: number): string {
  // Convert to Indian numbering system
  const formatted = amount.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
  });

  return `₹${formatted}`;
}

/**
 * Formats a price with discount comparison
 */
export interface PriceDisplay {
  current: string;
  original?: string;
  discount?: number;
  savings?: string;
}

export function formatPriceWithDiscount(
  price: number,
  compareAtPrice?: number
): PriceDisplay {
  const result: PriceDisplay = {
    current: formatINR(price),
  };

  if (compareAtPrice && compareAtPrice > price) {
    result.original = formatINR(compareAtPrice);
    result.discount = Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
    result.savings = formatINR(compareAtPrice - price);
  }

  return result;
}

/**
 * Converts a number to INR format without the symbol
 */
export function toINRNumber(amount: number): string {
  return amount.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
  });
}
