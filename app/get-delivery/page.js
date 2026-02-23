import GetDeliveryForm from '@/components/forms/GetDeliveryForm';

export const metadata = {
  title: 'Get Delivery | Wingxtra'
};

export default function GetDeliveryPage() {
  return (
    <section>
      <h1>Get Delivery</h1>
      <p>Tell us about your location and delivery needs.</p>
      <GetDeliveryForm />
    </section>
  );
}
