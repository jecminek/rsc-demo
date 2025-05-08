import { Suspense } from 'react';
import ProductList from '@/components/ProductList';
import Header from '@/components/Header';
import CartCount from '@/components/CartCount';
import { SkeletonCard } from '@/components/ui/SkeletonCard';
import type { Product, FeaturedProduct } from '@/types';

// "Disables caching"
export const revalidate = 0;

// In a real application it would be an API call or a database query
async function getProducts(): Promise<Product[]> {
	// Simulation of slow data loading
	await new Promise(resolve => setTimeout(resolve, 8000));

	return [
		{ id: 1, name: "Product 1", price: 299, image: "/product1.jpg" },
		{ id: 2, name: "Product 2", price: 499, image: "/product2.jpg" },
		{ id: 3, name: "Product 3", price: 799, image: "/product3.jpg" },
	];
}

// Simulation of quickly available data for header
function getFeaturedProduct(): FeaturedProduct {
	return { name: "Special offer", discount: "20%" };
}

export default async function ProductsPage() {
	// We get the featured product quickly (rendered in the first paint)
	const featuredProduct = getFeaturedProduct();

	return (
		<div className="container mx-auto p-4">
			{/* Header will be rendered immediately (it will be visible at first paint */}
			<Header featured={featuredProduct} />

			{/* Client component - will be interactive after hydratation */}
			<div className="flex justify-end mb-4">
				<CartCount />
			</div>

			{/* Suspense boundary for slow content */}
			<Suspense fallback={<ProductsLoading />}>
				{/* Content rendered after loading products */}
				<ProductListWrapper />
			</Suspense>
		</div>
	);
}

// Wrapper component for asynchronous loading products
async function ProductListWrapper() {
	// This loading will be slow - the fallback is rendered
	const products = await getProducts();

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Products</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<ProductList products={products} />
			</div>
		</div>
	);
}

// Fallback for Suspense - displayed while loading products
function ProductsLoading() {
	return (
		<div className="my-8">
			<h2 className="text-2xl font-bold mb-4">Products</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{[1, 2, 3].map(i => (
					<SkeletonCard key={i} />
				))}
			</div>
		</div>
	);
}