export default function Loading() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="text-center">
				<div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
				<h2 className="text-2xl font-bold mt-4">Loading...</h2>
				<p className="text-gray-500">We prepare content</p>
			</div>
		</div>
	);
}