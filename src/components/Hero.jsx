import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div>
        <h1 style={styles.heading}>AI That Accelerates Your Business Growth</h1>
        <p style={styles.text}>
          Ryze AI helps teams automate workflows, analyze data, and scale faster using AI-powered solutions.
        </p>
        <div style={styles.buttons}>
          <Link to="/features" className="btn-primary">Get Started</Link>
          <Link to="/pricing" className="btn-secondary">Book Demo</Link>
        </div>
      </div>
      <img src="https://fulcrumdigital.com/wp-content/uploads/2025/02/news-featured-image-32-1024x538.jpg" alt="AI Illustration" style={styles.image} />
    </section>
  );
}

const styles = {
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    padding: "80px 40px",
    alignItems: "center",

    backgroundColor: "#eef2ff", 
    borderRadius: "12px",       
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)" 
  },
  heading: {
    fontSize: "48px",
    marginBottom: "20px"
  },
  text: {
    color: "#475569",
    marginBottom: "30px"
  },
  buttons: {
    display: "flex",
    gap: "16px"
  },
  image: {
    width: "100%",
    borderRadius: "16px",       
    border: "4px solid #e8e8ed", 
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)", 
    objectFit: "cover"          
  }
};
