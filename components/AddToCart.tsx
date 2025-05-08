"use client"; // Client component

import { useState } from 'react';
import { useTransition } from 'react';

interface AddToCartProps {
	productId: number;
	name: string;
}

export default function AddToCart({ productId, name }: AddToCartProps) {
	const [isPending, startTransition] = useTransition();
	const [message, setMessage] = useState<string | null>(null);

	async function handleAddToCart(): Promise<void> {
		// Run the changes inside a transition for better UX
		startTransition(async () => {
			setMessage(null);

			try {
				// Real API call running in the browser
				const response = await fetch('/api/cart', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ productId }),
				});

				if (response.ok) {
					setMessage(`${name} add to bucket!`);
					// Global event for cart update
					window.dispatchEvent(new CustomEvent('cart-updated'));
				} else {
					setMessage('Something went wrong');
				}
			} catch (error) {
				setMessage('Error communicating with the server');
			}

			// Automatically hide the message after 3 seconds
			setTimeout(() => setMessage(null), 3000);
		});
	}

	return (
		<div className="mt-4">
			<button
				onClick={handleAddToCart}
				disabled={isPending}
				className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 disabled:bg-blue-300"
			>
				{isPending ? 'Adding...' : 'Add to the bucket'}
			</button>

			{message && (
				<div className="mt-2 text-sm text-green-600">{message}</div>
			)}
		</div>
	);
}