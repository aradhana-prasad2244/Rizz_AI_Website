import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Ryze AI</h2>
      <div style={styles.menu}>
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/pricing" className="btn-primary">Book Demo</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    color: "#4f46e5"
  },
  menu: {
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }
};
