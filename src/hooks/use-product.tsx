import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 8;

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async (pageNum: number) => {
    try {
      setLoading(true);
      // Replace with your API endpoint
      const response = await fetch(
        `/api/products?page=${pageNum}&limit=${ITEMS_PER_PAGE}`
      );
      const data = await response.json();

      if (pageNum === 1) {
        setProducts(data);
      } else {
        setProducts((prev) => [...prev, ...data]);
      }

      setHasMore(data.length === ITEMS_PER_PAGE);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(1);
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProducts(nextPage);
  };

  return { products, loading, loadMore, hasMore };
}
