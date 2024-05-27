import { Product } from "../types/Product";
import axios from "axios";

export default async function createProduct(product: Product) {
    try {
        await axios.post("http://localhost:3001/products", product);
    } catch (error) {
        console.error("Error creating product", error);
    }
}