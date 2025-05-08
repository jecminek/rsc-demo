import type { Product } from '@/types';
import type { ReactNode } from 'react';

interface ProductCardProps {
	product: Product;
	children: ReactNode;
}

// Server component for product card design
export function ProductCard({ product, children }: ProductCardProps) {
	return (
		<div className="border p-4 rounded shadow">
			<div className="h-40 bg-gray-100 mb-2 rounded flex items-center justify-center">
				<span className="text-gray-400">Product image</span>
			</div>
			<h3 className="font-bold">{product.name}</h3>
			<p className="text-lg">{product.price} Kč</p>

			{/* Here the client component is placed (AddToCart) */}
			{children}
		</div>
	);
}