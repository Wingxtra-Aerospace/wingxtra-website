import { NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/forms/validation';
import { enforceRateLimit, getClientKey } from '@/lib/forms/rateLimit';
import { sendFormEmail } from '@/lib/forms/email';

export async function POST(request) {
  try {
    const payload = await request.json();
    const parsed = newsletterSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message || 'Invalid form data' },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ success: true });
    }

    const rateLimit = enforceRateLimit(`newsletter:${getClientKey(request)}`);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again shortly.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rateLimit.retryAfterMs || 0) / 1000)) } }
      );
    }

    await sendFormEmail({
      subject: 'New Newsletter Subscription',
      html: `
        <h2>Newsletter subscription</h2>
        <p><strong>Email:</strong> ${parsed.data.email}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Unable to submit form right now' },
      { status: 500 }
    );
  }
}
