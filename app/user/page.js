import Data from '../data.json';
import './page.css';
import Link from 'next/link';

export default function User() {
  return (
    <div className="user-list">
      {Data.map((dataItems, index) => (
        <div key={index} className="data-item">
          <Link href={`/display/${dataItems.id}`}>
            <img className="data-img" src={dataItems.image} alt={dataItems.title} />
          </Link>
          <span className="seat-rating">★ {dataItems.rating}</span>
          <h2>{dataItems.title}</h2>
          <p>{dataItems.sub}</p>
        </div>
      ))}
    </div>
  );
}