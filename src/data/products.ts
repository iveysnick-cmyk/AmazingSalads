export interface Product {
  slug: string;
  name: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    slug: 'parsley',
    name: 'Parsley',
    image: '/AmazingSalads/images/products/parsley.jpeg',
    description: 'Fresh parsley, perfect for seasoning.',
  },
  {
    slug: 'spinach',
    name: 'Spinach',
    image: '/AmazingSalads/images/products/spinach.jpg',
    description: 'Organic spinach, rich in nutrients.',
  },
  {
    slug: 'lettuce',
    name: 'Lettuce',
    image: '/AmazingSalads/images/products/lettuce.jpg',
    description: 'Crispy green lettuce.',
  },
  {
    slug: 'rocket',
    name: 'Rocket',
    image: '/AmazingSalads/images/products/rocket.jpeg',
    description: 'Crispy green coriander.',
  },
  {
    slug: 'endives',
    name: 'Endives',
    image: '/AmazingSalads/images/products/endives.jpg',
    description: 'Crispy green coriander.',
  },
  {
    slug: 'lahana',
    name: 'Lahana',
    image: '/AmazingSalads/images/products/lahana.jpg',
    description: 'Crispy green coriander.',
  },
  {
    slug: 'dill',
    name: 'Dill',
    image: '/AmazingSalads/images/products/dill.jpeg',
    description: 'Crispy green coriander.',
  },
  {
    slug: 'mint',
    name: 'Mint',
    image: '/AmazingSalads/images/products/mint.jpg',
    description: 'Crispy green mint.',
  },
  // Add the remaining products here
];
