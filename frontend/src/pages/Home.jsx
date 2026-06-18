import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { api } from "../utils/api";

export default function Home() {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { logout } = useAuth();

  const fetchUrls = async () => {
    try {
      const data = await api("/url");
      setUrls(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => { fetchUrls(); }, []);

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
      fetchUrls();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="home-container">
      <div className="header">
        <h1>URL Shortener</h1>
        <button onClick={logout} className="logout-btn">Logout</button>
      </div>

      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}

      <form onSubmit={handleSubmit} className="url-form">
        <input type="url" placeholder="https://example.com/very-long-url" value={url} onChange={(e) => setUrl(e.target.value)} required />
        <button type="submit">Shorten</button>
      </form>

      {urls.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Short URL</th>
              <th>Original URL</th>
              <th>Clicks</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td><a href={`https://short-url-vr1u.onrender.com/${item.shortId}`} target="_blank" rel="noreferrer">{item.shortId}</a></td>
                <td>{item.redirectURL}</td>
                <td>{item.visitHistory.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
