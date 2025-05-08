import { FeaturedProduct } from '@/types';

export default function Header({ featured }: { featured: FeaturedProduct }) {
	return (
		<header className="bg-blue-600 text-white p-4 mb-4 rounded">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">Next.js 15 RSC Demo</h1>
				<div className="bg-yellow-500 text-blue-900 p-2 rounded">
					<strong>{featured.name}:</strong> Discount {featured.discount}
				</div>
			</div>
			<p className="mt-2">
				Demonstration of Server and Client components in Next.js 15
			</p>
		</header>
	);
}