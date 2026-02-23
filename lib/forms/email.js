import { Resend } from 'resend';

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY');
  }
  return new Resend(apiKey);
}

function getEmailConfig() {
  const to = process.env.FORM_TO_EMAIL;
  if (!to) {
    throw new Error('Missing FORM_TO_EMAIL');
  }

  return {
    to,
    from: process.env.FORM_FROM_EMAIL || 'Wingxtra <no-reply@wingxtra.com>'
  };
}

export async function sendFormEmail({ subject, html }) {
  const resend = getResendClient();
  const { to, from } = getEmailConfig();

  return resend.emails.send({
    from,
    to,
    subject,
    html
  });
}
