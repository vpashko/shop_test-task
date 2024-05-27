import { Product } from "../../types/Product";

import "./ProductCard.scss";

interface ProductCardProps {
    product: Product;
    onDelete: (id: number) => void;
}

export default function ProductCard({ product, onDelete }: ProductCardProps) {
    const handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onDelete(product.id);
    };

    return (
        <div className="product-card">
            <img className="product-card__image" src={product.imageUrl} alt={product.name} />
            <h2 className="product-card__tittle">{product.name}</h2>
            <p className="product-card__info">Count: {product.count}</p>
            <p className="product-card__info">Size: {product.size.height}x{product.size.width}</p>
            <p className="product-card__info">Weight: {product.weight}</p>

            <button className="product-card__delete-button" onClick={handleDelete}>Delete</button>
        </div>
    );
}