export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    description: string;
    image: string;
    badge?: string;
    inStock: boolean;
}

export interface CartItem {
    product: Product;
    quantity: number;
}