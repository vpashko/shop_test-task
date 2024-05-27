export interface Product {
    id: number;
    imageUrl: string;
    name: string;
    count: number;
    size: {height: number, width: number};
    weight: number;
    comments: string[];
}
