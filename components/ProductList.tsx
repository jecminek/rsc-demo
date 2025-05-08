import type { Product } from '@/types';
import AddToCart from './AddToCart';
import { ProductCard } from './ui/ProductCard';

export default function ProductList({ products }: { products: Product[] }) {
	return (
		<>
			{products.map(product => (
				<ProductCard key={product.id} product={product}>
					<AddToCart productId={product.id} name={product.name} />
				</ProductCard>
			))}
		</>
	);
}