"use client";

import { useState, useEffect } from 'react';

export default function CartCount() {
	const [count, setCount] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	// Loading number of items in the cart on startup
	useEffect(() => {
		async function fetchCartCount(): Promise<void> {
			try {
				// Sumulate loading data from API
				await new Promise(resolve => setTimeout(resolve, 800));

				// Real application would use API call
				// const response = await fetch('/api/cart/count');
				// const data = await response.json();

				// Initializes a random number of items in the cart
				setCount(Math.floor(Math.random() * 5));
			} catch (error) {
				console.error('Error when loading bucket', error);
			} finally {
				setIsLoading(false);
			}
		}

		fetchCartCount();

		// Event listener pro aktualizace košíku
		const handleCartUpdate = (): void => {
			setCount(prevCount => prevCount + 1);
		};

		window.addEventListener('cart-updated', handleCartUpdate);

		return () => {
			window.removeEventListener('cart-updated', handleCartUpdate);
		};
	}, []);

	return (
		<div className="relative">
			<div className="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8 text-blue-600"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
				</svg>

				{!isLoading && (
					<span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm">
            {count}
          </span>
				)}

				{isLoading && (
					<span className="absolute -top-2 -right-2 bg-gray-300 animate-pulse rounded-full h-6 w-6"></span>
				)}
			</div>
		</div>
	);
}