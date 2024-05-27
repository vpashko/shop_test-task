import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import { Product } from "./types/Product";
import getProducts from "./api/getProducts";


export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));

    console.log(products);
  }, []);


  return (
    <>
      <Header />
      <ProductList products={products} />
    </>
  );
}