import ContactForm from '@/components/forms/ContactForm';

export const metadata = {
  title: 'Contact | Wingxtra'
};

export default function ContactPage() {
  return (
    <section>
      <h1>Contact</h1>
      <p>Send us your questions and we will get back to you.</p>
      <ContactForm />
    </section>
  );
}
