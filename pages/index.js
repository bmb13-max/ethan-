export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#fff", color: "#111", padding: "1.5rem" }}>
      <header style={{ textAlign: "center", padding: "2rem 0" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>BMB Digital</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>Smart Marketing. Real Results.</p>
      </header>

      <section style={{ display: "grid", gap: "2rem", gridTemplateColumns: "1fr 1fr", padding: "2rem 0" }}>
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>What We Do</h2>
          <p style={{ margin: "1rem 0" }}>
            BMB Digital is a local digital marketing agency based in Des Moines, IA. We specialize in fast, efficient, and independent marketing solutions using the power of AI automation to help businesses grow online.
          </p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.2rem" }}>
            <li>Meta (Facebook/Instagram) Ads</li>
            <li>Google Ads</li>
            <li>Website Creation & Optimization</li>
            <li>Local SEO & Lead Generation</li>
            <li>AI Automation Services</li>
          </ul>
        </div>

        <div style={{ background: "#f3f3f3", borderRadius: "1rem", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>Why Choose Us</h2>
          <p style={{ margin: "1rem 0" }}>
            We work fast. We deliver quality. We focus on your ROI.
          </p>
          <p>
            Our independent setup allows us to move quicker than the big agencies, and our AI-powered approach means better targeting, better conversions, and lower ad spend.
          </p>
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "2rem 0" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>Ready to Grow?</h2>
        <p style={{ margin: "1rem 0" }}>Contact us today and let’s build something great together.</p>
        <a href="mailto:contact@bmbdigital.com" style={{ display: "inline-block", background: "#2563eb", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "1rem", textDecoration: "none" }}>
          Get in Touch
        </a>
      </section>

      <footer style={{ textAlign: "center", fontSize: "0.9rem", color: "#555", padding: "2rem 0" }}>
        &copy; {new Date().getFullYear()} BMB Digital. All rights reserved.
      </footer>
    </main>
  );
}
