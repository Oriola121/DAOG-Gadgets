"use client";

import { Card, CardContent } from "@daog/components/ui/card";
import { Heart } from "lucide-react";
import Cart from "./cart";
import { useProducts } from "@daog/hooks/use-product";
import { useCart } from "@daog/hooks/use-cart";

export default function ProductView() {
  const { products, loading, loadMore, hasMore } = useProducts();
  const { addToCart, isCartOpen, setIsCartOpen } = useCart();

  if (loading && !products.length) {
    return <div className="p-6">Loading...</div>;
  }
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="bg-zinc-900 border-zinc-800 overflow-hidden group"
          >
            <div className="relative">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/50 rounded-full px-3 py-1">
                <Heart size={16} color="white" />
              </div>
            </div>
            <CardContent className="p-4 space-y-1">
              <h3 className="font-medium">{product.description}</h3>
              <p>{product.name}</p>
              <div className="flex items-center justify-between">
                <p>₦{product.price.toLocaleString()}</p>
                <button
                  className="px-4 py-1 font-medium rounded-lg bg-black hover:bg-[#474747]"
                  onClick={() => addToCart(product)}
                >
                  Buy
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {hasMore && (
        <div className="flex items-center justify-center py-6">
          <button
            className="px-4 py-3 rounded-lg text-sm font-medium text-white bg-[#474747] cursor-pointer hover:bg-[#313131]"
            onClick={loadMore}
          >
            {loading ? "Loading..." : "Load More ..."}
          </button>
        </div>
      )}

      {isCartOpen && (
        <div className="fixed top-0 left-0 flex justify-end h-screen w-screen bg-black z-50">
          <Cart onClose={() => setIsCartOpen(false)} />
        </div>
      )}
    </div>
  );
}
