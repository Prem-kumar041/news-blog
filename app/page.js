import './globals.css';
import './page.css';
import Data from "./data.json";
import Link from 'next/link';
export default function Home() {
  return (
    <div className="home-container">
      <div className="home-title">Welcome to the Home Page</div>
      <div className="home-subtitle">Explore the latest content</div>
      <div className="home-actions">
        {}
        
      </div>
      <div style={{ marginTop: '2rem', width: '100%', maxWidth: 900 }}>
        {Data.map((dataItems, index) => (
          <div key={index} className="data-item" style={{
            margin: '2rem 0',
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 12px #b3c6ff33',
            padding: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <Link href={`/display/${dataItems.id}`}>
                <img src={dataItems.image} alt={dataItems.title} style={{ cursor: "pointer", borderRadius: 12, width: 120, height: 120, objectFit: 'cover', boxShadow: '0 2px 8px #b3c6ff44' }} />
              </Link>
              <div>
                <h2 style={{ color: '#1a237e', marginTop: 0 }}>{dataItems.title}</h2>
                <p style={{ color: '#3949ab', margin: 0 }}>{dataItems.sub}</p>
              </div>
            </div>
            <div className="rating-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: 90 }}>
              <span style={{ fontSize: 20, color: '#FFD600', marginBottom: 2, marginRight: 4 }}>★</span>
<span style={{ fontSize: 16, color: '#333' }}>{dataItems.rating.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}