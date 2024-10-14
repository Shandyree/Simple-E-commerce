export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  subcategory: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: number;
  email: string;
  name: string;
}