import { NextResponse } from 'next/server';
import { generateAdminToken, verifyAdminCredentials } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (verifyAdminCredentials(email, password)) {
      const token = generateAdminToken(email);
      return NextResponse.json({
        success: true,
        token,
        user: { email, role: 'admin' },
      });
    }

    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Login failed' },
      { status: 500 }
    );
  }
}