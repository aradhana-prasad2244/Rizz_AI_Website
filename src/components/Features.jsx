export default function Features() {
  const data = [
    { title: "AI Automation", desc: "Automate repetitive tasks effortlessly." },
    { title: "Smart Insights", desc: "Real-time analytics & reporting." },
    { title: "Scalable Platform", desc: "Built to grow with your business." }
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Features</h2>
      <div style={styles.grid}>
        {data.map((item, i) => (
          <div key={i} style={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: "100px 40px", textAlign: "center" },
  title: { marginBottom: "40px", fontSize: "32px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "24px" },
  card: { background: "#fff", padding: "80px 24px", borderRadius: "12px" }
};
