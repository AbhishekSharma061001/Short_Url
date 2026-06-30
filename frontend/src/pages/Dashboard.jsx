import { useState } from "react";
import { api } from "../utils/api";

export default function Dashboard() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      const data = await api("/url", {
        method: "POST",
        body: JSON.stringify({ URL: url }),
      });
      setMessage(`Short URL: ${data.shortURL}`);
      setUrl("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="page-body">
      <div className="section-card">
        <h2>Dashboard</h2>
        <p className="section-copy">
          Shorten your links quickly from here. Visit MyURLs to view your full link history and stats.
        </p>
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
        <form onSubmit={handleSubmit} className="url-form dashboard-form">
          <input
            type="url"
            placeholder="https://example.com/very-long-url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button type="submit">Shorten</button>
        </form>
      </div>
    </div>
  );
}
