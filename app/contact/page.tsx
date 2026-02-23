import { Hero } from "@/components/Hero";

export default function ContactPage() {
  return (
    <>
      <Hero title="Contact Wingxtra" copy="Need support, partnership info, or technical assistance? Our team is here to help." />
      <section className="section">
        <div className="container card" style={{ maxWidth: 760 }}>
          <h2>Support form</h2>
          <form>
            <label htmlFor="name">Name</label><br />
            <input id="name" name="name" style={{ width: "100%", padding: ".7rem", margin: ".4rem 0 1rem" }} />
            <label htmlFor="email">Email</label><br />
            <input id="email" type="email" name="email" style={{ width: "100%", padding: ".7rem", margin: ".4rem 0 1rem" }} />
            <label htmlFor="message">Message</label><br />
            <textarea id="message" name="message" rows={5} style={{ width: "100%", padding: ".7rem", margin: ".4rem 0 1rem" }} />
            <button className="btn btn-primary" type="submit">Send message</button>
          </form>
        </div>
      </section>
    </>
  );
}
