export function SkeletonCard() {
	return (
		<div className="border p-4 rounded shadow animate-pulse">
			<div className="bg-gray-200 h-40 w-full rounded"></div>
			<div className="h-6 bg-gray-200 rounded mt-2 w-3/4"></div>
			<div className="h-4 bg-gray-200 rounded mt-2 w-1/4"></div>
			<div className="h-10 bg-gray-200 rounded mt-4"></div>
		</div>
	);
}