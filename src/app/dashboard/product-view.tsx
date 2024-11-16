import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@daog/components/ui/card";
import { Heart } from "lucide-react";
import { ScrollArea } from "@daog/components/ui/scroll-area";
import Cart from "./cart";
const products = [
  {
    id: 1,
    title: "Self-Development Tool",
    name: "Laptop",
    price: "$25000",
    image: "/uploads/laptop-4.png",
    likes: 42,
  },
  {
    id: 2,
    title: "Personal Growth App",
    name: "Laptop",
    price: "$35",
    image: "/uploads/laptop-4.png",
    likes: 28,
  },
  {
    id: 3,
    title: "Digital Wellness Tracker",
    name: "Laptop",
    price: "$30",
    image: "/uploads/laptop-4.png",
    likes: 56,
  },
  {
    id: 4,
    title: "Meditation Assistant",
    name: "Laptop",
    price: "$20",
    image: "/uploads/laptop-4.png",
    likes: 33,
  },
  {
    id: 5,
    title: "Productivity Suite",
    name: "Laptop",
    price: "$45",
    image: "/uploads/laptop-4.png",
    likes: 64,
  },
  {
    id: 6,
    title: "Learning Platform",
    name: "Laptop",
    price: "$50",
    image: "/uploads/laptop-4.png",
    likes: 47,
  },
  {
    id: 7,
    title: "Focus Timer",
    name: "Laptop",
    price: "$15",
    image: "/uploads/laptop-4.png",
    likes: 39,
  },
  {
    id: 8,
    title: "Goal Tracker",
    name: "Laptop",
    price: "$28",
    image: "/uploads/laptop-4.png",
    likes: 51,
  },
];
export default function ProductView() {
  //      const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     fetch("/api/products")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data));
  //   }, []);
  const [checkOut, setCheckOut] = useState(false);
  const handleCheckOut = () => {
    setCheckOut(true);
  };
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-zinc-900 border-zinc-800 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/50 rounded-full px-3 py-1">
                  <Heart size={16} color="white" />
                  <span className="text-sm">{product.likes}</span>
                </div>
              </div>
              <CardContent className="p-4 space-y-1">
                <h3 className="font-medium ">{product.title}</h3>
                <p>{product.name}</p>
                <div className="flex items-center justify-between">
                  <p>{product.price}</p>
                  <button
                    className="px-4 py-1 font-medium rounded-lg bg-black hover:bg-[#474747]"
                    onClick={handleCheckOut}
                  >
                    Buy
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-2 h-2 rounded-full ${
                page === 1 ? "bg-white" : "bg-zinc-700"
              }`}
              aria-label={`Page ${page}`}
            ></button>
          ))}
        </div>
      </div>

      {checkOut && (
        <div className="fixed top-0 left-0 flex justify-end h-screen w-screen bg-black/50 z-50">
          <div className="h-screen w-2/3 bg-muted">
            <Cart onClose={setCheckOut} />
          </div>
        </div>
      )}
    </div>
  );
}
