export interface Product {
	id: number;
	name: string;
	price: number;
	image: string;
}

export interface FeaturedProduct {
	name: string;
	discount: string;
}

export interface CartItem {
	productId: number;
	quantity: number;
}

export interface ApiResponse<T = any> {
	success: boolean;
	data?: T;
	error?: string;
}