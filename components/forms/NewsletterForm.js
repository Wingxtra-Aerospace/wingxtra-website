'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website })
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Unable to subscribe');
      }

      setEmail('');
      setWebsite('');
      setStatus({ type: 'success', message: 'Subscribed successfully.' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Unable to subscribe.' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <label htmlFor="newsletter-email">Newsletter</label>
      <div className="newsletter-row">
        <input
          id="newsletter-email"
          required
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button disabled={submitting} type="submit">{submitting ? 'Submitting…' : 'Join'}</button>
      </div>
      <input
        tabIndex={-1}
        autoComplete="off"
        className="honeypot"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        name="website"
      />
      {status.message ? <p className={status.type}>{status.message}</p> : null}
    </form>
  );
}
