import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0B1120",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <h1 style={{ fontSize: "3rem" }}>🛡 TruthLens AI</h1>

        <h2 style={{ color: "#60A5FA" }}>
          AI-Powered Cross-Document Consistency & Forgery Detection
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "30px auto",
            lineHeight: "1.8",
            color: "#CBD5E1",
          }}
        >
          Upload underwriting documents, detect inconsistencies,
          identify forged records, validate financial reality,
          and generate explainable fraud reports.
        </p>

        <button
         onClick={() => navigate("/upload")}
          style={{
            background: "#2563EB",
            color: "white",
            padding: "15px 30px",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Start New Investigation
        </button>
      </div>
    </div>
  );
}

export default Home;