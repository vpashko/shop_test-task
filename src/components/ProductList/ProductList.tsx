import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import ProductCard from "../ProductCard/ProductCard";

import "./ProductList.scss";
import NewProductModal from "../NewProductModal/NewProductModal";
import createProduct from "../../api/createProduct";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const initialProducts = products.sort((a, b) => a.name.localeCompare(b.name)).sort((a, b) => a.count - b.count).sort((a, b) => a.weight - b.weight);

  const [sortedProducts, setSortedProducts] = useState<Product[]>(initialProducts);
  const [sortBy, setSortBy] = useState<string>("name");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
    console.log(event.target.value);
  };

  const handleDeleteProduct = (id: number) => {
    setSortedProducts(sortedProducts.filter(product => product.id !== id));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const handleAddProduct = (product: Product) => {
    createProduct(product);
    setSortedProducts([...sortedProducts, product]);
  }

  useEffect(() => {
    let sortedProducts = [...products];

    if (sortBy === "name") {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "count") {
        sortedProducts.sort((a, b) => a.count - b.count);
    } else if (sortBy === "weight") {
        sortedProducts.sort((a, b) => a.weight - b.weight);
    }

    setSortedProducts(sortedProducts);
  }, [products, sortBy]);


  return (
    <div className="product-list-container">

        <div className="product-list-header">
          <p className="header-text">Sort By</p>

          <select value={sortBy} onChange={handleSortByChange} className="sort-select">
            <option value="name">Name</option>
            <option value="count">Count</option>
            <option value="weight">Weight</option>
          </select>

          <button className="add-button" onClick={openModal}>Add Product</button>

          {modalOpen && (
            <NewProductModal onClose={() => setModalOpen(false)} onAdd={handleAddProduct}/>
          )}
        </div>

        <div className="product-list">
            {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} onDelete={handleDeleteProduct} />
            ))}
        </div>
    </div>
  );
}