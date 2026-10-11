import { Product } from '@/types/ecommerce';

export const CATEGORIES = ['Todos', 'Audífonos', 'Smartwatches', 'Accesorios', 'Audio Pro'];

export const PRODUCTS: Product[] = [
    {
        id: 'prod-1',
        name: 'Auriculares Inalámbricos Studio Pro',
        category: 'Audífonos',
        price: 129.99,
        originalPrice: 159.99,
        description: 'Cancelación de ruido activa, 40 horas de batería y sonido envolvente de alta fidelidad.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
        badge: 'Más Vendido',
        inStock: true,
    },
    {
        id: 'prod-2',
        name: 'Smartwatch Titanium Series X',
        category: 'Smartwatches',
        price: 199.00,
        originalPrice: 229.00,
        description: 'Pantalla AMOLED de 1.43 pulgadas, monitor de ritmo cardíaco, GPS integrado y resistencia al agua.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
        badge: 'Nuevo',
        inStock: true,
    },
    {
        id: 'prod-3',
        name: 'Altavoz Bluetooth UltraBass',
        category: 'Audio Pro',
        price: 89.50,
        description: 'Diseño compacto resistente al agua IPX7 con refuerzo de graves y sincronización estéreo.',
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop',
        inStock: true,
    },
    {
        id: 'prod-4',
        name: 'Audífonos Cableados Studio Master',
        category: 'Audífonos',
        price: 45.00,
        originalPrice: 55.00,
        description: 'Auriculares cableados con sonido de alta fidelidad',
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop',
        inStock: true,
    },
];