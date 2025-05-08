import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse } from '@/types';

interface CartRequestBody {
	productId: number;
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
	// Server processing simulation
	await new Promise(resolve => setTimeout(resolve, 8000));

	try {
		const body: CartRequestBody = await request.json();
		const { productId } = body;

		// Here would be the code to save to DB
		console.log(`Product ${productId} placed in the bucket`);

		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: 'Invalid request' },
			{ status: 400 }
		);
	}
}