export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  minOrder: number;
  description: string;
  address: string;
  phone: string;
  isOpen: boolean;
  menu: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isAvailable: boolean;
  ingredients?: string[];
  allergens?: string[];
}

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  deliveryInstructions?: string;
}

export interface Order {
  id: string;
  restaurantId: string;
  restaurant: Restaurant;
  items: OrderItem[];
  customerInfo: CustomerInfo;
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'out_for_delivery' | 'delivered' | 'cancelled';
  orderTime: Date;
  estimatedDeliveryTime: Date;
  paymentMethod: 'cash' | 'card' | 'online';
}
