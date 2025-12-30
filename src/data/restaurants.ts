import { Restaurant } from '@/types/restaurant';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza Palace',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: '25-35 min',
    deliveryFee: 3900,
    minOrder: 19500,
    description: 'Authentic Italian pizzas with fresh ingredients',
    address: '123 Main St, Downtown',
    phone: '+1-555-0123',
    isOpen: true,
    menu: [
      {
        id: 'p1',
        name: 'Margherita Pizza',
        description: 'Fresh tomato sauce, mozzarella, and basil',
        price: 19500,
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop',
        category: 'Pizza',
        isAvailable: true,
        ingredients: ['Tomato sauce', 'Mozzarella', 'Fresh basil', 'Olive oil'],
        allergens: ['Gluten', 'Dairy']
      },
      {
        id: 'p2',
        name: 'Pepperoni Pizza',
        description: 'Classic pepperoni with mozzarella cheese',
        price: 22100,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop',
        category: 'Pizza',
        isAvailable: true,
        ingredients: ['Tomato sauce', 'Mozzarella', 'Pepperoni'],
        allergens: ['Gluten', 'Dairy']
      },
      {
        id: 'p3',
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce with Caesar dressing',
        price: 13000,
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop',
        category: 'Salads',
        isAvailable: true,
        ingredients: ['Romaine lettuce', 'Parmesan', 'Croutons', 'Caesar dressing'],
        allergens: ['Gluten', 'Dairy', 'Eggs']
      }
    ]
  },
  {
    id: '2',
    name: 'Burger Junction',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
    cuisine: 'American',
    rating: 4.2,
    deliveryTime: '20-30 min',
    deliveryFee: 4500,
    minOrder: 15600,
    description: 'Juicy burgers and crispy fries',
    address: '456 Oak Ave, Midtown',
    phone: '+1-555-0456',
    isOpen: true,
    menu: [
      {
        id: 'b1',
        name: 'Classic Cheeseburger',
        description: 'Beef patty with cheese, lettuce, tomato, and pickles',
        price: 16900,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop',
        category: 'Burgers',
        isAvailable: true,
        ingredients: ['Beef patty', 'Cheddar cheese', 'Lettuce', 'Tomato', 'Pickles', 'Bun'],
        allergens: ['Gluten', 'Dairy']
      },
      {
        id: 'b2',
        name: 'Chicken Deluxe',
        description: 'Grilled chicken breast with avocado and bacon',
        price: 19500,
        image: 'https://images.unsplash.com/photo-1606755962773-d324e2dabd3f?w=300&h=200&fit=crop',
        category: 'Burgers',
        isAvailable: true,
        ingredients: ['Chicken breast', 'Avocado', 'Bacon', 'Lettuce', 'Mayo', 'Bun'],
        allergens: ['Gluten', 'Eggs']
      },
      {
        id: 'b3',
        name: 'Crispy Fries',
        description: 'Golden crispy french fries',
        price: 6500,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop',
        category: 'Sides',
        isAvailable: true,
        ingredients: ['Potatoes', 'Salt'],
        allergens: []
      }
    ]
  },
  {
    id: '3',
    name: 'Sushi Express',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    cuisine: 'Japanese',
    rating: 4.7,
    deliveryTime: '30-40 min',
    deliveryFee: 6500,
    minOrder: 26000,
    description: 'Fresh sushi and Japanese cuisine',
    address: '789 Pine St, Uptown',
    phone: '+1-555-0789',
    isOpen: true,
    menu: [
      {
        id: 's1',
        name: 'California Roll',
        description: 'Crab, avocado, and cucumber roll',
        price: 11700,
        image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop',
        category: 'Sushi Rolls',
        isAvailable: true,
        ingredients: ['Crab', 'Avocado', 'Cucumber', 'Nori', 'Sushi rice'],
        allergens: ['Shellfish']
      },
      {
        id: 's2',
        name: 'Salmon Nigiri',
        description: 'Fresh salmon over seasoned rice (2 pieces)',
        price: 9100,
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=200&fit=crop',
        category: 'Nigiri',
        isAvailable: true,
        ingredients: ['Fresh salmon', 'Sushi rice'],
        allergens: ['Fish']
      },
      {
        id: 's3',
        name: 'Miso Soup',
        description: 'Traditional soybean paste soup',
        price: 5200,
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop',
        category: 'Soup',
        isAvailable: true,
        ingredients: ['Miso paste', 'Tofu', 'Seaweed', 'Green onions'],
        allergens: ['Soy']
      }
    ]
  },
  {
    id: '4',
    name: 'Taco Fiesta',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    cuisine: 'Mexican',
    rating: 4.3,
    deliveryTime: '15-25 min',
    deliveryFee: 3200,
    minOrder: 13000,
    description: 'Authentic Mexican tacos and burritos',
    address: '321 Elm St, Southside',
    phone: '+1-555-0321',
    isOpen: true,
    menu: [
      {
        id: 't1',
        name: 'Beef Tacos',
        description: 'Seasoned ground beef with lettuce, cheese, and salsa (3 tacos)',
        price: 13000,
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop',
        category: 'Tacos',
        isAvailable: true,
        ingredients: ['Ground beef', 'Lettuce', 'Cheese', 'Salsa', 'Taco shells'],
        allergens: ['Gluten', 'Dairy']
      },
      {
        id: 't2',
        name: 'Chicken Burrito',
        description: 'Grilled chicken with rice, beans, and vegetables',
        price: 15600,
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop',
        category: 'Burritos',
        isAvailable: true,
        ingredients: ['Grilled chicken', 'Rice', 'Black beans', 'Peppers', 'Onions', 'Tortilla'],
        allergens: ['Gluten']
      },
      {
        id: 't3',
        name: 'Guacamole & Chips',
        description: 'Fresh guacamole with crispy tortilla chips',
        price: 9100,
        image: 'https://images.unsplash.com/photo-1541544181051-e46607bc22a4?w=300&h=200&fit=crop',
        category: 'Appetizers',
        isAvailable: true,
        ingredients: ['Avocado', 'Lime', 'Cilantro', 'Onions', 'Tortilla chips'],
        allergens: []
      }
    ]
  }
];
