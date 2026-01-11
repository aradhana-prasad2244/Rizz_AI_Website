import { useState } from "react";

export default function Pricing() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companySize: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload

    console.log("Form submitted:", formData);

    alert("Pricing request submitted successfully!");

    setFormData({
      name: "",
      email: "",
      companySize: "",
    });
  };

  return (
    <section style={{ padding: "80px 40px", textAlign: "center" }}>
      <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>
        Simple Pricing
      </h2>

      <p style={{ color: "#64748b", marginTop: "20px" }}>
        Flexible plans for startups and enterprises.
      </p>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          margin: "40px auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          style={inputStyle}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          style={inputStyle}
          required
        />

        <input
          type="text"
          placeholder="Company Size (e.g. 10-50)"
          value={formData.companySize}
          onChange={(e) =>
            setFormData({ ...formData, companySize: e.target.value })
          }
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Request Pricing
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "12px",
  backgroundColor: "#4f46e5",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
};
