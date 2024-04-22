export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export type User = {
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  token: string;
};

export type CartPayload = {
  productId: number;
};

export type CartContent = {
  grandTotal: number,
  productList: Product[],
};

export type GetProductsResponse = {
  products: Product[],
  total: number,
  skip: number,
  limit: number
}

export type UserLoginRequest = {
  username: string;
  password: string;
  expiresInMins?: number;
}
export type UserLoginInvalidResponse = {
  message: string;
}
export type UserLoginValidResponse = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  image: string;
  token: string;
}
export type ProductResponse = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number,
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}