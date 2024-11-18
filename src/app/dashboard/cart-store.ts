type Product = {
  id?: string;
  description: string;
  name: string;
  price: number;
  imageUrl: string;
};

type CartItem = Product & {
  quantity: number;
};
