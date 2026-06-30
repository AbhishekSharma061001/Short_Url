import { useState, useEffect } from "react";
import { api } from "../utils/api";

export default function MyUrls() {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");

  const fetchUrls = async () => {
    try {
      const data = await api("/url");
      setUrls(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div className="page-body">
      <div className="section-card">
        <h2>My URLs</h2>
        <p className="section-copy">Here is your list of shortened URLs and click counts.</p>

        {error && <p className="error">{error}</p>}

        {urls.length === 0 ? (
          <p className="no-data-message">You haven't shortened any URLs yet.</p>
        ) : (
          <div className="table-wrapper">
            <table className="url-table">
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
                    <td>
                      <a
                        href={`https://short-url-vr1u.onrender.com/${item.shortId}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.shortId}
                      </a>
                    </td>
                    <td>{item.redirectURL}</td>
                    <td>{item.visitHistory.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
