import React, { useEffect, useState } from 'react';

function HeroBanner() {
  const brands = [
    'Apple',
    'Samsung',
    'Sony',
    'Nike',
    'Adidas',
    'LG',
    'Dell',
    'HP',
    'Asus',
    'Microsoft',
  ];

  // Define brand-specific URLs
  const brandLinks = {
    Apple: '/brands/apple',
    Samsung: '/brands/samsung',
    Sony: '/brands/sony',
    Nike: '/brands/nike',
    Adidas: '/brands/adidas',
    LG: '/brands/lg',
    Dell: '/brands/dell',
    HP: '/brands/hp',
    Asus: '/brands/asus',
    Microsoft: '/brands/microsoft',
  };

  const [shuffledBrands, setShuffledBrands] = useState([]);

  useEffect(() => {
    const shuffled = [...brands].sort(() => 0.5 - Math.random());
    setShuffledBrands(shuffled);
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#007bff',
        color: 'white',
        padding: '2rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        textAlign: 'center',
      }}
    >
      <h1>Doing Some Basic Testing</h1>
      <p>This Is A Test Page</p>

      {/* Scrolling brands container */}
      <div
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          marginTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.3)',
          paddingTop: '1rem',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            paddingLeft: '100%',
            animation: 'marquee 15s linear infinite',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            
          }}
        >
          {shuffledBrands.map((brand, index) => (
            <a
              key={index}
              href={brandLinks[brand]}
              style={{
                    marginRight: '3rem',
                    color: 'white',
                    textDecoration: 'none'
                    }}
>
              {brand}
            </a>
          ))}
        </div>
      </div>

      {/* Keyframes style */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
}

export default HeroBanner;


