import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/forms/validation';
import { enforceRateLimit, getClientKey } from '@/lib/forms/rateLimit';
import { sendFormEmail } from '@/lib/forms/email';

export async function POST(request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message || 'Invalid form data' },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ success: true });
    }

    const rateLimit = enforceRateLimit(`contact:${getClientKey(request)}`);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again shortly.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rateLimit.retryAfterMs || 0) / 1000)) } }
      );
    }

    await sendFormEmail({
      subject: 'New Contact Form Submission',
      html: `
        <h2>Contact form submission</h2>
        <p><strong>Name:</strong> ${parsed.data.name}</p>
        <p><strong>Email:</strong> ${parsed.data.email}</p>
        <p><strong>Message:</strong><br/>${parsed.data.message.replace(/\n/g, '<br/>')}</p>
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
