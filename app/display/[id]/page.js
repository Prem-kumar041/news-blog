import Data from '../../data.json';
import Link from 'next/link';
export default function DisplayDetail({ params }) {
  const { id } = params;
  const item = Data.find(d => String(d.id) === id);
  if (!item) {
    return <div>Item not found</div>;
  }
  return (  
    <div className="data-item" style={{ maxWidth: 600, margin: "40px auto" }}>
      <img src={item.image} alt={item.title} style={{ width: "100%", borderRadius: 12 }} />
      <h2>{item.title}</h2>
      <p>{item.sub}</p>
      <p>{item.description}</p>
      <p>Rating: {item.rating}</p>
      <div style={{ marginTop: 40 }}>
        <h3 style={{ marginBottom: 18, fontWeight: 700, fontSize: '1.2rem', color: '#2563eb' }}>Other Movies</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, justifyContent: 'center' }}>
          {Data.filter(d => String(d.id) !== id).map(other => (
            <Link
              key={other.id}
              href={`/display/${other.id}`}
              style={{ display: 'block', width: 90, textAlign: 'center', textDecoration: 'none', color: '#222' }}
            >
              <img
                src={other.image}
                alt={other.title}
                style={{ width: 90, height: 60, objectFit: 'cover', borderRadius: 8, boxShadow: '0 2px 8px rgba(30,64,175,0.08)', marginBottom: 6 }}
              />
              <div style={{ fontSize: '0.9rem', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{other.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}