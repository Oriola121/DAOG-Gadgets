type Product = {
  id?: string;
  description: string;
  name: string;
  price: number;
  imageUrl: string;
  categoryId: number;
  stock: number;
  brand: string;
  model: string;
  specifications: string;
  createdAt: string;
  updatedAt: string;
  // category: Category?
  // orderItems: OrderItem[]
  // reviews: Review[]
};

type CartItem = Product & {
  quantity: number;
};
